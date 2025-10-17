import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
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
  openGraph: {
    title: 'Estudio Citera - Abogados Especialistas en Accidentes de Trabajo',
    description: 'Más de 25 años defendiendo los derechos de los trabajadores. Consulta gratuita.',
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
    <html lang="es" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}
