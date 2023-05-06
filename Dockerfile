FROM node:18-alpine
WORKDIR /react
COPY . .
RUN npm install
EXPOSE 3000