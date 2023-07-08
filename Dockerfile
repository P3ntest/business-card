FROM node:lts AS build
WORKDIR /app
COPY . .
ARG COCKPIT_URL
ENV COCKPIT_URL=$COCKPIT_URL
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80