FROM node:16

WORKDIR /usr/app/

COPY . .

RUN npm i

CMD ['node', 'main.js']