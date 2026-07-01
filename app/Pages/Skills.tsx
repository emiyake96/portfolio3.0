import localFont from 'next/font/local'
import AnimatedText from '../(components)/AnimatedText'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const generalVar = localFont({
    src: '../styles/fonts/GeneralSans-Variable.woff2'
})

const Skills = () => {
    return (
        <section
            id='skills'
            className='min-h-screen w-full px-10 md:px-5 xl:px-20 2xl:px-28 overflow-hidden'
        >
            <div className='select-none'>
                <div className='heading flex items-center justify-center space-x-[3%]'>
                    <AnimatedText className={generalVar.className + ' w-fit text-5xl xs:text-heading-2 font-medium xl:text-9xl uppercase text-darkgrey'} text={'Skills'} transitiondelay={.5} />
                </div>
            </div>
            <div className=' mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24'>
                <div className='space-y-6'>
                    <div className='space-y-3 2xl:space-y-10'>
                        <AnimatedText className='2xl:text-7xl font-semibold text-[44px] text-offblack leading-tight translate-y-10' text={'my interests.'} transitiondelay={.5}/>
                        <AnimatedText className={Cabinet.className + ' text-body-1 max-w-md xl:max-w-2xl 2xl:text-3xl  translate-y-10'} text={'I\'m looking forward to bringing the best traits of a creative developer as well as someone who is immersed in the customer experience.'} transitiondelay={.5}/>
                    </div>
                </div>
                <div className=' select-none leading-[2.3rem] text-secondarytxt md:leading-[2.5rem] lg:leading-[3.4rem]  translate-y-10'>
                    <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'Frontend Development'} transitiondelay={.6}/>
                    <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'Backend Development'} transitiondelay={.7}/>
                    <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'UI/UX Design'} transitiondelay={.8}/>
                </div>
            </div>
            <div className=' mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24'>
                <div className='space-y-6'>
                    <div className='space-y-3 2xl:space-y-10'>
                        <AnimatedText className='2xl:text-7xl font-semibold text-[44px] text-offblack leading-tight translate-y-10' text={'my techstack.'} transitiondelay={.5} />
                        <AnimatedText className={Cabinet.className + ' text-body-1 max-w-md xl:max-w-2xl 2xl:text-3xl  translate-y-10'} text={'I am always eager to learn more about new technologies and expand my horizons.'} transitiondelay={.5}/>
                    </div>
                </div>
                    <div className=' select-none leading-[2.3rem] text-secondarytxt md:leading-[2.5rem] lg:leading-[3.4rem]  translate-y-10'>
                        <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'Typescript'} transitiondelay={.5}/>
                        <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'Javascript'} transitiondelay={.6}/>
                        <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'Python'} transitiondelay={.7}/>
                        <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'TailwindCSS'} transitiondelay={.8}/>
                        <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'ReactJS'} transitiondelay={.9}/>
                        <AnimatedText className={generalSans.className + ' 2xl:text-7xl text-special font-extrabold'} text={'SQL'} transitiondelay={1}/>
                </div>
            </div>
        </section>
    )
}

export default Skills