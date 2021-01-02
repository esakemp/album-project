FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ./server /usr/src/app/server
COPY ./database /usr/src/app/database

WORKDIR /usr/src/app/server
RUN npm ci
EXPOSE 8080

CMD npm run dev

