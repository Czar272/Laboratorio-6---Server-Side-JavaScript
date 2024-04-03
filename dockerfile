# get the latest mysql image
FROM mysql:latest

# Set enviroment variables for MySQL
ENV MYSQL_DATABASE=blog_22535
ENV MYSQL_ROOT_PASSWORD=MYSQL_ROOT_PASSWORD

# User and password for mysql
ENV MYSQL_USER=blog_user
ENV MYSQL_PASSWORD=blog_password

COPY schema.sql ./docker-entrypoint-initdb.d/