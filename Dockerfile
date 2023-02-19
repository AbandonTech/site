# TODO: Actually build...

FROM node:18-alpine

COPY . .
RUN yarn install

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "run", "dev"]