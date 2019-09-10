# Docker config file to run the app in docker.
# https://docs.docker.com/engine/reference/builder/#usage

FROM node:12-alpine as base

WORKDIR /api

COPY package*.json ./

FROM base as build

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

COPY . .

RUN npm run test

RUN npm run build

FROM base as release

RUN npm install --production

COPY --from=build /api/dist/app.js .

FROM gcr.io/distroless/nodejs as prod

COPY --from=release . .

EXPOSE 3000

CMD [ "/api/app.js" ]
