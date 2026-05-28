# Introducción a la autenticación

Nuestra API Factus usa el sistema de autenticación OAuth2, el cual utiliza las credenciales de acceso al sistema suministradas por Factus para generar un token de acceso, el cual debe usarse para realizar cualquier petición a los endpoints, tener en cuenta que se dará acceso con un limite tiempo valido por cada token y tendrá que hacer uso del token de refresco para generar uno nuevo. Puede ver mas información en el siguiente link [OAuth2](https://oauth.net/2/)
