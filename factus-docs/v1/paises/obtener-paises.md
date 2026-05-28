# Obtener países

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint **Países** permite realizar búsquedas en todos los países disponibles en la base de datos. Este recurso es útil para obtener información precisa sobre países específicos, incluyendo su nombre y código.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/paises/obtener-paises#tab-panel-272)
* [Producción](https://developers.factus.com.co/v1/paises/obtener-paises#tab-panel-273)

```
https://api-sandbox.factus.com.co/v1/countries
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

[Sección titulada «Parámetros de consulta»](https://developers.factus.com.co/v1/paises/obtener-paises#par%C3%A1metros-de-consulta)

`Query Params`

| **Parámetro** | **Tipo** | **Descripción** | **Requerido** |
| --- | --- | --- | --- |
| `name` | `string` | Nombre del país a buscar. | Opcional |

#### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/paises/obtener-paises#respuesta-del-endpoint)

| **Campo** | **Descripción** |
| --- | --- |
| `id` | Identificador único del país. |
| `code` | Código del país. |
| `name` | Nombre del país. |

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/paises/obtener-paises#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/paises/obtener-paises#tab-panel-274)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": [ { "id": 1, "code": "AF", "name": "Afganistán" }, { "id": 2, "code": "AX", "name": "Åland" }, { "id": 3, "code": "AL", "name": "Albania" }, { "id": 4, "code": "DE", "name": "Alemania" }, { "id": 5, "code": "AD", "name": "Andorra" }, { "id": 6, "code": "AO", "name": "Angola" }, { "id": 7, "code": "AI", "name": "Anguila" }, { "id": 8, "code": "AQ", "name": "Antártida" }, { "id": 9, "code": "AG", "name": "Antigua Y Barbuda" }, { "id": 10, "code": "SA", "name": "Arabia Saudita" }, { "id": 11, "code": "DZ", "name": "Argelia" }, { "id": 12, "code": "AR", "name": "Argentina" }, { "id": 13, "code": "AM", "name": "Armenia" }, { "id": 14, "code": "AW", "name": "Aruba" }, { "id": 15, "code": "AU", "name": "Australia" }, { "id": 16, "code": "AT", "name": "Austria" }, { "id": 17, "code": "AZ", "name": "Azerbaiyán" }, { "id": 18, "code": "BS", "name": "Bahamas" }, { "id": 19, "code": "BD", "name": "Bangladés" }, { "id": 20, "code": "BB", "name": "Barbados" }, { "id": 21, "code": "BH", "name": "Baréin" }, { "id": 22, "code": "BE", "name": "Bélgica" }, { "id": 23, "code": "BZ", "name": "Belice" } ]}
```
