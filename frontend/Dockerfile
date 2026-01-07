# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
ARG STRAPI_URL
ARG STRAPI_TOKEN
ENV STRAPI_URL=$STRAPI_URL
ENV STRAPI_TOKEN=$STRAPI_TOKEN

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Default nginx config is usually fine for static Astro, 
# but we might need a custom one for SPA-like routing if used.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
