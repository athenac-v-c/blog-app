import Navbar from "@/components/navbar"
import "./globals.css"
import Footer from "@/components/footer"
import ThemeContextProvider from "@/context/themeContext"
import ThemeProvider from "@/providers/themeProvider"

export default function RootLayout({ children, }:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
          
              <div className="wrapper">
                <Navbar/>
                  {children}
                <Footer/>
              </div>
          
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
    
      </body>
    </html>
  )
}
