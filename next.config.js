/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración del puerto
  env: {
    PORT: '3006',
  },
  // Configuración para manejar errores de red
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Configuración de imágenes
  images: {
    domains: ['fonts.googleapis.com'],
    unoptimized: true,
  },
  // Configuración de headers para CORS
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig