# Rangos asociados al software

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint **Rangos Asociados al Software** permite obtener los rangos de numeración asociados al software.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/rangos-de-numeracion/rangos-asociados-al-software#tab-panel-287)
* [Producción](https://developers.factus.com.co/v1/rangos-de-numeracion/rangos-asociados-al-software#tab-panel-288)

```
https://api-sandbox.factus.com.co/v1/numbering-ranges/dian
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

* * *

### Response

[Sección titulada «Response»](https://developers.factus.com.co/v1/rangos-de-numeracion/rangos-asociados-al-software#response)

La consulta devuelve un array con los rangos de numeración asociados al software.

* * *

## Tabla de Valores del Consecutivo

[Sección titulada «Tabla de Valores del Consecutivo»](https://developers.factus.com.co/v1/rangos-de-numeracion/rangos-asociados-al-software#tabla-de-valores-del-consecutivo)

| Campo | Descripción |
| --- | --- |
| `prefix` | Prefijo. |
| `from` | Número de inicio del consecutivo. |
| `to` | Número del final del consecutivo. |
| `resolution_number` | Número de resolución. |
| `start_date` | Fecha de expedición. |
| `end_date` | Fecha de vencimiento. |
| `technical_key` | Clave técnica. |

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/rangos-de-numeracion/rangos-asociados-al-software#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/rangos-de-numeracion/rangos-asociados-al-software#tab-panel-289)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": [ { "resolution_number": "18760000007", "prefix": "SEDS", "from": "984000000", "to": "985000000", "start_date": "2024-01-01", "end_date": "2024-12-31", "technical_key": "" } ]}
```
