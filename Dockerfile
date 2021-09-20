FROM quay.io/4n4nd/node:10
RUN mkdir -p /src/app
RUN mkdir -p /src/app/memory-inflation
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm run build
CMD [ "npm", "run", "serve"]
EXPOSE 3000
