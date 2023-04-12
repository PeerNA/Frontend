FROM node:latest as build
WORKDIR /usr/src/app
                
COPY package* yarn.lock .yarn .yarnrc.yml ./
COPY . .

RUN yarn

EXPOSE 3000
CMD [ "yarn", "start" ]