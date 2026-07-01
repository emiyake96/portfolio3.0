import localFont from 'next/font/local'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const generalVar = localFont({
    src: '../styles/fonts/GeneralSans-Variable.woff2'
})

const About = () => {

    return (
        <section
            id='about'
            className={`select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden px-10 md:px-5 xl:px-20 2xl:px-28`}
        >   
            <div className='flex w-full items-center space-x-20'>
                <h1 className={generalVar.className + ' text-heading-1 font-medium text-abouttxt leading-[1.25em] md:leading-[1.08em]'}>I am a fullstack developer based in San Francisco, CA. I love interactive and dynamic design. Flow and rhythm are both something I focus on and enjoy.</h1>
            </div>
        </section>
    )
}

export default About