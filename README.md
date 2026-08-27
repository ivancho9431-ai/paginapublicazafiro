# Zafiro La Prosperidad

Proyecto base para un portal residencial con estructura modular preparada para crecer.

## Estructura sugerida

- `backend/` — API en Node.js con una organización por módulos
- `frontend/` — preparación para una app con React/Next.js

## Backend actual

La carpeta `backend` ya incluye una estructura inicial con módulos para:

- auth
- usuarios
- residentes
- pagos
- pqrs
- comunicaciones
- common

La idea es mantener separación de capas y dejar la base lista para incorporar autenticación, validaciones y luego la base de datos.

## Inicio rápido

```bash
cd backend
npm install
npm run dev
```

La API responde en:

- `GET /health`

## Siguiente paso recomendado

Cuando el proyecto sea más grande, se puede agregar:

- PostgreSQL
- JWT y RBAC
- validación de DTOs
- rate limiting
- logs y auditoría
- variables de entorno
