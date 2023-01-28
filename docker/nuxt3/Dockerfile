FROM node:18.13.0-alpine3.17 as nuxt3

COPY ./docker/nuxt3/entrypoint.sh /usr/local/bin/entrypoint

WORKDIR /home/www

RUN yarn global add sass && \
    yarn install

ENTRYPOINT ["entrypoint"]