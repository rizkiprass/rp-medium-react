# FROM node:16-alpine

# WORKDIR /app

# COPY package*.json ./
# COPY . .

# # ARG REACT_APP_API_ENDPOINT
# # ARG REACT_APP_DB_ENDPOINT
# # ENV REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT
# # ENV REACT_APP_DB_ENDPOINT=$REACT_APP_DB_ENDPOINT


# RUN npm install

# EXPOSE 3000

# CMD ["npm", "start"]

# Build stage
FROM node:alpine AS build-stage

# Set the working directory
WORKDIR /app

# Copy the package and package-lock files from local to the container
COPY package*.json /app/

# Run npm install to install packages
RUN npm install

# Copy all the folder contents from local to the container
COPY . .

# Create a React production build
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration to the Nginx configuration directory
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built React app from the build stage to the Nginx web root directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 (default for HTTP traffic)
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]