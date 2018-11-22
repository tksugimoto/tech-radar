FROM node:10

WORKDIR /etc/tech-radar

COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]

CMD ["npm", "run", "production"]
