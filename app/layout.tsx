'use client'
import Nav from '@/app/(components)/Nav'
import Contact from '@/app/Pages/Contact'
import About from '@/app/Pages/About'
import './globals.css'
import Projects from './Pages/Projects'
import { useRef, useState, useEffect } from 'react'
import Skills from './Pages/Skills'
import Hero from './Pages/Hero'
import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'



export default function RootLayout({ children }: {children: React.ReactNode}) {

  const section1ref = useRef(null)
  const section2ref = useRef(null)
  const section3ref = useRef(null)
  const [isInSection, setIsInSection] = useState(false);
  const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0})

  const updateMousePosition = (e : any) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        setIsInSection(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (section1ref.current) {
      observer.observe(section1ref.current)
    }

    if (section2ref.current) {
      observer.observe(section2ref.current)
      console.log('2')
    }

    if (section3ref.current) {
      observer.observe(section3ref.current)
      console.log('3')
    }


    return () => {
      observer.disconnect();
    };

  }, []);

  const bgColor = isInSection ? 'bg-offblack' : 'bg-nav';

  const { x, y } = mousePosition

  return (
    <html lang="en">
      <head>
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body>
        <div className='cursordot opacity-0 xs:opacity-100 xl:opacity-0' style={{ left: x, top : y }}>
        </div>
        <div>
          <div className={`${bgColor} transition-all duration-500 ease-in-out`}>
            <Hero />
            <Nav isInSection={isInSection} />
            <div ref={section1ref}>
              <About />
            </div>
            <Skills />
            <div ref={section2ref}>
              <Projects />
            </div>
            <Contact />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
