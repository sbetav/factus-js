# Eventos de Facturas

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este endpoint permite consultar los eventos generados a una factura por su número de factura.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/eventos-de-facturas#tab-panel-195)
* [Producción](https://developers.factus.com.co/v1/facturas/eventos-de-facturas#tab-panel-196)

```
https://api-sandbox.factus.com.co/v1/bills/:number/radian/events
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

### Descripción de la respuesta

[Sección titulada «Descripción de la respuesta»](https://developers.factus.com.co/v1/facturas/eventos-de-facturas#descripci%C3%B3n-de-la-respuesta)

La respuesta devuelve un array de objetos que contiene la información de cada evento.

| **ID** | **Descripción** |
| --- | --- |
| `number` | Número del evento. |
| `cude` | CUDE del evento. |
| `event_code` | Código del evento. |
| `event_name` | Nombre del evento. |
| `effective_date` | Fecha de emisión del evento. |
| `effective_time` | Hora de emisión del evento. |

* * *

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/facturas/eventos-de-facturas#variables-de-ruta-path-variables)

* `number`

* * *

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/facturas/eventos-de-facturas#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/facturas/eventos-de-facturas#tab-panel-197)
* [status 400](https://developers.factus.com.co/v1/facturas/eventos-de-facturas#tab-panel-198)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": [ { "number": "AP68", "cude": "b02f0eae4978c1a01cc0e7bddf6d9e8384f0b339ad6dcc1c7e42b6dfebfe6c26ee98512991c8ead8cd665c353e05684c", "event_code": "030", "event_name": "Acuse de recibo de Factura Electrónica de Venta", "effective_date": "2024-11-05", "effective_time": "16:36:31" }, { "number": "AP69", "cude": "09a0d55bc4752970b1d0afa4642ba3ab39fadbd5a2c90162711d47d4b7b50097fcca6e19330e568c1a307e4ab10fafbb", "event_code": "032", "event_name": "Recibo del bien y/o prestación del servicio", "effective_date": "2024-11-05", "effective_time": "16:36:48" }, { "number": "AP70", "cude": "ca09d728edc8a37c19edbc99fe8c30b9090499ab01e5a964477691247ebe768da89ca8a68770ba51575744e304748dcb", "event_code": "033", "event_name": "Aceptación expresa", "effective_date": "2024-11-05", "effective_time": "16:37:09" } ]}
```
