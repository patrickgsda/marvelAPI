FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.18
COPY --from=node /app/dist/marvelAPI /usr/share/nginx/html

EXPOSE 80
