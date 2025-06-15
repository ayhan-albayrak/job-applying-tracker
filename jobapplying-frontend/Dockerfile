# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM node:18 
WORKDIR /app
# EXPOSE 8080
# EXPOSE 8081


COPY package*.json ./
RUN npm install 
# Copy the rest of the application code
COPY . .
# Build the application
RUN npm run build
EXPOSE 3000
# Start the application
CMD ["npm", "start"]