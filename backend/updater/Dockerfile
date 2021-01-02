FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ./updater /usr/src/app/updater
COPY ./database /usr/src/app/database

WORKDIR /usr/src/app/updater
RUN npm ci

CMD node index.js
