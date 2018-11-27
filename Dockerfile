FROM node:10

WORKDIR /etc/tech-radar

COPY ./package.json .
RUN ["npm", "install"]

COPY . .

RUN ["npm", "run", "build"]

CMD ["npm", "run", "production"]
