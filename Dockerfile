FROM 7010/yarn:7

COPY . /opt/next-example-app
WORKDIR /opt/next-example-app

RUN yarn
RUN npm run build
CMD npm start
