# Unidades de medida

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Busca unidades de medida utilizando un parámetro opcional (`name`) para filtrar resultados.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades#tab-panel-302)
* [Producción](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades#tab-panel-303)

```
https://api-sandbox.factus.com.co/v1/measurement-units
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

#### Query Parameters

[Sección titulada «Query Parameters»](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades#query-parameters)

| Key | Descripción |
| --- | --- |
| name | Nombre de la unidad de medida |

* * *

#### Respuesta

[Sección titulada «Respuesta»](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades#respuesta)

La respuesta contiene los siguientes valores:

| Campo | Descripción |
| --- | --- |
| id | ID de la unidad de medida |
| code | Código de la unidad de medida |
| name | Nombre de la unidad de medida |

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades#tab-panel-304)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": [ { "id": 70, "code": "94", "name": "unidad" }, { "id": 414, "code": "KGM", "name": "kilogramo" }, { "id": 449, "code": "LBR", "name": "libra" }, { "id": 512, "code": "MTR", "name": "metro" }, { "id": 874, "code": "GLL", "name": "galón" } ]}
```
