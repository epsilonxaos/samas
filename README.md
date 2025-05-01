![Static Badge](https://img.shields.io/badge/Version-2.0.0-purple)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# react-project-empty

## 🏷️ Versionamiento Semántico

El proyecto sigue el esquema de versionamiento semántico (**SemVer**) utilizando los siguientes incrementos de versión:

- **MAJOR:** Cambios incompatibles con versiones anteriores.
- **MINOR:** Nuevas funcionalidades que son retrocompatibles.
- **PATCH:** Correcciones de errores o mejoras menores que no rompen nada.

#### Parámetros:

- `[version]`: Especifica la nueva versión del proyecto. Debe seguir el formato de versionado semántico.
- `[fecha]`: Indica la fecha de lanzamiento de la nueva versión. Debe estar en un formato reconocible, como `DD-MM-YYYY`.

Ejemplo:

```sh
npm run release -- patch 15102025
```

<br>

## ⬆️ Guía para Actualización de Dependencias con npm-check-updates

Para mantener las dependencias de tu proyecto actualizadas, puedes utilizar la herramienta `npm-check-updates` (ncu). Esta herramienta te permite ver y actualizar las versiones de las dependencias en tu archivo `package.json`.

- Para más información, visita: https://www.npmjs.com/package/npm-check-updates

<br>

### Instalación

Primero, instala `npm-check-updates` globalmente:

```sh
npm install -g npm-check-updates
```

### Uso Interactivo (Recomendado)

**Seleccionar Dependencias Interactivamente:**

Para buscar y seleccionar las dependencias para actualizar de manera interactiva:

```sh
ncu --interactive
ncu -i
```

Combina con `--format group` para una experiencia más organizada.

<br>

### Uso comandos (Experimentado)

1. **Verificar Actualizaciones:**

   Para ver las dependencias que tienen actualizaciones disponibles, ejecuta:

   ```sh
   ncu
   ```

   Esto mostrará una lista de las dependencias que tienen versiones más recientes disponibles.

2. **Actualizar Dependencias:**

   Para actualizar las versiones en tu archivo `package.json` a las últimas versiones, ejecuta:

   ```sh
   ncu -u
   ```

   Esto actualizará las versiones en tu `package.json` pero no instalará las nuevas versiones.

3. **Instalar Dependencias Actualizadas:**

   Después de actualizar el archivo `package.json`, instala las nuevas versiones ejecutando:

   ```sh
   npm install
   ```

<br>

### Opciones Útiles

- **Actualizar Dependencias Menores y Parches:**

  Si solo deseas actualizar las versiones menores y parches (sin actualizar a versiones mayores), puedes usar:

  ```sh
  ncu -t minor
  ```

- **Actualizar Dependencias Mayores:**

  Para actualizar solo las versiones mayores, usa:

  ```sh
  ncu -t major
  ```

- **Ignorar Dependencias Específicas:**

  Si deseas ignorar ciertas dependencias, puedes especificarlas con la opción `--reject`:

  ```sh
  ncu --reject dependency-name
  ```

### Ejemplo Completo

```sh
# Instalar npm-check-updates globalmente
npm install -g npm-check-updates

# Verificar actualizaciones disponibles
ncu

# Actualizar versiones en package.json
ncu -u

# Instalar nuevas versiones
npm install
```

Siguiendo estos pasos, podrás mantener tus dependencias actualizadas fácilmente utilizando `npm-check-updates`.
