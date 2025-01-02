Serverless es un Framework que nos permite crear servicios de manera sencilla y rapida a la nube, como lo puede ser a aws

- Primero se debe instalar serverless globalmente con el siguiente comando

```bash
npm install -g serverless
```

- Luego se puede crear un proyecto con el siguiente comando

```bash
serverless 
```
Esto nos hara una serie de preguntas acerca de lo que queremos hacer, como en este caso una HttpApi con Nodejs20 en aws

De esta manera ya tendremos un proyecto creado, lo siguiente sera crear nuestra respectiva API y configurar nuestro archivo serverless.yml, todas las funciones que creamos seran subidas a la nube por ejemplo de aws como funciones lambda y serverless se encargara de toda la configuracion necesaria para poder crearlas y tenerlas funcionando correctamente.

Es importante resaltar que serverless usa la linea de comandos de AWS, es decir, la AWS CLI, por lo que previamente debimos haberla instalado y configurado con sus respectivas access keys del usuario de IAM que se usara para acceder a AWS.