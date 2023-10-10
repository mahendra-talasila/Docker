FROM node:20-alpine

WORKDIR /app/docker-mahendra

COPY package.json .
COPY nice-job.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "nice-job.js"]