# PruebaEnerclic

API de Registro, Inicio de Sesión y Obtencion de datos mediante JWT.

Esta API permite a los desarrolladores implementar funcionalidades de registro de usuarios, inicio de sesión y obtención de datos de la base de datos solo si hay token de autenticación.

Características

Agregar usuario: los usuarios pueden registrarse en la aplicación proporcionando su nombre, correo electrónico y contraseña.

Iniciar sesión: los usuarios registrados pueden iniciar sesión en la aplicación con su correo electrónico y contraseña, donde se generara un token usando los datos del mismo.

Traer datos: una vez iniciada la sesión y verificado el token, se pueden obtener los datos.

# Endpoints

* Crear usuario:

![Captura de pantalla 2023-05-11 121550](https://github.com/mandrileagustin/PruebaEnerclic/assets/115570236/c484b6a3-3916-4078-8c47-efbc55d342fd)

* Login:

![Captura de pantalla 2023-05-11 121439](https://github.com/mandrileagustin/PruebaEnerclic/assets/115570236/fdab5316-1c39-428b-9388-33fd62e1af35)

* Obtencion de datos con el token de autenticación:

![Captura de pantalla 2023-05-11 121800](https://github.com/mandrileagustin/PruebaEnerclic/assets/115570236/3268cac0-c38a-4bd0-95f5-f784ed683463)

Si el usuario tiene token los mostrara los datos ordenados de forma jerarquica

#

El archivo .env configuramos nuestra clave secreta

![image](https://github.com/mandrileagustin/PruebaEnerclic/assets/115570236/dafd90b8-ec29-4035-929a-bbc6a378a522)

# 

En el archivo de Docker debemos poner la siguiente configuracion y en la terminal para ejecutar el contenedor deberiamos poner docker run.

![image](https://github.com/mandrileagustin/PruebaEnerclic/assets/115570236/39f2bbb7-5322-4f1a-921b-d2eeeb5ef4e5)

#

En swagger deberiamos de poner esta ruta en nuestro navegador para visualizar los documentos 

![image](https://github.com/mandrileagustin/PruebaEnerclic/assets/115570236/e03e7fa2-bb29-4bfb-ab34-273b2a8997bd)


# Tecnologías Utilizadas:

* Node.js

* Express

* Sqlite

* JavaScript

*Postman
