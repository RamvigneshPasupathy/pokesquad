FROM mhart/alpine-node

RUN apk update && \
    apk add git && \
    apk add python build-base

# create app directory
RUN mkdir -p /usr/src/app && echo "Poke Squad"
WORKDIR /usr/src/app

# install application dependencies
COPY package.json /usr/src/app/
RUN npm install

# bundle app source
COPY . /usr/src/app/

EXPOSE 3000

WORKDIR /usr/src/app

CMD ["npm", "start"]
