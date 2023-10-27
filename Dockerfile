FROM node:16-slim

WORKDIR /usr/app/

COPY . .

RUN npm i

CMD ["node", "main.js"]
