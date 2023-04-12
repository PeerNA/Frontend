FROM node:latest as build
WORKDIR /usr/src/app


RUN yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
    
COPY package* yarn.lock .yarn .yarnrc.yml ./
COPY . .

RUN yarn

EXPOSE 3000
CMD [ "yarn", "start" ]