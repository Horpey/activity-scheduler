FROM node:16.18.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

COPY package*.json ./

# update npm
RUN npm install -g npm@latest

RUN npm install --legacy-peer-deps

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Expose the app's port
EXPOSE 8080

# Run the app
CMD [ "npm", "start"]