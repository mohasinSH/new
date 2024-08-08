FROM node:20

WORKDIR /app

COPY package*.json ./

# Install dependencies with legacy peer deps to avoid conflicts
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
