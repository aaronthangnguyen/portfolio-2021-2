FROM node:16

# Open environment port
ENV PORT 3000

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copy source files
COPY . /usr/src/app

# Build app
RUN npm run build
EXPOSE 3000

# Run app
CMD "npm" "run" "start"