import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const myDescription =  `A Escola Técnica Império é uma instituição de ensino profissionalizante que oferece cursos de formação em operação de máquinas pesadas. Nossos cursos são ministrados por instrutores altamente qualificados e experientes, que fornecem treinamento teórico e prático alinhado às normas reguladoras e legislação vigente. Oferecemos a formação de turmas para capacitação profissional e também pacotes de treinamentos para empresas. Com a Escola Técnica Império, você pode ter certeza de que está recebendo a melhor educação possível para sua carreira em operação de máquinas pesadas.
Para mais informações sobre nossos cursos, visite nosso site ou entre em contato conosco diretamente.`

export const metadata: Metadata = {
  title: 'Império Treinamento',
  description: myDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
