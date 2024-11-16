# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Define build arguments
ARG REACT_APP_DOMAIN

# Set environment variable for the build
ENV REACT_APP_DOMAIN=${REACT_APP_DOMAIN}

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# (Optional) Copy custom Nginx configuration
# If you have a custom nginx.conf, uncomment the next line and ensure it's in your project root
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
