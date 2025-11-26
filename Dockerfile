# Use the official Nginx image as the base image
FROM nginx:latest
# Remove the default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*
# Copy all website files into the Nginx HTML directory
COPY public/* /usr/share/nginx/html