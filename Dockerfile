FROM node:6.11.1

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
RUN npm install nodemon mocha -g 

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]