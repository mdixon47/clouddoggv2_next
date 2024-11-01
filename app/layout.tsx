import Link from 'next/link'
import { Cloud } from 'lucide-react'
import Chatbot from '../components/Chatbot'
import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>CloudDogg - Your Cloud Solutions Partner</title>
        <meta name="description" content="CloudDogg provides top-notch cloud solutions for businesses of all sizes. Contact us to learn more about our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any additional head elements here */}
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Cloud size={32} />
                <span className="text-2xl font-bold">CloudDogg</span>
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  <li><Link href="/services" className="hover:underline">Services</Link></li>
                  <li><Link href="/about" className="hover:underline">About Us</Link></li>
                  <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
                  <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </header>
           
          
              {children}
         
        
          
          <Chatbot />
          
          <footer className="bg-muted text-muted-foreground mt-8">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <p>&copy; 2024 CloudDogg. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}