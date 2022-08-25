FROM node:14

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN yarn

EXPOSE 3000

ENTRYPOINT [ "yarn", "dev" ]