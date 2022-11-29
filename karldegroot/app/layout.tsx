// These styles apply to every route in the application
import '../styles/globals.css';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className='bg-black relative'>
      <div className="absolute inset-0  h-20 z-20 ">
        <NavBar
              navLinks={[
                {
                  key: 'home',
                  title: 'Home',
                  url: '/'
                },
                {
                  key: 'music',
                  title: 'Music',
                  url: '/music'
                },
                {
                  key: 'blog',
                  title: 'Blog',
                  url: '/blog'
                }
              ]}
            />
      </div>
      
        {children}
        
      <Footer />
      </body>
    </html>
  );
}
