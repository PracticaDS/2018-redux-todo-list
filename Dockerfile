FROM node:9-alpine

RUN npm install --global yarn

COPY package.json .
COPY yarn.lock .

RUN yarn install; \
    yarn global add serve

COPY . . 
RUN yarn build

ENV NODE_ENV=production

EXPOSE 3000
CMD serve -s build