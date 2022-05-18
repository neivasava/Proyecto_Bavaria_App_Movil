# Proyecto_Bavaria_App_Movil
Proyecto tesis aplicacion movil para la empresa cervecera Bavaria

## Descripcion
Teniendo en cuenta los procesos de recepción y despacho que se realiza en la Cervecería de Boyacá, se establece que el punto dónde la aplicación va a actuar, será en la verificación de los productos tanto en los despachos como en la recepción de estos. Siendo así, se desarrolla una App Móvil que se ejecuta sobre un ambiente controlado construido localmente para ejecutar pruebas y así mitigar posibles problemas con el ambiente real de la empresa., donde se lleva a cabo un mejoramiento del proceso de recepción y despacho de los productos lata, que circulan por medio del canal de distribución T1 de la cervecería de Boyacá de la empresa Bavaria S.A.

## Arquitectura
Se tuvo en cuenta para desarrollar la aplicación la arquitectura basada en la pila MEAN. MEAN es la sigla que hace referencia a las arquitecturas desarrolladas con MongoDB, ExpressJS, AngularJS y Node.js. El framework Ionic se integra con los principales frontend como AngularJS por lo que debido a esto se puede decir que la aplicación se basa en MEAN.


## Esquemas de los modelos de Base de datos
Los diferentes esquemas se encuentra en la carpeta node/models

```bash
   {
    Shipment_ID:{
        type: String,
        require: true
    },
    Load_ID:{
        type: String,
        require: true
    },
    Validador:{
        type: String,
        require: true
    },
    etc...
  }
  ```

#### Esquema Users

```bash
     {    
    email: {
        type: String,
        require: true
    },       
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    etc..
  }
  ```

## Rutas

- '/registro': Crea el usuario 
- '/login/:correo/:contrasena': El usuario es logeado y puede entrar a la app
- '/usuarios': Retorna los usuarios existentes
- '/usuarios/:id': Retorna un usuario especifico
- '/editarUsuario/:id': Edita un despacho en especifico
- '/pedido': Retorna los despachos
- '/pedido/:id' Retorna un despacho en especifico


## Installationy uso

Una vez haya clonado el proyecto, ejecutar

```bash
  npm install
```

Luego dirigirse a la carpeta node y ejecutar 

```bash
 cd node
npm run dev

```

Luego dirigirse a la carpeta ionic y ejecutar 

```bash
 cd Ionic
 ionic serve

```


