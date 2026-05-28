# Filtrar Documentos Soporte

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

Esta sección explica cómo utilizar este endpoint para buscar y filtrar los documentos soporte, la respuesta de cada documento soporte es general si quiere información especifica de un documento soporte debe usar el endpoint: [Ver Documento Soporte](https://developers.factus.com.co/v1/documentos-soporte/ver#_top) .

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/documentos-soporte/ver-y-filtrar#tab-panel-169)
* [Producción](https://developers.factus.com.co/v1/documentos-soporte/ver-y-filtrar#tab-panel-170)

```
https://api-sandbox.factus.com.co/v1/support-documents?filter[identification]&filter[names]&filter[number]&filter[prefix]&filter[reference_code]&filter[status]
```

La respuesta del endpoint arroja el total de los documentos soporte generados, por pagina 10 resultados, pagina actual, ultima pagina, desde, hasta y los links de navegación entre el endpoint de documentos soporte, los anteriores campos con el fin de paginar la respuesta.

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

[Sección titulada «Filtros de Búsqueda»](https://developers.factus.com.co/v1/documentos-soporte/ver-y-filtrar#filtros-de-b%C3%BAsqueda)

* **filter\[identification\]**: Filtrar por número de identificación del proveedor.
* **filter\[names\]**: Filtra por el nombre del proveedor.
* **filter\[number\]**: Filtra por numero de documento soporte.
* **filter\[prefix\]**: Filtra por prefijo de rango de numeración.
* **filter\[reference\_code\]**: Filtra por código de referencia.
* **filter\[status\]**: Filtra por el estado del documento. 1 = validado, 0 si no esta validado.

### Respuesta del Endpoint

[Sección titulada «Respuesta del Endpoint»](https://developers.factus.com.co/v1/documentos-soporte/ver-y-filtrar#respuesta-del-endpoint)

* [Status 200](https://developers.factus.com.co/v1/documentos-soporte/ver-y-filtrar#tab-panel-171)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": { "data": [ { "id": 6, "number": "SEDS984000021", "api_client_name": "[email protected]", "reference_code": "REF0017", "identification": "123456789", "graphic_representation_name": "Alan Turing", "trade_name": null, "names": "Alan Turing", "email": "[email protected]", "total": "90000.00", "status": 1, "errors": [ "Regla: DSAB19b, Notificación: NIT del Prestador de Servicios no está autorizado por la DIAN" ], "created_at": "11-02-2025 10:16:18 PM", "adjustment_notes": [] } ], "pagination": { "total": 1, "per_page": 10, "current_page": 1, "last_page": 1, "from": 1, "to": 1, "links": [ { "url": null, "label": "&laquo; Anterior", "page": null, "active": false }, { "url": "https://api-sandbox.factus.com.co/v1/support-documents?filter%5Bnumber%5D=SEDS984000021&page=1", "label": 1, "page": 1, "active": true }, { "url": null, "label": "Siguiente &raquo;", "page": null, "active": false } ] } }}
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
