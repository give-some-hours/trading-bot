FROM node:latest
WORKDIR /api
EXPOSE 4000
COPY . ./
RUN npm install
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

CMD ["npm", "run", "prod"]
