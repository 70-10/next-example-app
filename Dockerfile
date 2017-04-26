FROM node:6-alpine

COPY . /next-example-app
WORKDIR /next-example-app

RUN yarn
RUN yarn build
CMD ["yarn", "start"]
