## Información importante
Este proyecto tiene 2 ramas

- main
- use_of_redux

En la rama principal no se hace uso de redux debido al tamaño de la app, sin embargo se crea la segunda rama en caso que se quiere ver su uso en este proyecto y lo que a futuro si se necesita agregar más funcionalidad podemos usar mejor los datos


## Versiones usadas
node = v20.14.0

npm = 10.7.0

openjdk version "17.0.11" 2024-04-16 LTS

## Antes de probar en un dispositivo fisico y/o emulador
$npm i
$npx pod-install (ios)
$./android/gradlew clean (en caso de ser necesario) (android)

```sh
npm i

cd ios
pod install

./android/gradlew clean (en caso de ser necesario) (android)
```

## Instalación

```sh
# android
npx react-native run-android

#ios
npx react-native run-ios
```

## Iniciar Metro

```sh
# Using npm
npm start

#Using npx
npx react-native start

# OR using Yarn
yarn start
```
