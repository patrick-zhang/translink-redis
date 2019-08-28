# Docker config file to run the app in docker.
# https://docs.docker.com/engine/reference/builder/#usage

FROM node:10-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install -f

COPY . .

RUN npm run test

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]
