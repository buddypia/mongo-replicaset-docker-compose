FROM mongo:latest

COPY initReplSet.js .

CMD ["mongo", "--host", "mongodb-primary", "-u", "root", "-p", "toor", "--verbose", "initReplSet.js"]