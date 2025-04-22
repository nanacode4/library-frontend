# Phase 1: Building a React Application
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Phase 2: Run the packaged frontend with nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Customize nginx configuration (if you have localhost.conf)
# COPY localhost.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
