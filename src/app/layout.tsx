import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de Tarefas',
  description: 'Lista de Tarefas para ter uma melhor organização na sua rotina',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
