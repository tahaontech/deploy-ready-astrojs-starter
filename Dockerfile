FROM node:lts-alpine

# set the working direction
WORKDIR /app

COPY package*.json ./

RUN npm install -g npm
RUN npm install

COPY . ./

# build the app
RUN npm run build
# start app
# RUN chown -R node /
# USER node
CMD ["node", "server.js"]