FROM node as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm cache clean --force
RUN npm install
COPY ./ /app/
RUN npm run build
FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/nginx.conf