FROM cypress/browsers:node16.14.0-slim-chrome99-ff97

WORKDIR /app

# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

# https://github.com/cypress-io/cypress-docker-images/issues/270
ENV QT_X11_NO_MITSHM=1
ENV _X11_NO_MITSHM=1
ENV _MITSHM=0
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

# Копируется глобальные файлы
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY .npmrc ./.npmrc
COPY tsconfig.json ./tsconfig.json

# Копируется пакеты
COPY packages ./packages

RUN npm install

RUN npm run test:components --workspace=@example/common
