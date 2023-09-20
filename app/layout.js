
'use client'





export default function RootLayout({ children }) {
  return (
    <html lang="en" className="purple-dark text-foreground bg-background">

      <body suppressHydrationWarning>
 
          {children}
     
      </body>

    </html>
  )
}
