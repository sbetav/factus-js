# Aceptación Tacita

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Este evento permite emitir el evento de aceptación tacita. Este evento solo es valido para las facturas generadas con la forma de pago a crédito.

**Método:** POST

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#tab-panel-183)
* [Producción](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#tab-panel-184)

```
https://api-sandbox.factus.com.co/v1/bills/radian/events/update/:number/:event_type
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

### Parámetros del Cuerpo (Body)

[Sección titulada «Parámetros del Cuerpo (Body)»](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#par%C3%A1metros-del-cuerpo-body)

El cuerpo (Body) de la solicitud debe enviarse en formato JSON y debe incluir los siguientes parámetros:

| **Parámetro y Tipo** | **Descripción** |
| --- | --- |
| `identification_document_code (int)` | ID de tipo de identificación |
| `identification (string)` | Número de identificación |
| `dv (string)` | (opcional) Solo es requerido cuando la persona se identifica por RUT |
| `first_name (string)` | Nombres de la persona |
| `last_name (string)` | Apellidos de la persona |
| `job_title (string)` | (opcional) Cargo en la empresa |
| `organization_department (string)` | (opcional) Área o departamento de la persona en la empresa |

* * *

### Variables de Ruta (Path Variables)

[Sección titulada «Variables de Ruta (Path Variables)»](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#variables-de-ruta-path-variables)

* `number`: Número de factura.
* `event_type`: código del evento. Para ver el código que pertenece a la aceptación tacita, puede consultar la tabla [eventos](https://developers.factus.com.co/v1/tablas-de-referencia/tablas/#c%C3%B3digos-de-eventos) .

* * *

### Ejemplo de solicitud

[Sección titulada «Ejemplo de solicitud»](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#ejemplo-de-solicitud)

* [example](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#tab-panel-185)

```
{ "identification_document_code": "13", "identification": "12345667", "dv": "", "first_name": "Pepito", "last_name": "Perez", "job_title": "Desarrollador de software", "organization_department": "Sistemas"}
```

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/facturas/aceptacion-tacita#tab-panel-182)
