FROM node:16-slim

WORKDIR /usr/app/

COPY . .

RUN npm i

EXPOSE 4000

CMD ["node", "main.js"]
