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
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}
