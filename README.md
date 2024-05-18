# Curso de TypeScript

Este repositorio contiene ejemplos y ejercicios desarrollados durante un curso de **TypeScript** de **Fernando Herrera**. A continuación, se presentan algunos comandos útiles que se utilizan para compilar, observar archivos `.ts` e inicializar proyectos **TypeScript**.

## Comandos útiles

#### Compilar un archivo TypeScript

Para **compilar** un archivo **TypeScript** específico, utiliza el siguiente comando:

```sh
tsc app.ts
```

#### Modo observador

Para agregar el modo **observador** y que **TypeScript** recompile automáticamente al detectar cambios, usa el siguiente comando:

```sh
tsc app.ts -watch
```

O también puedes usar la opción corta:

```sh
tsc app.ts -w
```

#### Cancelar el modo observador

Para cancelar el modo observador, puedes usar la combinación de teclas:

```sh
ctrl + c
```

#### Inicializar un proyecto de TypeScript

Para inicializar un proyecto de TypeScript y crear un archivo tsconfig.json, utiliza el comando:

```sh
tsc -init
```

#### Observar todos los archivos TypeScript del proyecto

Después de haber creado el tsconfig.json, puedes observar todos los archivos TypeScript en el proyecto con el siguiente comando:

```sh
tsc -p ./ -watch
```

O también puedes usar la opción corta:

```sh
tsc -w
```

## Notas adicionales

Asegúrate de tener **TypeScript** instalado globalmente para ejecutar estos comandos. Puedes instalarlo usando npm:

```sh
npm install -g typescript
```

El archivo **tsconfig.json** contiene la configuración del compilador TypeScript para el proyecto. Revisa y ajusta las opciones según tus necesidades.
