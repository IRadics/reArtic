FROM node:18-alpine as base

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

FROM base as dev

EXPOSE 3000

CMD ["npm", "start"]

FROM base as prod

EXPOSE 3000

RUN npm ci

RUN npm install -g serve

RUN npm run build

CMD serve -s build