# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app/docker-mahendra

# Copy package.json and package-lock.json to the container
COPY package.json .
COPY helloworld.js .

# Install application dependencies
RUN npm install


# Expose a port (if your application listens on a specific port)
EXPOSE 3000

# Define the command to run your application
ENTRYPOINT ["node", "helloworld.js"]
