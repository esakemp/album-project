FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ./server /usr/src/app/

RUN npm ci
EXPOSE 8080

CMD npm run dev

