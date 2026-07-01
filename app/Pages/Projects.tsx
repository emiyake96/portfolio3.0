import localFont from 'next/font/local'
import AnimatedText from '../(components)/AnimatedText'
import { useState, useEffect } from 'react'
import { motion, useAnimate, useTransform, useScroll  } from 'framer-motion'
import Arrow from '@mui/icons-material/ArrowOutward';
import { MouseEventHandler, useRef } from "react";



const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const generalVar = localFont({
    src: '../styles/fonts/GeneralSans-Variable.woff2'
})

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const Card = ({card } : { card: CardType}) => {
    return (
    <a href={card.link} target='_blank'>
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden"
        >
            <div
                style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 group-hover:rounded"
            />
            <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-l">
                        {card.title}
                    </p>
            </div>
        </div>
    </a>
    );
  };

const Projects = ()  => {
    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0})
    const [ scope, animate ] = useAnimate()
    const [ arrowScope, animateArrow ] = useAnimate()

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const scrollx = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"])


    const updateMousePosition = (e : any) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition)
      return () => {
        window.removeEventListener('mousemove', updateMousePosition)
      }
    })

    const { x, y } = mousePosition

    const handleHover = () => {
        animate(scope.current, { width: 112, height: 112 })
        animateArrow(arrowScope.current, { opacity : 1 })
    }

    const handleExit = () => {
        animate(scope.current, { width: 12, height: 12 })
        animateArrow(arrowScope.current, { opacity: 0 })
    }



    return (
        <section
            id='projects'
            className='my-[10%] min-h-screen w-full px-10 md:px-5 xl:px-20 2xl:px-28 oveflow-hidden'
        >
            <motion.div ref={scope} className='cursordotlinks group relative' style={{ left: x, top : y}} >
                <motion.div ref={arrowScope} style={{ opacity: 0}}>
                    <Arrow className='relative translate-y-10 translate-x-11' />
                </motion.div>
            </motion.div>
            <div className='section-heading select-none'>
                <div className='heading flex items-center justify-center space-x-[3%]'>
                    <AnimatedText className={generalVar.className + ' w-fit text-5xl xs:text-heading-2 font-medium xl:text-9xl uppercase text-darkgrey'} text={'Projects'} transitiondelay={.5} />
                </div>

            </div>
            <div>
                <div className="flex flex-col h-48 items-center justify-center">
                    <span className="font-semibold uppercase text-abouttxt">
                    Scroll down
                    </span>
                    {/* <div>
                        <motion.svg width="16" height="79" viewBox="0 0 16 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                variants={pathVariants}
                                d="M7.29289 78.7071C7.68342 79.0976 8.31658 79.0976 8.70711 78.7071L15.0711 72.3431C15.4616 71.9526 15.4616 71.3195 15.0711 70.9289C14.6805 70.5384 14.0474 70.5384 13.6569 70.9289L8 76.5858L2.34315 70.9289C1.95262 70.5384 1.31946 70.5384 0.928932 70.9289C0.538408 71.3195 0.538408 71.9526 0.928932 72.3431L7.29289 78.7071ZM7 0L7 78H9L9 0L7 0Z" fill="white"/>
                        </motion.svg>
                    </div> */}

                </div>
                <section ref={targetRef} className="relative h-[300vh]">
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x: scrollx }} className="flex gap-4">
                        {cards.map((card) => {
                        return <div key={card.id } onMouseEnter={handleHover} onMouseLeave={handleExit}><Card card={card} /></div>;
                        })}
                    </motion.div>
                    </div>
                </section>
                <div className="flex h-32 items-center justify-center">
                    <span className="font-semibold uppercase text-abouttxt">
                    Scroll down
                    </span>
                </div>
            </div>
            {/* <div className='mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12'>
                <div className='col-span-1 md:col-span-12'>

                </div>
                <div className='col-span-1 pt-0 md:col-span-7 md:pt-16'>
                    <a href='https://ticketme-arekbm.vercel.app/' target='_blank'>
                        <img className='w-screen duration-700 ease-in-out hover:scale-105 hover:rounded-3xl' src='./ticket-me.png' alt='left picture' width='800' height='600' onMouseEnter={handleHover} onMouseLeave={handleExit} ></img>
                    </a>
                    <div className='mt-4'>
                        <div className='flex space-x-2 mb-3'>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>2023</p>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>Next.js • MongoDB • TailwindCSS • Typescript</p>
                        </div>
                        <div className='2xl:space-y-3'>
                            <h3 className={generalVar.className + ' text-work-title 2xl:text-5xl font-medium uppercase text-offwhitetxt'}>ticket me app</h3>
                            <p className={Cabinet.className + ' text-body-2 2xl:text-4xl text-stone'}>Full stack application utilizing MongoDB and RESTFUL API architecture</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 pt-0 md:col-span-5 md:pt-80'>
                    <a href='https://main.d2nibnnfhe4wtq.amplifyapp.com/' target='_blank'>
                        <img className='w-screen duration-700 ease-in-out hover:scale-105 hover:rounded-3xl' src='./dalle.png' alt='right picture' width='800' height='600' onMouseEnter={handleHover} onMouseLeave={handleExit} ></img>
                    </a>
                    <div className='mt-4'>
                        <div className='flex space-x-2 mb-3'>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>2023</p>
                            <p className='rounded-full bg-transparent border border-darkgrey flex justify-center items-center px-4 py-1 text-secondarytxt text-body-4 2xl:text-3xl'>Next.js • AWS • TailwindCSS • Typescript</p>
                        </div>
                    </div>
                    <div className='2xl:space-y-3'>
                        <h3 className={generalVar + ' text-work-title 2xl:text-5xl font-medium uppercase text-offwhitetxt'}>thumbnail AI</h3>
                        <p className={Cabinet.className + ' text-body-2 2xl:text-4xl text-stone'}>Full stack application hosted on AWS with Stripe integration. Also utilizes tRPC and NextAuth.js </p>
                    </div>
                </div>
            </div> */}

        </section>
    )
}
export default Projects


type CardType = {
    url: string;
    title: string;
    id: number;
    link: string;
  };

  const cards: CardType[] = [
    {
        url: "./app-dark.png",
        title: "Clair Messaging",
        id: 0,
        link: 'https://clair-em.vercel.app/'
    },
    {
        url: "./dalle.png",
        title: "Image Generator",
        id: 1,
        link: 'https://main.d2nibnnfhe4wtq.amplifyapp.com/'
    },
    {
        url: "./ticket-me.png",
        title: "TicketMe App",
        id: 2,
        link: 'https://ticketme-arekbm.vercel.app/'
    },
    {
        url: './kitchenSink.png',
        title: 'KitchenSink Social',
        id: 3,
        link: 'https://django-server-production-550b.up.railway.app/'
    },
    {
        url: './ResumeBuilder.png',
        title: 'ResumeBuilder',
        id: 4,
        link: 'http://stupendous-dasik-d8337d.netlify.app/'
    },
    {
        url: "./folder.png",
        title: "MinesweeperAI",
        id: 5,
        link: 'https://github.com/ArekBM/minesweeperAI'
    },

  ];
