FROM node:12.18

WORKDIR /usr/src/app
COPY . .

RUN yarn global add pm2
RUN yarn install
RUN yarn prepare
RUN yarn build
EXPOSE 8080
CMD [ "pm2-runtime", "bin/dev.js" ]