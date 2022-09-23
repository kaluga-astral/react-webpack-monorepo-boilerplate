FROM node:16 AS build

WORKDIR /usr/src/app

# Копируется глобальные файлы
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY .npmrc ./.npmrc
COPY tsconfig.json ./tsconfig.json

# Копируется пакеты для production
COPY tools ./tools
COPY static ./static
COPY common ./common

# Копируются исходники main
COPY apps/main ./apps/main

# Игнорируются devDependency при установке зависимостей
RUN npm i --production

ARG API_URL

RUN npm run build:prod --workspace=@example/main

FROM fholzer/nginx-brotli:v1.16.0
COPY devops/main/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
