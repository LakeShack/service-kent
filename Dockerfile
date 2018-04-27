FROM node:latest

RUN mkdir -p /docker/app

WORKDIR /docker/app

COPY . /docker/app

RUN npm install

EXPOSE 4212

CMD [ "npm", "start" ]