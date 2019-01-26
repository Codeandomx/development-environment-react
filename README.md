Development environment react
===

Entorno de desarrollo para react, utilizando gulp, babel y browserify.

# Contenido

## Articulo

En el blog de codeando publicamos un articulo donde damos una introducción a React y vemos paso a paso como crear este entorno de desarrollo, visita el articulo.-

[Introducción a React](http://blog.codeando.club/articulos/introduccion-a-react-creando-aplicacion-basica.html)

## Instalación

Puedes [descargar](https://github.com/Codeandomx/development-environment-react/archive/master.zip) el contenido del repositorio directamente o clonarlo con el siguiente comando.-

```js
git clone https://github.com/Codeandomx/development-environment-react.git my-project
```

Ingresamos al directorio del proyecto e instalamos las dependencias globales.-

```js
cd my-project
npm i -g gulp babel-cli
```

Instalamos las dependencias del proyecto.-

```js
npm install
```

Nota: Si te salen algunos mensajes de advertencias como los siguientes, solo ignoralos, son un problema de la libreria gulp.-

```js
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
```

Listo ya podemos trabajar.

## Iniciar el sevidor

Despues de instalar las dependencias podemos correr el servidor con el siguiente comando.-

```js
npm run start
```

Para visualizar la página debemos ingresar a.-

[127.0.0.1:3000](http://127.0.0.1:3000)

## Archivos de interes

Los archivos en formato JSX los almacenaremos en el directorio.-

```js
./app/src
```

Despues de transpilar los archivos JSX, los archivos JS se crean en el siguiente directorio.-

```js
./app/dist
```

El archivo HTML principal (index.html) lo encontramos en el directorio.-

```js
./app
```

## Ingresa a la plataforma

Ingresa a la plataforma y se parte de nuestra comunidad (Plataforma en desarrollo).

[Plataforma Codeando](http://codeando.club)

## Errores y aclaraciones sobre el código

Si encuentras algún error en el código o la forma de optimizarlo, puedes informar al equipo de Codeando en el siguiente enlace (creando una issue) para realizar las correcciones correspondientes.-

[Crear issue](https://github.com/codeandomx/development-environment-react/issues)

Muchas gracias!!!