FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ./updater/package* ./
COPY ./updater /usr/src/app/updater
COPY ./database /usr/src/app/database

RUN npm ci
WORKDIR /usr/src/app/updater
EXPOSE 8081

CMD node index.js
