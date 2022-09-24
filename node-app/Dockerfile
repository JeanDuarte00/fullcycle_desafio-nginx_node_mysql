FROM node:15

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN apt-get update
RUN npm install

RUN chown -R www-data:www-data /usr/src/app

CMD ["node", "server.js"]

