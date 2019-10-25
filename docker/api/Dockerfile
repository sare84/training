FROM node:latest

WORKDIR /usr/src/app
RUN ls -a

RUN mkdir -p /usr/src/app
RUN npm install
RUN npm install -g nodemon

#  CMD [ “npm”, “start” ]
CMD ["npm", "run", "start"]