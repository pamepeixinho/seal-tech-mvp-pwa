FROM node:8.11.1-onbuild
EXPOSE 5000
WORKDIR /usr/src/app
ADD . .
CMD ["npm", "run", "start:production"]
