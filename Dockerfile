# Use the official Node.js image
FROM node:14

# Set the working directory for Node.js application
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the Node.js application code
COPY . .

# Change the working directory to /sandbox for C compilation
WORKDIR /sandbox

# Ensure that myprogram.c is copied to the /sandbox directory
COPY sandbox/myprogram.c .

# Compile the C program
RUN gcc -o myprogram myprogram.c

# Set the working directory back to Node.js application
WORKDIR /usr/src/app

# Expose the port the app runs on
EXPOSE 7000

# Run the Node.js application
CMD ["node", "src/app.js"]

