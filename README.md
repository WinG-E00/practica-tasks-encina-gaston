Alumno: Gaston Encina

Taller de programacion

Practica CRUD de Tareas y Usuarios con Backend usando Sequelize



Explicacion de como usar variables de archivo env 

Un archivo .env sirve para guardar variables de entorno que se pueden usar para configurar 
la aplicacion para que use estas variables y no se revele su informacion, ya que esta puede contener 
claves importantes para administrar la base de datos u otras cosas importantes

y bueno lo principal es instalar dotenv desde npm y luego crear un archivo .env en la raiz del proyecto y dentro de este archivo
y dentro de este archivo puedes crear variables de la siguiente forma

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=1234

y bueno para poder importar estas variables en cada archivo de tu proyecto debes hacer esto

	import 'dotenv/config';

y de esta manera importaras todas las variables y podras usarlas para configurar las variables de tu db o de otras maneras.
en el proyecto actual se usa dotenv para configurar el nombre de la base, el usuario, contraseña y el host de la base de datos.


# Dependencias
# npm install express mysql2 sequelize dotenv

