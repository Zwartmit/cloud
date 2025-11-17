# Cloud Capital Frontend

Aplicación React + TypeScript basada exactamente en el diseño de la plantilla HTML original.

## 🚀 Estado Actual del Proyecto

### ✅ Completado
- **Configuración inicial**: Vite + React + TypeScript
- **Estilos**: Tailwind CSS con variables CSS exactas de la plantilla
- **Tipos TypeScript**: Interfaces completas basadas en la plantilla
- **Datos simulados**: Usuarios, transacciones, clases de inversión (exactos)
- **Store Zustand**: Estado global con autenticación
- **Fondo animado**: Canvas con degradado dinámico idéntico
- **App principal**: Estructura de navegación por vistas

### 🔄 Siguiente paso
- **Instalar dependencias** y crear componentes de páginas

## 📦 Instalación

```bash
# 1. Navegar a la carpeta del proyecto
cd cloud-capital-frontend

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev
```

## 🎨 Características del diseño migradas

- **Colores exactos**: Variables CSS idénticas a la plantilla original
- **Fondo animado**: Canvas con degradado dinámico igual al HTML
- **Tema oscuro**: Esquema de colores nocturno completo
- **Componentes CSS**: Cards, sidebar, modales, badges, etc.

## 📋 Estructura del proyecto

```
src/
├── components/
│   └── layout/
│       └── AnimatedBackground.tsx    # Canvas de fondo animado
├── data/
│   └── mockData.ts                   # Datos simulados exactos de la plantilla
├── stores/
│   └── authStore.ts                  # Estado global con Zustand
├── types/
│   └── index.ts                      # Tipos TypeScript completos
├── App.tsx                           # Componente principal
├── main.tsx                          # Entry point
└── index.css                         # Estilos base + Tailwind
```

## 🔑 Funcionalidades migradas

### Autenticación (exacta de la plantilla)
- **Super Admin**: `admin@cloudcapital.com` / `admin123`
- **Sub Admin**: `subadmin@cc.com` / `subadmin123`  
- **Usuario**: `andres@gmail.com` / `Andres`

### Datos simulados
- **Usuarios**: Exactos con balances y clases de inversión
- **Transacciones**: Depósitos, retiros, liquidaciones
- **Clases de inversión**: Planes de nube y minería crypto
- **Tareas admin**: Sistema de doble aprobación

### Estado global
- **Autenticación** persistente
- **Navegación** por vistas igual a la plantilla
- **Roles de usuario** (user, sub_admin, super_admin)

## 🎯 Próximos pasos

1. **Componentes UI básicos**: Button, Card, Modal, etc.
2. **Landing Page**: Hero, features, planes, FAQ
3. **Dashboard**: Balance, métricas, feed de actividad
4. **Panel Admin**: Gestión de usuarios y tareas
5. **Formularios**: Depósitos, retiros, reinversión

## 💡 Notas técnicas

- **Errores actuales**: Normal hasta instalar dependencias
- **Tailwind CSS**: Configurado con colores personalizados
- **TypeScript**: Strict mode activado
- **Zustand**: Para estado global ligero
- **React Query**: Para manejo de datos del servidor (futuro)

## 🔧 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción  
- `npm run lint` - Linter TypeScript/ESLint
- `npm run preview` - Preview del build

---

**Nota**: Este proyecto es una migración exacta de la plantilla HTML a React manteniendo toda la funcionalidad y diseño visual.
