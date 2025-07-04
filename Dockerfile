# Use official Nginx image
FROM nginx:alpine

# Copy your website files into the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80