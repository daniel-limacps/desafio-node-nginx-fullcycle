FROM nginx:1.15.0-alpine

RUN  rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /var/www/html/public -p && \
    touch /var/www/html/index.php
