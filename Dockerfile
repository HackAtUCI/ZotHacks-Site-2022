FROM node:18
WORKDIR /react
COPY . .
RUN npm install
EXPOSE 3000