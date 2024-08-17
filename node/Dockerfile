FROM node:20.16.0-alpine3.20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apk update \
    && apk add --no-cache wget build-base

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#COPY . .

EXPOSE 8080

CMD ["node", "./index.js"]
