import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'


export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);
  
    const handleMouseMove = (event) => {
      if (!itemRef.current) return;
  
      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();
  
      const relativeX = (event.clientX - left) / width;
      const relativeY = (event.clientY - top) / height;
  
      const tiltX = (relativeY - 0.5) * 5;
      const tiltY = (relativeX - 0.5) * -5;
  
      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
      setTransformStyle(newTransform);
    };
  
    const handleMouseLeave = () => {
      setTransformStyle("");
    };
  
    return (
      <div
        ref={itemRef}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    );
  };

const BentoCard = ({src,description,title})=>{
    return (
        <div className=' relative size-full'>
            <video
            src={src}
            loop
            muted
            autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full justify-between flex-col p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description &&(
                        <p className='mt-3 text-xs max-w-64 md:text-base'>{description}</p>
                    )}
                </div>
            </div>
            
        </div>
    )
}

const Features = ()=> {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-blue-50 text-lg'>Into the Metagame Layer</p>
                
                <p className='font-circular-web max-w-md text-lg text-blue-50 opacity-50'>
                "The world broke long ago. Empires turned to smoke, and the brave were buried beneath silence.
                 But fire never forgets. It waits. It tests. It chooses.
                 And now, it has chosen you."
                </p>
             </div>
           
            <BentoTilt className=' border-hsla relative mb-7 w-full overflow-hidden h-96 rounded-md md:h-[65vh]'>
                <BentoCard 
                src="videos/feature-1.mp4"
                title={<>radia<b>n</b>t</>}
                description= "Legends aren’t found in stories, they’re built in battles." />

            </BentoTilt>
            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>

                <BentoTilt className=' bento-tilt-1 row-span-1 md:col-span-1 md:row-span-2'>
                <BentoCard 
                src="videos/feature-2.mp4"
                title={<>Zigma</>}
                description= "They said I couldn’t do it—so I did it twice, just to flex."
                />
                </BentoTilt>

                <BentoTilt className='bento-tilt-1 row-span-1 ms-32  md:col-span-1 md:ms-0'>
                <BentoCard 
                src="videos/feature-3.mp4"
                title={<>nexus</>}
                description= "A Gamified social hub, adding new Dimentions of Games."
                 />
                </BentoTilt>

                <BentoTilt className='bento-tilt-1 me-14 md:col-span-1 md:me-0'>
                <BentoCard 
                src="videos/feature-4.mp4"
                title={<>azul</>}
                description= "A cross-world AI Agent - elevating your gameplay."
                 />
                </BentoTilt>
                <BentoTilt className='bento-tilt-2 '>
                    <div className='flex size-full flex-col justify-between bg-violet-700 p-5'>
                        <h1 className='bento-title special-font text-black max-w-64'>More Coming Soon!</h1>
                        <TiLocationArrow className='m-5 scale-[5] self-end '/>
                    </div>
                </BentoTilt>
                <BentoTilt className='bento-tilt-2'>
                    <video 
                    src='videos/feature-5.mp4'
                    loop
                    muted
                    autoPlay
                    className='size-full object-center object-cover'
                    />
                </BentoTilt>
            </div>
           
        </div>
        </section>
    )
}

export default Features
