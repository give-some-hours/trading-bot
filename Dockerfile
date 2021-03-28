FROM nginx:alpine

EXPOSE 80
WORKDIR /usr/share/nginx/html/client
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./client/build/ .
