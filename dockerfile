# Usa una imagen de Node como base
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Compila la aplicación
RUN npm run build --prod

# Configura un servidor ligero para servir la aplicación Angular
FROM nginx:alpine
COPY --from=0 /app/dist/* /usr/share/nginx/html/

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar el servidor
CMD ["nginx", "-g", "daemon off;"]
