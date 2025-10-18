# Estudio Citera - Sitio Web

Sitio web profesional para el Estudio Jurídico Citera, especializado en reclamos ante accidentes/enfermedades de trabajo, defensas laborales y siniestros de tránsito.

## 🚀 Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📋 Características

- ✅ Diseño responsivo (desktop, tablet, mobile)
- ✅ Navegación suave entre secciones
- ✅ Animaciones sutiles al hacer scroll
- ✅ Botón flotante de WhatsApp
- ✅ Formulario de contacto con FormSubmit
- ✅ SEO optimizado
- ✅ Carga rápida y optimizada

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 📝 Configuración

### Formulario de Contacto
Para configurar el formulario de contacto, edita el archivo `components/Contact.tsx` y reemplaza `SU_EMAIL_AQUI` en la línea del action del formulario con tu email real.

### WhatsApp
Para configurar el botón de WhatsApp, edita el archivo `components/WhatsAppButton.tsx` y reemplaza el número de teléfono en la variable `phoneNumber`.

### Información de Contacto
Actualiza la información de contacto en los siguientes archivos:
- `components/Contact.tsx`
- `components/Footer.tsx`

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
- Primary: Azul (#0ea5e9)
- Secondary: Gris (#64748b)
- Accent: Amarillo (#eab308)

### Fuentes
Las fuentes se configuran en `app/layout.tsx`:
- Inter (principal)
- Poppins (títulos)

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

Para desplegar en producción:

```bash
npm run build
npm start
```

Recomendamos usar Vercel, Netlify o cualquier plataforma compatible con Next.js.

## 📄 Licencia

© 2024 Estudio Citera. Todos los derechos reservados.


