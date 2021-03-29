FROM nginx:alpine

RUN apk update

EXPOSE 80
EXPOSE 443

WORKDIR /usr/share/nginx/html/client
COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf.template

# Download certbot tool
RUN apk add certbot certbot-nginx
RUN mkdir /etc/letsencrypt

COPY ./client/build/ .
