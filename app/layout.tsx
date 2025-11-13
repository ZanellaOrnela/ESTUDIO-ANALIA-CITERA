import type { Metadata } from 'next'
import { Cinzel, Montserrat } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
  fallback: ['serif'],
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Estudio Citera - Abogados Especialistas en Accidentes de Trabajo',
  description: 'Estudio jurídico especializado en reclamos ante accidentes/enfermedades de trabajo, defensas laborales y siniestros de tránsito. Más de 25 años de experiencia defendiendo los derechos de los trabajadores.',
  keywords: 'abogados, accidentes trabajo, ART, reclamos laborales, siniestros tránsito, derecho laboral, Buenos Aires',
  authors: [{ name: 'Estudio Citera' }],
  icons: {
    icon: [
      { url: '/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    shortcut: '/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg',
    apple: '/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg',
  },
  openGraph: {
    title: 'Estudio Citera - Abogados Especialistas en Accidentes de Trabajo',
    description: 'Más de 25 años defendiendo los derechos de los trabajadores. Asesoramiento profesional.',
    type: 'website',
    locale: 'es_AR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/WhatsApp Image 2025-10-06 at 16.22.05_28e5fbe4.jpg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevenir scroll flash durante la carga
              (function() {
                document.body.style.overflow = 'hidden';
                
                function restoreScroll() {
                  document.body.style.overflow = '';
                }
                
                window.addEventListener('load', function() {
                  setTimeout(restoreScroll, 50);
                });
              })();
            `,
          }}
        />
        <meta name="google-site-verification" content="KCG8ubeHCZHgD87qWAn9BHHzQc1MEaHY3BmPlaGsiYQ" />
      </head>
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}
