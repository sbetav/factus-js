# Referencia de Endpoints

Listado completo de los endpoints disponibles en **Factus API v2**, agrupados por módulo.

### Autenticación

[Sección titulada «Autenticación»](https://developers.factus.com.co/endpoints#autenticaci%C3%B3n)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `oauth/token` | [Autenticación](https://developers.factus.com.co/autenticacion/auth) (obtener token) |
| `POST` | `oauth/token` | [Refresh token](https://developers.factus.com.co/autenticacion/refresh-token) |

### Facturas

[Sección titulada «Facturas»](https://developers.factus.com.co/endpoints#facturas)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `bills/validate` | [Crear y validar](https://developers.factus.com.co/facturas/crear-y-validar) |
| `GET` | `bills` | [Listar y filtrar](https://developers.factus.com.co/facturas/listar-y-filtrar) |
| `GET` | `bills/:number` | [Ver](https://developers.factus.com.co/facturas/ver) |
| `GET` | `bills/:number/download-pdf` | [Descargar PDF](https://developers.factus.com.co/facturas/descargar-pdf) |
| `GET` | `bills/:number/download-xml/` | [Descargar XML](https://developers.factus.com.co/facturas/descargar-xml) |
| `GET` | `bills/:number/download-attached-document-xml` | [Descargar XML AttachedDocument](https://developers.factus.com.co/facturas/descargar-xml-attacheddocument) |
| `DELETE` | `bills/destroy/reference/:reference_code` | [Eliminar no validada](https://developers.factus.com.co/facturas/eliminar) |
| `POST` | `bills/:number/send-email` | [Enviar correo](https://developers.factus.com.co/facturas/enviar-correo) |
| `GET` | `bills/:number/email-content` | [Obtener contenido de correo](https://developers.factus.com.co/facturas/obtener-contenido-de-correo) |
| `POST` | `bills/:number/send-email` | [Representación gráfica](https://developers.factus.com.co/facturas/representacion-grafica) |
| `GET` | `bills/:number/radian/events` | [Eventos de facturas](https://developers.factus.com.co/facturas/eventos-de-facturas) |
| `POST` | `bills/:number/radian/events/:event_type` | [Aceptación tácita](https://developers.factus.com.co/facturas/aceptacion-tacita) |

### Notas crédito

[Sección titulada «Notas crédito»](https://developers.factus.com.co/endpoints#notas-cr%C3%A9dito)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `credit-notes/validate` | [Crear y validar](https://developers.factus.com.co/notas-credito/crear-y-validar) |
| `GET` | `credit-notes?filter[...]` | [Listar y filtrar](https://developers.factus.com.co/notas-credito/ver-filtrar) |
| `GET` | `credit-notes/:number` | [Ver](https://developers.factus.com.co/notas-credito/ver) |
| `GET` | `credit-notes/:number/download-pdf` | [Descargar PDF](https://developers.factus.com.co/notas-credito/descargar-pdf) |
| `GET` | `credit-notes/:number/download-xml` | [Descargar XML](https://developers.factus.com.co/notas-credito/descargar-xml) |
| `GET` | `credit-notes/:number/download-attached-document-xml` | [Descargar XML AttachedDocument](https://developers.factus.com.co/notas-credito/descargar-xml-attacheddocument) |
| `DELETE` | `credit-notes/reference/:reference_code` | [Eliminar no validada](https://developers.factus.com.co/notas-credito/eliminar) |
| `POST` | `credit-notes/:number/send-email` | [Enviar correo](https://developers.factus.com.co/notas-credito/enviar-correo) |
| `GET` | `credit-notes/:number/email-content` | [Obtener contenido de correo](https://developers.factus.com.co/notas-credito/obtener-contenido-de-correo) |

### Notas débito

[Sección titulada «Notas débito»](https://developers.factus.com.co/endpoints#notas-d%C3%A9bito)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `debit-notes/validate` | [Crear y validar](https://developers.factus.com.co/notas-debito/crear-y-validar) |
| `GET` | `debit-notes?filter[...]` | [Listar y filtrar](https://developers.factus.com.co/notas-debito/ver-filtrar) |
| `GET` | `debit-notes/:number` | [Ver](https://developers.factus.com.co/notas-debito/ver) |
| `GET` | `debit-notes/:number/download-pdf` | [Descargar PDF](https://developers.factus.com.co/notas-debito/descargar-pdf) |
| `GET` | `debit-notes/:number/download-xml` | [Descargar XML](https://developers.factus.com.co/notas-debito/descargar-xml) |
| `GET` | `debit-notes/:number/download-attached-document-xml` | [Descargar XML AttachedDocument](https://developers.factus.com.co/notas-debito/descargar-xml-attacheddocument) |
| `DELETE` | `debit-notes/reference/:reference_code` | [Eliminar no validada](https://developers.factus.com.co/notas-debito/eliminar) |
| `POST` | `debit-notes/:number/send-email` | [Enviar correo](https://developers.factus.com.co/notas-debito/enviar-correo) |
| `GET` | `debit-notes/:number/email-content` | [Obtener contenido de correo](https://developers.factus.com.co/notas-debito/obtener-contenido-de-correo) |

### Documentos soporte

[Sección titulada «Documentos soporte»](https://developers.factus.com.co/endpoints#documentos-soporte)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `support-documents/validate` | [Crear y validar](https://developers.factus.com.co/documentos-soporte/crear-validar) |
| `GET` | `support-documents?filter[...]` | [Listar y filtrar](https://developers.factus.com.co/documentos-soporte/ver-y-filtrar) |
| `GET` | `support-documents/:number` | [Ver](https://developers.factus.com.co/documentos-soporte/ver) |
| `GET` | `support-documents/:number/download-pdf` | [Descargar PDF](https://developers.factus.com.co/documentos-soporte/descargar-pdf) |
| `GET` | `support-documents/:number/download-xml` | [Descargar XML](https://developers.factus.com.co/documentos-soporte/descargar-xml) |
| `DELETE` | `support-documents/reference/:reference_code` | [Eliminar no validada](https://developers.factus.com.co/documentos-soporte/eliminar) |

### Notas de ajuste a documentos soporte

[Sección titulada «Notas de ajuste a documentos soporte»](https://developers.factus.com.co/endpoints#notas-de-ajuste-a-documentos-soporte)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `adjustment-notes/validate` | [Crear y validar](https://developers.factus.com.co/notas-ajuste-documentos-soporte/crear-validar) |
| `GET` | `adjustment-notes?filter[...]` | [Listar y filtrar](https://developers.factus.com.co/notas-ajuste-documentos-soporte/ver-y-filtrar) |
| `GET` | `adjustment-notes/:number` | [Ver](https://developers.factus.com.co/notas-ajuste-documentos-soporte/ver) |
| `GET` | `adjustment-notes/:number/download-pdf` | [Descargar PDF](https://developers.factus.com.co/notas-ajuste-documentos-soporte/descargar-pdf) |
| `GET` | `adjustment-notes/:number/download-xml` | [Descargar XML](https://developers.factus.com.co/notas-ajuste-documentos-soporte/descargar-xml) |
| `DELETE` | `adjustment-notes/reference/:reference_code` | [Eliminar no validada](https://developers.factus.com.co/notas-ajuste-documentos-soporte/eliminar) |

### Documentos (genérico)

[Sección titulada «Documentos (genérico)»](https://developers.factus.com.co/endpoints#documentos-gen%C3%A9rico)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `documents/:trackId/download-xml` | [Descargar XML](https://developers.factus.com.co/documentos/descargar-xml) |

### Nómina electrónica

[Sección titulada «Nómina electrónica»](https://developers.factus.com.co/endpoints#n%C3%B3mina-electr%C3%B3nica)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `payrolls` | [Crear y validar](https://developers.factus.com.co/nomina/crear-y-validar) |
| `GET` | `payrolls` | [Listar](https://developers.factus.com.co/nomina/listar) |
| `GET` | `payrolls/:number` | [Ver](https://developers.factus.com.co/nomina/ver) |
| `GET` | `payrolls/:number/download-pdf` | [Descargar PDF](https://developers.factus.com.co/nomina/descargar-pdf) |
| `GET` | `payrolls/:number/download-xml` | [Descargar XML](https://developers.factus.com.co/nomina/descargar-xml) |
| `DELETE` | `payrolls/reference/:reference_code` | [Eliminar no validada](https://developers.factus.com.co/nomina/eliminar) |

### Notas de ajuste a nómina

[Sección titulada «Notas de ajuste a nómina»](https://developers.factus.com.co/endpoints#notas-de-ajuste-a-n%C3%B3mina)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `adjustment-payrolls` | [Crear y validar](https://developers.factus.com.co/nota-ajuste-nomina/crear-y-validar) |
| `GET` | `adjustment-payrolls` | [Listar](https://developers.factus.com.co/nota-ajuste-nomina/listar) |
| `GET` | `adjustment-payrolls/:number` | [Ver](https://developers.factus.com.co/nota-ajuste-nomina/ver) |
| `GET` | `adjustment-payrolls/:number/download-xml` | [Descargar XML](https://developers.factus.com.co/nota-ajuste-nomina/descargar-xml) |
| `DELETE` | `adjustment-payrolls/reference/:reference_code` | [Eliminar no validada](https://developers.factus.com.co/nota-ajuste-nomina/eliminar) |

### Rangos de numeración — Facturación

[Sección titulada «Rangos de numeración — Facturación»](https://developers.factus.com.co/endpoints#rangos-de-numeraci%C3%B3n--facturaci%C3%B3n)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `numbering-ranges` | [Crear](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/crear-rango) |
| `GET` | `numbering-ranges?filter[...]` | [Listar](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/obtener-rangos) |
| `GET` | `numbering-ranges/:numbering_range_id` | [Ver](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/ver-rango) |
| `PATCH` | `numbering-ranges/:numbering_range_id/current` | [Actualizar consecutivo](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/actualizar-consecutivo) |
| `PATCH` | `numbering-ranges/:numbering_range_id/toggle-status` | [Cambiar estado](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/cambiar-estado) |
| `DELETE` | `numbering-ranges/:numbering_range_id` | [Eliminar](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/eliminar-rango) |
| `GET` | `numbering-ranges/dian` | [Rangos asociados al software](https://developers.factus.com.co/rangos-de-numeracion/facturaci%C3%B3n/rangos-asociados-al-software) |

### Rangos de numeración — Nómina

[Sección titulada «Rangos de numeración — Nómina»](https://developers.factus.com.co/endpoints#rangos-de-numeraci%C3%B3n--n%C3%B3mina)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `numbering-ranges/payrolls` | [Crear](https://developers.factus.com.co/rangos-de-numeracion/n%C3%B3mina/crear-rango) |
| `GET` | `numbering-ranges/payrolls?filter[...]` | [Listar](https://developers.factus.com.co/rangos-de-numeracion/n%C3%B3mina/obtener-rangos) |
| `GET` | `numbering-ranges/payrolls/:numbering_range_id` | [Ver](https://developers.factus.com.co/rangos-de-numeracion/n%C3%B3mina/ver-rango) |
| `PATCH` | `numbering-ranges/payrolls/:numbering_range_id/current` | [Actualizar consecutivo](https://developers.factus.com.co/rangos-de-numeracion/n%C3%B3mina/actualizar-consecutivo) |
| `PATCH` | `numbering-ranges/payrolls/:numbering_range_id/toggle-status` | [Cambiar estado](https://developers.factus.com.co/rangos-de-numeracion/n%C3%B3mina/cambiar-estado) |
| `DELETE` | `numbering-ranges/payrolls/:numbering_range_id` | [Eliminar](https://developers.factus.com.co/rangos-de-numeracion/n%C3%B3mina/eliminar-rango) |

### Recepción de documentos (RADIAN)

[Sección titulada «Recepción de documentos (RADIAN)»](https://developers.factus.com.co/endpoints#recepci%C3%B3n-de-documentos-radian)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `receptions/upload` | [Cargar factura](https://developers.factus.com.co/recepcion-de-documentos/cargar-factura) |
| `GET` | `receptions/bills?filter[...]` | [Ver facturas](https://developers.factus.com.co/recepcion-de-documentos/ver-facturas) |
| `PATCH` | `receptions/bills/:bill_id/radian/events/:event_type` | [Emitir evento](https://developers.factus.com.co/recepcion-de-documentos/emitir-evento) |

### Información de adquirientes

[Sección titulada «Información de adquirientes»](https://developers.factus.com.co/endpoints#informaci%C3%B3n-de-adquirientes)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `dian/acquirer?identification_document_code=&identification_number=` | [Obtener datos de adquirientes](https://developers.factus.com.co/informacion-adquirientes/obtener-datos-adquiriente) |

### Suscripciones

[Sección titulada «Suscripciones»](https://developers.factus.com.co/endpoints#suscripciones)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `subscriptions` | [Suscripciones](https://developers.factus.com.co/suscripciones/suscripciones) |

### Empresas

[Sección titulada «Empresas»](https://developers.factus.com.co/endpoints#empresas)

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `companies` | [Ver empresa](https://developers.factus.com.co/empresas/ver) |
| `PUT` | `companies` | [Actualizar empresa](https://developers.factus.com.co/empresas/actualizar) |
| `POST` | `companies/logo` | [Actualizar logo](https://developers.factus.com.co/empresas/actualizar-imagen) |
