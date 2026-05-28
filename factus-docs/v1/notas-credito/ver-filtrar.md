# Ver y Filtrar Notas Crédito

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Esta sección explica cómo utilizar este endpoint para buscar y filtrar los registros de notas crédito.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-credito/ver-filtrar#tab-panel-265)
* [Producción](https://developers.factus.com.co/v1/notas-credito/ver-filtrar#tab-panel-266)

```
https://api-sandbox.factus.com.co/v1/credit-notes?filter[identification]&filter[names]&filter[number]&filter[prefix]&filter[reference_code]&filter[status]
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

### Filtros de Búsqueda

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/v1/notas-credito/ver-filtrar#filtros-de-b%C3%BAsqueda)

* **filter\[identification\]**: Filtra por el número de identificación del cliente.
* **filter\[names\]**: Filtra por el nombre del cliente.
* **filter\[number\]**: Filtra por el número de nota crédito.
* **filter\[prefix\]**: Filtra por el prefijo de nota crédito.
* **filter\[reference\_code\]**: Filtra por código de referencia.
* **filter\[status\]**: Filtra por el estado del la nota crédito (1=validada, 0= pendiente por validar).

### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/notas-credito/ver-filtrar#respuesta-del-endpoint)

* [status 200](https://developers.factus.com.co/v1/notas-credito/ver-filtrar#tab-panel-267)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "data": [ { "id": 140, "api_client_name": "Factus", "reference_code": "REF010", "number": "NC81", "identification": "12345678", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": null, "total": "50000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada", "Regla: CAK55, Notificación: Correo electrónico no informado" ], "send_email": 0, "created_at": "30-09-2024 10:13:00 AM" }, { "id": 139, "api_client_name": "Factus", "reference_code": "REF009", "number": "NC80", "identification": "12345678", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": null, "total": "80000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada", "Regla: CAK55, Notificación: Correo electrónico no informado" ], "send_email": 0, "created_at": "30-09-2024 10:11:40 AM" }, { "id": 138, "api_client_name": "Factus", "reference_code": "REF008", "number": "NC79", "identification": "12345678", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": null, "total": "80000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada", "Regla: CAK55, Notificación: Correo electrónico no informado" ], "send_email": 0, "created_at": "27-09-2024 03:32:47 PM" }, { "id": 137, "api_client_name": "Factus", "reference_code": "REF007", "number": "NC78", "identification": "12345678", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": null, "total": "80000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada", "Regla: CAK55, Notificación: Correo electrónico no informado" ], "send_email": 0, "created_at": "23-09-2024 08:50:26 AM" }, { "id": 135, "api_client_name": "Factus", "reference_code": "REF006", "number": "NC77", "identification": "12345678", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": null, "total": "80000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada", "Regla: CAK55, Notificación: Correo electrónico no informado" ], "send_email": 0, "created_at": "20-09-2024 04:56:24 PM" }, { "id": 132, "api_client_name": "Factus", "reference_code": "REF005", "number": "NC76", "identification": "222222222222", "graphic_representation_name": "Consumidor final", "company": "", "trade_name": null, "names": "Consumidor final", "email": "", "total": "80000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada", "Regla: CAK55, Notificación: Correo electrónico no informado" ], "send_email": 0, "created_at": "20-09-2024 09:13:42 AM" }, { "id": 131, "api_client_name": "Factus", "reference_code": "REF004", "number": "NC75", "identification": "222222222222", "graphic_representation_name": "Consumidor final", "company": "", "trade_name": null, "names": "Consumidor final", "email": null, "total": "90000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada" ], "send_email": 1, "created_at": "20-09-2024 08:56:01 AM" }, { "id": 125, "api_client_name": "Factus", "reference_code": "REF003", "number": "NC74", "identification": "222222222222", "graphic_representation_name": "Consumidor final", "company": "", "trade_name": null, "names": "Consumidor final", "email": null, "total": "80000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada" ], "send_email": 1, "created_at": "19-09-2024 09:02:11 AM" }, { "id": 123, "api_client_name": "Factus", "reference_code": "REF002", "number": "NC73", "identification": "222222222222", "graphic_representation_name": "Consumidor final", "company": "", "trade_name": null, "names": "Consumidor final", "email": null, "total": "90000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada" ], "send_email": 1, "created_at": "18-09-2024 05:07:55 PM" }, { "id": 122, "api_client_name": "Factus", "reference_code": "REF001", "number": "NC72", "identification": "123456789", "graphic_representation_name": "Alan Turing", "company": "", "trade_name": "", "names": "Alan Turing", "email": "[email protected]", "total": "90000.00", "status": 1, "errors": [ "Regla: CBF02, Notificación: No se informo el numero de la factura referenciada" ], "send_email": 1, "created_at": "18-09-2024 04:14:45 PM" } ], "pagination": { "total": 81, "per_page": 10, "current_page": 1, "last_page": 9, "from": 1, "to": 10, "links": [ { "url": null, "label": "&laquo; Anterior", "page": null, "active": false }, { "url": "http://api.test/v1/credit-notes?page=1", "label": 1, "page": 1, "active": true }, { "url": "http://api.test/v1/credit-notes?page=2", "label": 2, "page": 2, "active": false }, { "url": "http://api.test/v1/credit-notes?page=3", "label": 3, "page": 3, "active": false }, { "url": "http://api.test/v1/credit-notes?page=4", "label": 4, "page": 4, "active": false }, { "url": "http://api.test/v1/credit-notes?page=5", "label": 5, "page": 5, "active": false }, { "url": "http://api.test/v1/credit-notes?page=6", "label": 6, "page": 6, "active": false }, { "url": "http://api.test/v1/credit-notes?page=7", "label": 7, "page": 7, "active": false }, { "url": "http://api.test/v1/credit-notes?page=8", "label": 8, "page": 8, "active": false }, { "url": "http://api.test/v1/credit-notes?page=9", "label": 9, "page": 9, "active": false }, { "url": "http://api.test/v1/credit-notes?page=2", "label": "Siguiente &raquo;", "page": 2, "active": false } ] } }}
```

El endpoint devuelve información paginada de las notas crédito, incluyendo:

* **total**: Total de las notas crédito.
* **por página**: 10 resultados por página.
* **página actual**: Página en la que se encuentra.
* **última página**: Última página disponible.
* **desde**: Índice inicial de los resultados.
* **hasta**: Índice final de los resultados.
* **links**: Navegación entre las páginas del endpoint.

Para navegar entre las páginas, utilice el parámetro de consulta `page` y especifique el número de página deseado.
