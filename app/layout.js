import './globals.css'
import { SidebarProvider } from '../components/SidebarContext'
import ClientLayout from '../components/ClientLayout'

export const metadata = {
  title: 'Coindeck',
  description: 'A modern crypto dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SidebarProvider>
          <ClientLayout>{children}</ClientLayout>
        </SidebarProvider>
      </body>
    </html>
  )
}
