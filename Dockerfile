FROM node:alpine

WORKDIR /article-docker

COPY package.json /article-docker/

RUN npm install

# RUN npm install nodemon -g

COPY . /article-docker/

CMD node server.js

# CMD npm run dev

EXPOSE 3040