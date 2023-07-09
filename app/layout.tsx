import './globals.css'
import { Footer,Navbar } from '../components';

export const metadata = {
  title: 'Show Project App',
  description: 'Generated Show Project App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <Navbar />
      <main>
        <body>
          {children}
        </body>
      </main>
      <Footer/>
    </div>
  )
}
