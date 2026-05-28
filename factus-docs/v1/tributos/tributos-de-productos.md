# Tributos de productos

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint **Tributos de Productos** permite obtener los tributos de productos disponibles en la API de Factus. Este recurso es útil para obtener información precisa sobre los tributos de productos, incluyendo su código, nombre y descripción.

**Método:** GET

#### **Endpoint**

* [Pruebas](https://developers.factus.com.co/v1/tributos/tributos-de-productos#tab-panel-299)
* [Producción](https://developers.factus.com.co/v1/tributos/tributos-de-productos#tab-panel-300)

```
https://api-sandbox.factus.com.co/v1/tributes/products?name=
```

### **Encabezados de la Solicitud**

Para realizar la solicitud es necesario incluir los siguientes encabezados:

| **Encabezado** | **Valor** | **Descripción** |
| --- | --- | --- |
| `Content-Type` | `application/json` | Indica que los datos se envían en formato JSON. |
| `Authorization` | `Bearer <token_de_acceso>` | Token de autenticación necesario para acceder al recurso. Ver [Cómo generar token](https://developers.factus.com.co/autenticacion/auth) |
| `Accept` | `application/json` | Indica que la respuesta debe estar en formato JSON. |

``**Nota:** Reemplaza `token_de_acceso` con el token proporcionado tras autenticarte.``

### Response

[Sección titulada «Response»](https://developers.factus.com.co/v1/tributos/tributos-de-productos#response)

| Campo | Descripción |
| --- | --- |
| `id` | ID del tributo. |
| `code` | Código del tributo. |
| `name` | Nombre del tributo. |
| `description` | Descripción del tributo. |

* * *

### Query Params

[Sección titulada «Query Params»](https://developers.factus.com.co/v1/tributos/tributos-de-productos#query-params)

* `name`: Nombre del tributo

### Ejemplo de respuesta

[Sección titulada «Ejemplo de respuesta»](https://developers.factus.com.co/v1/tributos/tributos-de-productos#ejemplo-de-respuesta)

* [status 200](https://developers.factus.com.co/v1/tributos/tributos-de-productos#tab-panel-301)

```
{ "status": "OK", "message": "Solicitud exitosa", "data": [ { "id": 1, "code": "01", "name": "IVA", "description": "Impuesto sobre la Ventas" }, { "id": 2, "code": "02", "name": "IC", "description": "Impuesto al Consumo Departamental Nominal" }, { "id": 3, "code": "03", "name": "ICA", "description": "Impuesto de Industria, Comercio y Aviso" }, { "id": 4, "code": "04", "name": "INC", "description": "Impuesto Nacional al Consumo" }, { "id": 5, "code": "05", "name": "ReteIVA", "description": "Retención sobre el IVA" }, { "id": 6, "code": "06", "name": "ReteRenta", "description": "Retención sobre renta" }, { "id": 7, "code": "07", "name": "ReteICA", "description": "Retención sobre el ICA" }, { "id": 8, "code": "08", "name": "IC Porcentual", "description": "Impuesto al Consumo Departamental Porcentual" }, { "id": 9, "code": "20", "name": "FtoHorticultura", "description": "Cuota de Fomento Hortifrutícula" }, { "id": 10, "code": "21", "name": "Timbre", "description": "Impuesto de Timbre" }, { "id": 11, "code": "22", "name": "INC Bolsas", "description": "Impuesto Nacional al Consumo de Bolsa Plástica" }, { "id": 12, "code": "23", "name": "INCarbono", "description": "Impuesto Nacional del Carbono" }, { "id": 13, "code": "24", "name": "INCarbono", "description": "Impuesto Nacional del Carbono" }, { "id": 14, "code": "24", "name": "INCombustibles", "description": "Impuesto Nacional a los Combustibles" }, { "id": 15, "code": "25", "name": "Sobretasa Combustibles", "description": "Sobretasa a los combustibles" }, { "id": 16, "code": "26", "name": "Sordicom", "description": "Contribución minoristas (Combustibles)" }, { "id": 17, "code": "30", "name": "IC Datos", "description": "Impuesto al Consumo de Datos" } ]}
```
