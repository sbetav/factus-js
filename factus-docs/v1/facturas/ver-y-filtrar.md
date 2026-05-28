# Ver y Filtrar Facturas

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Esta sección explica cómo utilizar este endpoint para buscar y filtrar los registros de facturas.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/facturas/ver-y-filtrar#tab-panel-202)
* [Producción](https://developers.factus.com.co/v1/facturas/ver-y-filtrar#tab-panel-203)

```
https://api-sandbox.factus.com.co/v1/bills?filter[identification]&filter[names]&filter[number]&filter[prefix]&filter[reference_code]&filter[status]
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

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/v1/facturas/ver-y-filtrar#filtros-de-b%C3%BAsqueda)

* **filter\[identification\]**: Filtra por el número de identificación del cliente.
* **filter\[names\]**: Filtra por el nombre del cliente.
* **filter\[number\]**: Filtra por el número de factura.
* **filter\[prefix\]**: Filtra por el prefijo de factura.
* **filter\[reference\_code\]**: Filtra por código de referencia.
* **filter\[status\]**: Filtra por el estado del la factura (1=validada, 0= pendiente por validar).

### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/facturas/ver-y-filtrar#respuesta-del-endpoint)

* [status 200](https://developers.factus.com.co/v1/facturas/ver-y-filtrar#tab-panel-204)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "data": [ { "id": 400, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000203", "api_client_name": "Halltec", "reference_code": "I3", "identification": "123456789", "graphic_representation_name": "Alan Turing", "company": "", "trade_name": "", "names": "Alan Turing", "email": "[email protected]", "total": "90000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 1, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "17-07-2024 03:54:10 PM", "credit_notes": [], "debit_notes": [] }, { "id": 397, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000202", "reference_code": null, "identification": "1100970785", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": "[email protected]", "total": "50000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 1, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "17-07-2024 09:57:47 AM", "credit_notes": [ { "id": 105, "number": "NC62" } ], "debit_notes": [ { "id": 43, "number": "ND28" } ] }, { "id": 396, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000201", "reference_code": null, "identification": "1100970785", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": "[email protected]", "total": "27000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 1, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "17-07-2024 09:46:05 AM", "credit_notes": [ { "id": 106, "number": "NC63" } ], "debit_notes": [] }, { "id": 386, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000200", "reference_code": null, "identification": "12345666", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": "[email protected]", "total": "27000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 1, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "16-07-2024 09:44:08 PM", "credit_notes": [], "debit_notes": [] }, { "id": 377, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000199", "reference_code": null, "identification": "06141002791018", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": "", "names": "Pepito Perez", "email": null, "total": "50000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 0, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "08-07-2024 04:24:27 PM", "credit_notes": [], "debit_notes": [] }, { "id": 376, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000198", "reference_code": null, "identification": "900825759", "graphic_representation_name": "Halltec S.a.s", "company": "Halltec S.a.s", "trade_name": null, "names": "", "email": null, "total": "90000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 0, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "08-07-2024 04:15:06 PM", "credit_notes": [], "debit_notes": [] }, { "id": 375, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000197", "reference_code": null, "identification": "900825759", "graphic_representation_name": "Halltec S.a.s", "company": "Halltec S.a.s", "trade_name": null, "names": "", "email": null, "total": "90000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 0, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "08-07-2024 03:43:33 PM", "credit_notes": [], "debit_notes": [] }, { "id": 374, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000196", "reference_code": null, "identification": "9247016", "graphic_representation_name": "Ryley Von", "company": "", "trade_name": "", "names": "Ryley Von", "email": "[email protected]", "total": "90000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 1, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "08-07-2024 03:31:22 PM", "credit_notes": [], "debit_notes": [] }, { "id": 373, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000195", "reference_code": null, "identification": "222222222222", "graphic_representation_name": "Consumidor final", "company": "", "trade_name": null, "names": "Consumidor final", "email": "", "total": "20000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 0, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "01-07-2024 11:17:59 AM", "credit_notes": [], "debit_notes": [] }, { "id": 372, "document": { "code": "01", "name": "Factura electrónica de Venta" }, "number": "SETP990000194", "reference_code": null, "identification": "122345566", "graphic_representation_name": "Pepito Perez", "company": "", "trade_name": null, "names": "Pepito Perez", "email": "[email protected]", "total": "20000.00", "status": 1, "errors": [ "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado.", "Regla: FAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suministrado." ], "send_email": 1, "has_claim": 0, "is_negotiable_instrument": 0, "payment_form": { "code": "1", "name": "Pago de contado" }, "created_at": "27-06-2024 04:48:24 PM", "credit_notes": [], "debit_notes": [] } ], "pagination": { "total": 162, "per_page": 10, "current_page": 1, "last_page": 17, "from": 1, "to": 10, "links": [ { "url": null, "label": "&laquo; Anterior", "active": false }, { "url": "http://api.test/v1/bills?page=1", "label": 1, "active": true, "page": 1 }, { "url": "http://api.test/v1/bills?page=2", "label": 2, "active": false, "page": 2 }, { "url": "http://api.test/v1/bills?page=3", "label": 3, "active": false, "page": 3 }, { "url": "http://api.test/v1/bills?page=4", "label": 4, "active": false, "page": 4 }, { "url": null, "label": "...", "active": false }, { "url": "http://api.test/v1/bills?page=17", "label": 17, "active": false, "page": 17 }, { "url": "http://api.test/v1/bills?page=2", "label": "Siguiente &raquo;", "active": false } ] } }}
```

El endpoint devuelve información paginada de las facturas, incluyendo:

* **total**: Total de las facturas.
* **por página**: 10 resultados por página.
* **página actual**: Página en la que se encuentra.
* **última página**: Última página disponible.
* **desde**: Índice inicial de los resultados.
* **hasta**: Índice final de los resultados.
* **links**: Navegación entre las páginas del endpoint.

Para navegar entre las páginas, utilice el parámetro de consulta `page` y especifique el número de página deseado.
Si el número de página no existe, el objeto `data` estará vacío.

* * *
