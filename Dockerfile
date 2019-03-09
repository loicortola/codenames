FROM nginx
ARG SRC_DIR
COPY $SRC_DIR/ /usr/share/nginx/html/
COPY conf/default.conf /etc/nginx/conf.d/default.conf
