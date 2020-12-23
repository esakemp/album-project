FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ./server/package* ./
COPY ./server /usr/src/app/server
COPY ./database /usr/src/app/database

RUN npm ci
WORKDIR /usr/src/app/server
EXPOSE 8080

CMD node index.js

