import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import localFont from 'next/font/local'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import AnimatedText from '../(components)/AnimatedText';
import ArticleIcon from '@mui/icons-material/Article';

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const generalVar = localFont({
    src: '../styles/fonts/GeneralSans-Variable.woff2'
})

const Contact = () => {
    const [ emailModalOpen, setEmailOpen ] = useState(false)
    const [ currentTime, setCurrentTIme ] = useState(new Date())

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        if(form.current){
            emailjs.sendForm('service_bxyc5tm', 'template_6uv8k5k', form.current, 'CCjxA3suyagjrswyg')
              .then((result) => {
                console.log(result.text)
              }, (error) => {
                console.log(error.text)
            })
              .then(
                () => {
                  setEmailOpen(true)
                  form.current?.reset()
                  setTimeout(() => setEmailOpen(false), 4000)
                },
                () => {
                  alert('Failed to send :(')
                }
              )
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setCurrentTIme(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])    

    const formattedTime: string = currentTime.toLocaleTimeString()

    return (
        <section
            id='contact'
            className='my-[10%] overflow-hidden'
        >
            <div className='section-heading select-none'>
                <div className='heading flex items-center justify-center space-x-[3%]'>
                    <AnimatedText className={generalVar.className + ' w-fit text-5xl xs:text-heading-2 font-medium xl:text-9xl uppercase text-darkgrey'} text={'CONTACT'} transitiondelay={.5} />
                </div>

            </div>
            <div className='mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12'>
                <div className='col-span-4'>
                    <h1 className={generalSans.className + ' max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight'}>Open to all opportunities  and chess game challenges </h1>
                    <p className={Cabinet.className + ' mt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl'}>Over my career I have learned how to get things done, keep my cool in dire moments, work with lots of different types of people, and take initiative to pick up slack when needed.</p>
                    <form ref={form} onSubmit={sendEmail} className='mt-10'>
                        <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2'>
                            <div className='relative z-0'>
                                <input className='peer block w-full appearance-none border-0 border-b border-darkgrey bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0' type='text' placeholder='' name='Name' required></input>
                                <label htmlFor='Name' className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondarytxt duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'>your name</label>
                            </div>
                            <div className='relative z-0'>
                                <input className='peer block w-full appearance-none border-0 border-b border-darkgrey bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0' type='text' placeholder='' name='Email' required></input>
                                <label htmlFor='Email' className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondarytxt duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'>your email</label>
                            </div>
                            <div className='relative z-0 sm:col-span-2'>
                                <textarea className='peer block w-full appearance-none border-0 border-b border-darkgrey bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 resize-none' rows={5} name='Message' placeholder=''></textarea>
                                <label htmlFor='Message' className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondarytxt duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75'>your message</label>
                            </div>
                        </div>
                        <br/>
                        <button className='msgbtn'>
                            <span className='p-2.5 bg-contactbtn rounded-full'>
                                <span className={Cabinet.className + ' text-offwhitetxt relative inline-block'}>
                                    <span className='relative z-10 group text-[17.6px]'>
                                        send message
                                        <span className='absolute inset-x-0 top-1/2 h-1 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </form>
                </div>
                <div className='col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1'>
                    <div id='email' className='flex flex-col gap-2'>
                        <h4 className={generalVar.className + ' text-body-1 2xl:text-4xl font-semibold'}>Contact Details</h4>
                        <div className='flex flex-row gap-2'>
                            <EmailIcon />
                            <p className={generalVar.className + ' text-body-2'}>eric.bmiyake@gmail.com</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <ArticleIcon />
                            <a href='https://emiyake.netlify.app/assets/sweRes-542262cb.pdf' target='_blank'><span className='relative inline-block'><span className={generalVar.className + ' text-body-2 relative z-10 group'}>Resume<span className='absolute inset-x-0 h-1 bottom-0 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span></span></span></a>
                        </div>
                    </div>
                    <div id='links' className='flex flex-col gap-2'>
                        <h4 className={generalVar.className + ' text-body-1 2xl:text-4xl font-semibold'}>My Socials</h4>
                        <div className='flex flex-row gap-2'>
                            <GitHubIcon />
                            <a href='https://github.com/ArekBM' target='_blank'><span className={generalVar.className + ' relative inline-block '}><span className='text-body-2 relative z-10 group'>Github<span className='absolute inset-x-0 h-1 bottom-0 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span></span></span></a>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <LinkedInIcon />
                            <a href='https://linkedin.com/in/emiyake' target='_blank'><span className={generalVar.className + ' relative inline-block'}><span className='text-body-2 relative z-10 group'>LinkedIn<span className='absolute inset-x-0 h-1 bottom-0 bg-darkgrey w-full transform origin-left scale-x-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-x-100'></span></span></span></a>
                        </div>
                    </div>
                    <div id='location' className='flex flex-col gap-2'>
                        <h3 className={generalSans.className + ' text-body-1 2xl:text-4xl font-semibold'}>Location</h3>
                        <div className='flex flex-row gap-2'>
                            {/* <HomeIcon /> */}
                            <p className={Cabinet.className + ' text-body-2'}>San Francisco, CA USA</p>
                        </div>
                        <p className={Cabinet.className + ' text-body-2'}>{formattedTime}</p>
                    </div>
                </div>
            </div>

            {/* Toast notification */}
            <div
                className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-offblacktxt px-5 py-3 shadow-lg transition-all duration-500 ${
                    emailModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
                }`}
            >
                <span className='flex h-2 w-2 rounded-full bg-green-400'></span>
                <span className={Cabinet.className + ' text-offwhitetxt text-[15px]'}>Message sent!</span>
            </div>
        </section>
    )
}

export default Contact