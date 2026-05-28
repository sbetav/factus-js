# Introducción

Este contenido es para V1. Cambia a la [versión más reciente](https://developers.factus.com.co/) para ver la documentación actualizada.

El endpoint **Crear Factura** expone diversas funcionalidades necesarias para el correcto envío y creación de facturas. Este documento describe los recursos disponibles, las configuraciones requeridas y los parámetros que debe considerar.

#### Recursos disponibles

[Sección titulada «Recursos disponibles»](https://developers.factus.com.co/v1/facturas/introduccion#recursos-disponibles)

Los siguientes endpoints están disponibles para obtener información de uso frecuente. Recomendamos hacerla persistente en su sistema, ya que rara vez se modifica, o usar los endpoints directamente (teniendo en cuenta los tiempos de respuesta):

* **[Rangos de numeración](https://developers.factus.com.co/v1/rangos-de-numeracion/obtener-rangos/)**
* **[Municipios](https://developers.factus.com.co/v1/municipios/obtener-municipios/)**
* **[Tributos](https://developers.factus.com.co/v1/tributos/tributos-de-productos/)**
* **[Unidades de medida](https://developers.factus.com.co/v1/unidades-de-medida/obtener-unidades/)**

#### Datos requeridos para crear una factura

[Sección titulada «Datos requeridos para crear una factura»](https://developers.factus.com.co/v1/facturas/introduccion#datos-requeridos-para-crear-una-factura)

Para comprender los datos requeridos, revise el cuerpo (`body`) que se debe enviar en la solicitud al endpoint

[

**Crear Factura**

](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada/#ejemplo-de-solicitud)

Si tiene dudas con algún campo revise la descripción de los campos en la sección de

[

**Campos**

](https://developers.factus.com.co/v1/facturas/crear-y-validar-factura/factura-avanzada/#par%C3%A1metros-del-cuerpo-body)

* * *

#### Endpoint - Crear y Validar Factura

[Sección titulada «Endpoint - Crear y Validar Factura»](https://developers.factus.com.co/v1/facturas/introduccion#endpoint---crear-y-validar-factura)

| **Método** | **URL** |
| --- | --- |
| `POST` | `/crear-validar-factura` |

#### Configuración de la solicitud

[Sección titulada «Configuración de la solicitud»](https://developers.factus.com.co/v1/facturas/introduccion#configuraci%C3%B3n-de-la-solicitud)

###### Encabezados (Headers)

[Sección titulada «Encabezados (Headers)»](https://developers.factus.com.co/v1/facturas/introduccion#encabezados-headers)

| **Parámetro** | **Tipo** | **Descripción** | **Requerido** |
| --- | --- | --- | --- |
| `access_token` | `string` | Token de acceso generado previamente | ✅ |
| `Content-Type` | `string` | Tipo de contenido: `application/json` | ✅ |
| `Accept` | `string` | Tipo de respuesta: `application/json` | ✅ |

###### Cuerpo (Body)

[Sección titulada «Cuerpo (Body)»](https://developers.factus.com.co/v1/facturas/introduccion#cuerpo-body)

| **Parámetro** | **Tipo** | **Descripción** | **Requerido** |
| --- | --- | --- | --- |
| `body` | `object` | Información de la factura a crear y validar | ✅ |
