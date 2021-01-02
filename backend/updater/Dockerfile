FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ./updater /usr/src/app/
COPY ./server/database /usr/src/app/database

RUN npm ci

CMD node index.js
