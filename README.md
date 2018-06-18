[![Build Status](https://travis-ci.org/PracticaDS/2018-redux-todo-list.svg?branch=master)](https://travis-ci.org/PracticaDS/2018-redux-todo-list)
# TodoList Redux

Clásico ejemplo inicial para aprender Redux.

![screenshot](https://user-images.githubusercontent.com/4428120/37571683-b354df20-2ade-11e8-9137-db83254041bf.png)


# Setup de Node

Se requiere tener instalado node. Una buena forma es a través de [nvm](https://github.com/creationix/nvm) que permite tener varias versiones de node al mismo tiempo (similar a rvm para ruby).
En la página indica como instalarlo.

Luego 

```bash
nvm install v9
```

Para instalar node v9 (última estable)

Luego para configurarlo como default

```bash
nvm alias default v9
```

o, cada vez que quieran cambiar o usar esa versión en particular

```bash
nvm use v9
```

# Yarn / NPM

Luego vamos a instalar "yarn", un gestor de paquetes/dependencias
Para eso seguir estas instrucciones [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

# Setup del proyecto

Ahora sí, una vez que clonamos este repo, vamos a instalar la dependencias

```bash
yarn install
```

Va a tardar un rato.

# Iniciar la aplicación

Para levantar la aplicación ejecutamos

```bash
yarn start
```

# Versiones

Tenemos varias "versiones" de la aplicacion en diferentes branches.
Y algunas de ellas requieren también levantar el proyecto del backend que pueden encontrar en [https://github.com/PracticaDS/2018-redux-todo-list-backend](https://github.com/PracticaDS/2018-redux-todo-list-backend)

Acá un cuadro para entender como ejecutar en orden progresivo hasta llegar a `master` que contiene la versión "final"

| Descripcion | Frontend branch | Backend branch |
| ----------- | --------------- | -------------- |
| Con Redux sin comunicación con el back |  `inicial-sin-fetch`  |   ---  |
| Idem a `inicial-sin-fetch` + thunks y comunicación con el back para persistir. Este backend no persiste, sino que guarda todo en memoria (impl dummy) |  `fetch-con-backend` | `inicial-sin-persistencia` |
| Idem al anterior solo que tiene unos pequeños ajustes para funcionar con el backend que persiste en mongo (`id` cambió a `_id`) | `fetch-con-backend-mongo` | `mongoose` |
| Idem a `fetch-con-backend` pero además utiliza websockets para recibir eventos en real-time cuando otros usuarios modifican el estado | `websockets` | `websockets` |
| Idem a `fetch-con-backend`: + totalmente dockerizado (Ver tambien el repo `2018-redux-todo-list-compose`) + CI buildea imagenes | `dockerized` | `dockerized` |
| Idem a `dockerized` + CD: el CI genera releases | `master` | `master` |

