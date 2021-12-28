FROM mongo:latest

COPY keyfile /etc/.
RUN chown mongodb /etc/keyfile
RUN chmod 400 /etc/keyfile

