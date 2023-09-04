FROM node:20-alpine

WORKDIR /app
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# Bundle app source
COPY . .

RUN npm install

EXPOSE 80

CMD ["npm", "start"]