# HackUCI ZotHacks Repo

Simple React site for marketing ZotHacks, Hack at UCI's introductory hackathon held every Fall Quarter.

<img width="1360" alt="Screen Shot 2020-09-29 at 5 30 00 PM" src="https://user-images.githubusercontent.com/13127625/94860095-6a903b80-03ea-11eb-90c6-dbd770a72210.png">

## Local Docker Setup

Download Docker Desktop for your OS: https://www.docker.com/products/docker-desktop

Run `docker compose up` in the root directory of the project

### Adding additional packages to the container

Once you have added a new package to the project, you will need to rebuild the container to include the new package.

Run `docker compose up --build` to rebuild the container with the new package.

### Running commands in the container

Run `docker ps` to list the currently running containers. You should see a container with the name `zothacks-site-react`. Copy the container ID.

Run `docker exec -it <container_id> bash` to run a bash shell in the container. You can now run commands in the container.

## Local non-Docker Setup

Run `npm ci` in the root directory of the project to install dependencies

Run `npx react-scripts start` to start the development server
