FROM node:latest

WORKDIR /app

COPY ./ ./
RUN npm install

ENV TOKEN= LOG_LEVEL=info EXPOSE_PORT=3000

EXPOSE $EXPOSE_PORT

CMD [ "npm", "run", "start" ]