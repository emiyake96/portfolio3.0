import { motion } from 'framer-motion'
import localFont from 'next/font/local'
import { useRef, useEffect, useState } from 'react'
import AnimatedText from '../(components)/AnimatedText'

const generalSans = localFont({
    src: '../styles/fonts/GeneralSans-Bold.woff2'
})

const Cabinet = localFont({
    src: '../styles/fonts/CabinetGrotesk-Regular.woff2'
})

const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
        transition: { duration: 1}
    }
}

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



const Hero = () => {

    const [scale, setScale ] = useState(2)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setScale(1.1)
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [])


    return(
        <section className='relative flex w-full h-screen select-none items-center justify-center overflow-hidden'>
            <div className='z-10 flex flex-col  w-full text-title items-center 2xl:text-[10vw] 2xl:space-y-16 text-offblacktxt uppercase'>
                <div className='2xl:py-16'>
                    <AnimatedText className={generalSans.className + ' overflow-visible'} text={`Hey, I'm Eric`} transitiondelay={2}/>
                </div>
                <div className='2xl:py-16'>
                    <AnimatedText className={generalSans.className + ' font-outline-3 md:font-outline-4 text-transparent overflow-visible'} text={`Hey, I'm Eric`} transitiondelay={2}/>
                </div>
                <div className='2xl:py-16'>
                    <AnimatedText className={generalSans.className + ' overflow-visible'} text={`Hey, I'm Eric`} transitiondelay={2}/>
                </div>
                {/* <motion.svg variants={svgVariants} initial='hidden' animate='visible' width="600" height="800" viewBox="0 0 619 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path variants={pathVariants} d="M555.002 194.107L555.007 194.112C561.95 201.323 570.534 204.94 580.663 204.94C590.079 204.94 598.177 202.079 604.87 196.324C611.631 190.567 615.639 183.025 616.901 173.787L617.134 172.084H615.415H599.959H598.704L598.483 173.319C597.641 178.007 595.587 181.761 592.337 184.656C589.171 187.47 585.372 188.884 580.855 188.884C575.378 188.884 571.035 186.943 567.69 183.072C564.32 179.108 562.579 173.942 562.579 167.44C562.579 161.003 564.32 155.903 567.687 152.004C571.032 148.13 575.376 146.188 580.855 146.188C585.364 146.188 589.198 147.629 592.433 150.512L592.439 150.517L592.445 150.522C595.685 153.35 597.701 157.03 598.48 161.642L598.691 162.892H599.959H615.415H617.136L616.901 161.187C615.638 152.012 611.628 144.503 604.87 138.748C598.177 132.993 590.079 130.132 580.663 130.132C570.534 130.132 561.95 133.749 555.007 140.96C548.068 148.165 544.603 157.024 544.603 167.44C544.603 177.917 548.066 186.838 555.002 194.107Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M536.04 203.5H537.54V202V133.072V131.572H536.04H521.448H519.948V133.072V202V203.5H521.448H536.04Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M470.321 203.5H471.821V202V179.116H478.619L493.728 202.807L494.171 203.5H494.993H512.369H515.175L513.616 201.167L496.912 176.155C501.211 174.418 504.667 171.927 507.216 168.65C510.183 164.854 511.661 160.43 511.661 155.44C511.661 147.96 509.112 141.997 503.907 137.764C498.75 133.569 491.616 131.572 482.705 131.572H455.729H454.229V133.072V202V203.5H455.729H470.321ZM482.033 164.116H471.821V146.668H482.033C486.398 146.668 489.397 147.504 491.278 148.931C493.081 150.299 494.069 152.375 494.069 155.44C494.069 158.467 493.085 160.519 491.284 161.873C489.402 163.288 486.4 164.116 482.033 164.116Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M445.941 189.328V187.828H444.441H414.165V174.316H440.889H442.389V172.816V160.24V158.74H440.889H414.165V147.244H443.769H445.269V145.744V133.072V131.572H443.769H398.073H396.573V133.072V202V203.5H398.073H444.441H445.941V202V189.328Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M318.848 202.55L319.223 203.5H320.244H332.436H333.456L333.831 202.551L349.176 163.704V202V203.5H350.676H363.924H365.424V202V133.072V131.572H363.924H346.452H345.429L345.056 132.524L326.391 180.033L307.817 132.526L307.444 131.572H306.42H288.948H287.448V133.072V202V203.5H288.948H302.196H303.696V202V164.105L318.848 202.55Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M267.419 148.774C266.879 149.472 266.195 150.029 265.361 150.459C263.708 151.312 261.591 151.654 258.918 151.357L257.253 151.172V152.848V159.472V160.788L258.558 160.959C264.31 161.712 269.398 160.372 273.706 156.899C278.086 153.421 280.317 148.865 280.317 143.344C280.317 139.697 279.351 136.641 277.243 134.371C275.196 132.032 272.432 130.9 269.121 130.9C266.209 130.9 263.712 131.723 261.781 133.493C259.848 135.2 258.885 137.44 258.885 140.08C258.885 142.513 259.738 144.627 261.436 146.325L261.448 146.337L261.461 146.349C263.09 147.904 265.107 148.7 267.419 148.774Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M248.977 203.5H250.477V202V133.072V131.572H248.977H234.385H232.885V133.072V202V203.5H234.385H248.977Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M180.596 216.016V217.532L182.112 217.516C188.557 217.449 194.033 215.559 198.434 211.778C202.881 207.955 205.1 202.922 205.1 196.816C205.1 192.604 204.202 189.142 202.178 186.661C200.18 184.133 197.313 182.932 193.808 182.932C190.977 182.932 188.521 183.815 186.551 185.634L186.54 185.644L186.529 185.654C184.596 187.51 183.668 189.936 183.668 192.784C183.668 195.337 184.547 197.568 186.293 199.39C188.036 201.208 190.203 202.145 192.709 202.156C192.149 203.393 191.231 204.416 189.928 205.248L189.908 205.261L189.888 205.275C187.952 206.602 185.381 207.352 182.069 207.412L180.596 207.439V208.912V216.016Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M159.622 159.659L144.507 132.346L144.079 131.572H143.195H127.451H124.876L126.146 133.812L150.335 176.476V202V203.5H151.835H166.427H167.927V202V176.478L192.305 133.816L193.588 131.572H191.003H176.315H175.438L175.008 132.336L159.622 159.659Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M124.191 189.328V187.828H122.691H92.4147V174.316H119.139H120.639V172.816V160.24V158.74H119.139H92.4147V147.244H122.019H123.519V145.744V133.072V131.572H122.019H76.3228H74.8228V133.072V202V203.5H76.3228H122.691H124.191V202V189.328Z" stroke="black" strokeWidth="3"/>
                    <motion.path variants={pathVariants} d="M17.696 203.5H19.196V202V174.316H46.052V202V203.5H47.552H62.144H63.644V202V133.072V131.572H62.144H47.552H46.052V133.072V158.74H19.196V133.072V131.572H17.696H3.104H1.604V133.072V202V203.5H3.104H17.696Z" stroke="black" strokeWidth="3"/>
                </motion.svg> */}
            </div>
            <div className='absolute mx-auto w-[55%] overflow-hidden rounded-md'>
                <img src='./bg.webp' className='scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto transform transition-transform duration-1000 ease-in-out' style={{ transform: `scale(${scale}, ${scale})` }} />
            </div>

            
            {/* <Lottie animationData={animation} className='absolute mx-auto  w-[55%] overflow-hidden rounded-md' /> */}
        </section>
    )
}

export default Hero