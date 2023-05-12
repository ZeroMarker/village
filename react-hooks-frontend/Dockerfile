FROM node:19.6-alpine

# COPY [host machine] [container] first relative to Dockerfile second is relative to the root on the container
# COPY . .
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# RUN npm start

# docker build -t react . // Title
# docker images -a
# docker run -it -p 80:3000 react // The -it instructs Docker to allocate a pseudo-TTY connected to the container’s stdin; creating an interactive bash shell in the container. 

# winpty docker run -it -p 80:3000 react sh // at git bash winpty is virtual unix env for windows

