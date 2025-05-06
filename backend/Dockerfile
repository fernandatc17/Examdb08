FROM node:18

# Crear directorio
WORKDIR /app

# Copiar archivos
COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto del backend
EXPOSE 8000

# Comando de inicio
CMD ["npm", "run", "dev"]
