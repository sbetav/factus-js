# Obtener Municipios

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint **Municipios** permite realizar búsquedas en todos los municipios disponibles en la base de datos. Este recurso es útil para obtener información precisa sobre municipios específicos, incluyendo su nombre, código y departamento correspondiente.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/municipios/obtener-municipios#tab-panel-211)
* [Producción](https://developers.factus.com.co/v1/municipios/obtener-municipios#tab-panel-212)

```
https://api-sandbox.factus.com.co/v1/municipalities
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

#### Parámetros de consulta

[Sección titulada «Parámetros de consulta»](https://developers.factus.com.co/v1/municipios/obtener-municipios#par%C3%A1metros-de-consulta)

`Query Params`

| **Parámetro** | **Tipo** | **Descripción** | **Requerido** |
| --- | --- | --- | --- |
| `name` | `string` | Nombre del municipio a buscar. | Opcional |

#### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/municipios/obtener-municipios#respuesta-del-endpoint)

| **Campo** | **Descripción** |
| --- | --- |
| `id` | Identificador único del municipio. |
| `code` | Código del municipio. |
| `name` | Nombre del municipio. |
| `department` | Nombre del departamento al que pertenece el municipio. |

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/municipios/obtener-municipios#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/municipios/obtener-municipios#tab-panel-213)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": [ { "id": 1, "code": "91263", "name": "El Encanto", "department": "Amazonas" }, { "id": 2, "code": "91405", "name": "La Chorrera", "department": "Amazonas" }, { "id": 3, "code": "91407", "name": "La Pedrera", "department": "Amazonas" }, { "id": 4, "code": "91430", "name": "La Victoria", "department": "Amazonas" }, { "id": 5, "code": "91001", "name": "Leticia", "department": "Amazonas" }, { "id": 6, "code": "91460", "name": "Miriti - Parana", "department": "Amazonas" }, { "id": 7, "code": "91530", "name": "Puerto Alegria", "department": "Amazonas" }, { "id": 8, "code": "91536", "name": "Puerto Arica", "department": "Amazonas" }, { "id": 9, "code": "91540", "name": "Puerto Nariño", "department": "Amazonas" }, { "id": 10, "code": "91669", "name": "Puerto Santander", "department": "Amazonas" }, { "id": 11, "code": "91798", "name": "Tarapaca", "department": "Amazonas" }, { "id": 12, "code": "05002", "name": "Abejorral", "department": "Antioquia" }, { "id": 13, "code": "05004", "name": "Abriaqui", "department": "Antioquia" }, { "id": 14, "code": "05021", "name": "Alejandria", "department": "Antioquia" }, { "id": 15, "code": "05030", "name": "Amaga", "department": "Antioquia" }, { "id": 16, "code": "05031", "name": "Amalfi", "department": "Antioquia" }, { "id": 17, "code": "05034", "name": "Andes", "department": "Antioquia" }, { "id": 18, "code": "05036", "name": "Angelopolis", "department": "Antioquia" }, { "id": 19, "code": "05038", "name": "Angostura", "department": "Antioquia" }, { "id": 20, "code": "05040", "name": "Anori", "department": "Antioquia" }, { "id": 21, "code": "05044", "name": "Anza", "department": "Antioquia" }, { "id": 22, "code": "05045", "name": "Apartado", "department": "Antioquia" }, { "id": 23, "code": "05051", "name": "Arboletes", "department": "Antioquia" }, { "id": 24, "code": "05055", "name": "Argelia", "department": "Antioquia" }, { "id": 25, "code": "05059", "name": "Armenia", "department": "Antioquia" }, { "id": 26, "code": "05079", "name": "Barbosa", "department": "Antioquia" }, { "id": 27, "code": "05088", "name": "Bello", "department": "Antioquia" }, { "id": 28, "code": "05086", "name": "Belmira", "department": "Antioquia" }, { "id": 29, "code": "05091", "name": "Betania", "department": "Antioquia" }, { "id": 30, "code": "05093", "name": "Betulia", "department": "Antioquia" }, { "id": 31, "code": "05107", "name": "Briceño", "department": "Antioquia" }, { "id": 32, "code": "05113", "name": "Buritica", "department": "Antioquia" }, { "id": 33, "code": "05138", "name": "Cañasgordas", "department": "Antioquia" }, { "id": 34, "code": "05120", "name": "Caceres", "department": "Antioquia" }, { "id": 35, "code": "05125", "name": "Caicedo", "department": "Antioquia" }, { "id": 36, "code": "05129", "name": "Caldas", "department": "Antioquia" }, { "id": 37, "code": "05134", "name": "Campamento", "department": "Antioquia" }, { "id": 38, "code": "05142", "name": "Caracoli", "department": "Antioquia" }, { "id": 39, "code": "05145", "name": "Caramanta", "department": "Antioquia" }, { "id": 40, "code": "05147", "name": "Carepa", "department": "Antioquia" }, { "id": 41, "code": "05150", "name": "Carolina", "department": "Antioquia" }, { "id": 42, "code": "05154", "name": "Caucasia", "department": "Antioquia" }, { "id": 43, "code": "05172", "name": "Chigorodo", "department": "Antioquia" }, { "id": 44, "code": "05190", "name": "Cisneros", "department": "Antioquia" }, { "id": 45, "code": "05101", "name": "Ciudad Bolivar", "department": "Antioquia" }, { "id": 46, "code": "05197", "name": "Cocorna", "department": "Antioquia" }, { "id": 47, "code": "05206", "name": "Concepcion", "department": "Antioquia" }, { "id": 48, "code": "05209", "name": "Concordia", "department": "Antioquia" }, { "id": 49, "code": "05212", "name": "Copacabana", "department": "Antioquia" }, { "id": 50, "code": "05234", "name": "Dabeiba", "department": "Antioquia" }, { "id": 51, "code": "05237", "name": "Don Matias", "department": "Antioquia" }, { "id": 52, "code": "05240", "name": "Ebejico", "department": "Antioquia" }, { "id": 53, "code": "05250", "name": "El Bagre", "department": "Antioquia" }, { "id": 54, "code": "05148", "name": "El Carmen De Viboral", "department": "Antioquia" }, { "id": 55, "code": "05697", "name": "El Santuario", "department": "Antioquia" }, { "id": 56, "code": "05264", "name": "Entrerrios", "department": "Antioquia" }, { "id": 57, "code": "05266", "name": "Envigado", "department": "Antioquia" }, { "id": 58, "code": "05282", "name": "Fredonia", "department": "Antioquia" }, { "id": 59, "code": "05284", "name": "Frontino", "department": "Antioquia" }, { "id": 60, "code": "05306", "name": "Giraldo", "department": "Antioquia" }, { "id": 61, "code": "05308", "name": "Girardota", "department": "Antioquia" }, { "id": 62, "code": "05310", "name": "Gomez Plata", "department": "Antioquia" }, { "id": 63, "code": "05313", "name": "Granada", "department": "Antioquia" }, { "id": 64, "code": "05315", "name": "Guadalupe", "department": "Antioquia" }, { "id": 65, "code": "05318", "name": "Guarne", "department": "Antioquia" }, { "id": 66, "code": "05321", "name": "Guatape", "department": "Antioquia" }, { "id": 67, "code": "05347", "name": "Heliconia", "department": "Antioquia" }, { "id": 68, "code": "05353", "name": "Hispania", "department": "Antioquia" }, { "id": 69, "code": "05360", "name": "Itagüi", "department": "Antioquia" }, { "id": 70, "code": "05361", "name": "Ituango", "department": "Antioquia" }, { "id": 71, "code": "05364", "name": "Jardin", "department": "Antioquia" }, { "id": 72, "code": "05368", "name": "Jerico", "department": "Antioquia" }, { "id": 73, "code": "05376", "name": "La Ceja", "department": "Antioquia" }, { "id": 74, "code": "05380", "name": "La Estrella", "department": "Antioquia" }, { "id": 75, "code": "05390", "name": "La Pintada", "department": "Antioquia" }, { "id": 76, "code": "05400", "name": "La Union", "department": "Antioquia" }, { "id": 77, "code": "05411", "name": "Liborina", "department": "Antioquia" }, { "id": 78, "code": "05425", "name": "Maceo", "department": "Antioquia" }, { "id": 79, "code": "05440", "name": "Marinilla", "department": "Antioquia" }, { "id": 80, "code": "05001", "name": "Medellin", "department": "Antioquia" }, { "id": 81, "code": "05467", "name": "Montebello", "department": "Antioquia" }, { "id": 82, "code": "05475", "name": "Murindo", "department": "Antioquia" }, { "id": 83, "code": "05480", "name": "Mutata", "department": "Antioquia" }, { "id": 84, "code": "05483", "name": "Nariño", "department": "Antioquia" }, { "id": 85, "code": "05495", "name": "Nechi", "department": "Antioquia" }, { "id": 86, "code": "05490", "name": "Necocli", "department": "Antioquia" }, { "id": 87, "code": "05501", "name": "Olaya", "department": "Antioquia" }, { "id": 88, "code": "05541", "name": "Peñol", "department": "Antioquia" }, { "id": 89, "code": "05543", "name": "Peque", "department": "Antioquia" }, { "id": 90, "code": "05576", "name": "Pueblorrico", "department": "Antioquia" }, { "id": 91, "code": "05579", "name": "Puerto Berrio", "department": "Antioquia" }, { "id": 92, "code": "05585", "name": "Puerto Nare", "department": "Antioquia" }, { "id": 93, "code": "05591", "name": "Puerto Triunfo", "department": "Antioquia" }, { "id": 94, "code": "05604", "name": "Remedios", "department": "Antioquia" }, { "id": 95, "code": "05607", "name": "Retiro", "department": "Antioquia" }, { "id": 96, "code": "05615", "name": "Rionegro", "department": "Antioquia" }, { "id": 97, "code": "05628", "name": "Sabanalarga", "department": "Antioquia" }, { "id": 98, "code": "05631", "name": "Sabaneta", "department": "Antioquia" }, { "id": 99, "code": "05642", "name": "Salgar", "department": "Antioquia" }, { "id": 100, "code": "05647", "name": "San Andres De Cuerquia", "department": "Antioquia" } ]}
```
