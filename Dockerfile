FROM node
WORKDIR /usr/src/app

COPY . .
COPY .yarn ./
COPY .* ./
COPY package* yarn.lock .pnp*     ./
COPY .yarnrc.yml                  ./
COPY .yarn                        ./.yarn                   

RUN yarn

EXPOSE 3000
CMD [ "yarn", "start" ]