# Docker config file to run the app in docker.
# https://docs.docker.com/engine/reference/builder/#usage

FROM node:12-alpine

WORKDIR /api

COPY package*.json ./

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

COPY . .

RUN npm run test

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]
