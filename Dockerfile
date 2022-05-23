FROM node:alpine

WORKDIR /article-docker

COPY package.json /article-docker/

RUN npm install

COPY . /article-docker/

CMD node server.js

EXPOSE 3040