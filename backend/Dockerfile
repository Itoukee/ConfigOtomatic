FROM node:18-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./


ENV NODE_ENV=development
RUN npm install && npm install nodemon 
COPY . /

EXPOSE 8000
CMD ["npm","run", "dev"]