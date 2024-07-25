FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /sandbox
RUN gcc -o myprogram myprogram.c

CMD ["node", "/usr/src/app/src/app.js"]
