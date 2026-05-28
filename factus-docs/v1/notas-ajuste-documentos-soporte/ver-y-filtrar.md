# Filtrar notas de ajuste

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Esta sección explica cómo utilizar este endpoint para buscar y filtrar las _**notas de ajuste a documentos soporte**_, la respuesta de cada nota de ajuste es general si quiere información especifica de una nota de ajuste a documento soporte debe usar el endpoint: [Ver nota de ajuste a documento soporte](https://developers.factus.com.co/notas-ajuste-documentos-soporte/ver#_top) .

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver-y-filtrar#tab-panel-229)
* [Producción](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver-y-filtrar#tab-panel-230)

```
https://api-sandbox.factus.com.co/v1/adjustment-notes?filter[identification]&filter[names]&filter[number]&filter[prefix]&filter[reference_code]&filter[status]
```

La respuesta del endpoint arroja el total de las _**notas de ajuste a documentos soporte**_ generados, por pagina 10 resultados, pagina actual, ultima pagina, desde, hasta y los links de navegación entre el endpoint de notas de ajuste a documentos soporte, los anteriores campos con el fin de paginar la respuesta.

Para navegar entre las páginas, utilice el parámetro de consulta `page` y especifique el número de página deseado.

Si el número de página no existe, el objeto `data` estará vacío.

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

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver-y-filtrar#filtros-de-b%C3%BAsqueda)

* **filter\[identification\]**: Filtrar por número de identificación.
* **filter\[names\]**: Filtra por el nombre del proveedor.
* **filter\[number\]**: Filtra por numero de nota de ajuste.
* **filter\[prefix\]**: Filtra por prefijo de rango de numeración.
* **filter\[reference\_code\]**: Filtra por código de referencia.
* **filter\[status\]**: Filtra por el estado del documento. 1 = validado, 0 si no esta validado.

### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver-y-filtrar#respuesta-del-endpoint)

* [Status 200](https://developers.factus.com.co/v1/notas-ajuste-documentos-soporte/ver-y-filtrar#tab-panel-231)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "data": [ { "api_client_name": "test-oscar", "number": "NA1", "reference_code": "2fca4b6c-638c-4bd9-bbb2-7981f99a05ba", "provider": { "identification_document": { "code": "31", "name": "NIT" }, "identification": "2343543", "dv": "7", "trade_name": null, "names": "Pepito Perez", "address": "calle 4", "email": null, "phone": null, "legal_organization": { "code": "2", "name": "Persona Natural" }, "municipality": { "code": "68679", "name": "San Gil", "department": { "code": "68", "name": "Santander" } } }, "total": "100000.00", "errors": [ "Regla: NSAX04, Notificación: No se encuentra el grupo TaxSubtotal", "Regla: NSAJ44b, Notificación: Nit o Documento de Identificación informado No corresponde al registrado en el RUT con respecto a la razón social o nombre comercial suministrado.", "Regla: NSAJ43b, Notificación: Nombre informado No corresponde al registrado en el RUT con respecto al Nit suminstrado." ], "send_email": false, "is_validated": true, "validated_at": "06-05-2026 11:44:12 AM", "created_at": "06-05-2026 11:44:11 AM" } ], "pagination": { "total": 1, "per_page": 10, "current_page": 1, "last_page": 1, "from": 1, "to": 1, "links": [ { "url": null, "label": "&laquo; Anterior", "active": false }, { "url": "https://api-sandbox.factus.com.co/v2/adjustment-notes?page=1", "label": 1, "active": true, "page": 1 }, { "url": null, "label": "Siguiente &raquo;", "active": false, "page": 2 } ] } }}
```

El endpoint devuelve información paginada de los documentos soporte, incluyendo:

* **Total**: Total de los documentos soporte.
* **Por página**: 10 resultados por página.
* **Página actual**: Página en la que se encuentra.
* **Última página**: Última página disponible.
* **Desde**: Índice inicial de los resultados.
* **Hasta**: Índice final de los resultados.
* **Links**: Navegación entre las páginas del endpoint.

Para navegar entre las páginas, utilice el parámetro de consulta `page` y especifique el número de página deseado.
Si el número de página no existe, el objeto `data` estará vacío.

* * *
