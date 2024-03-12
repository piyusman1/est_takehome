FROM node:18 as builder

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build /usr/src/app/build

EXPOSE 80

# Command to run the application
CMD ["npx", "serve", "-s", "build", "-l", "80"]