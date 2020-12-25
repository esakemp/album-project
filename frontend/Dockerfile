FROM node:10.15-alpine

WORKDIR /usr/src/app

COPY ./package* ./
COPY ./ /usr/src/app/

RUN npm ci
EXPOSE 8081

CMD npm run dev