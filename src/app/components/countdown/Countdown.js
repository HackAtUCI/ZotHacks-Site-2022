import React, { useState, useRef, useEffect } from 'react'
import FlipNumbers from 'react-flip-numbers'
import './Countdown.scss'
import tan from '../../../globals/zothacks-styles.scss'

const Countdown = (props) => {

    const ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00:00');

    const getWinDims = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [winDim, setWinDim] = useState(getWinDims());

    useEffect(() => {
        const remainingTime = () => {
            const total = Date.parse(props.date) - Date.now()
            const seconds = Math.floor((total / 1000) % 60)
            const minutes = Math.floor((total / 1000 / 60) % 60)
            const hours = Math.floor((total / 1000 / 60 / 60) % 24)
            const days = Math.floor((total / 1000 / 60 / 60 / 24))
            return { total, seconds, minutes, hours, days };
        }

        const startTime = () => {
            let { total, seconds, minutes, hours, days } = remainingTime();
            if(total >= 0) {
                setTimer(
                    days.toString().padStart(2, '0') + ':' + hours.toString().padStart(2, '0') + ':' +
                    minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
                )
            }
        }

        if (ref.current) clearInterval(ref.current);
        const id = setInterval(() => {
            startTime();
        }, 1000)
        ref.current = id;
    }, [props.date]);

    useEffect(() => {
        function handleResize() {
            setWinDim(getWinDims());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);    
    }, []);

    const countdownGenerator = () => {
        if(winDim.width > 1300) {
            return (<FlipNumbers play numbers={timer} color={tan} width={110} height={180} numberStyle={{textAlign: "left", fontSize: "95px"}}/>);
        } else if(winDim.width > 850) {
            return (<FlipNumbers play numbers={timer} color={tan} width={80} height={140} numberStyle={{textAlign: "left", fontSize: "85px"}}/>);
        } else if(winDim.width > 450) {
            return (<FlipNumbers play numbers={timer} color={tan} width={50} height={100} numberStyle={{textAlign: "left", fontSize: "60px"}}/>);
        } else {
            return (<FlipNumbers play numbers={timer} color={tan} width={30} height={80} numberStyle={{textAlign: "left", fontSize: "45px"}}/>);
        }
    }

    return countdownGenerator();
}

export default Countdown;
