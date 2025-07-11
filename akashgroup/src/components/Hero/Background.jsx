import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'

const Background = () => {

  const containerRef = useRef(null);
  const image1 = useRef();
  const image2 = useRef();
  const image = useRef();

  const { contextSafe } = useGSAP({ scope: containerRef })

  useEffect(()=>{
    gsap.set([image1, image2, image],{
          clearProps: 'all'
        });

  const Animate = contextSafe(function(){
    const tl = gsap.timeline({ repeat:-1 });
    tl.from(image1.current, {
      opacity:0,
      duration:2,
    })
    tl.to(image1.current,{
      duration:1,
      opacity:0,
      delay:6.5
    })
    tl.from(image2.current, {
      opacity:0,
      duration:2
    })
    tl.to(image2.current,{
      duration:1,
      opacity:0,
      delay:6.5
    })
    tl.from(image.current, {
      opacity:0,
      duration:2
    })
    tl.to(image.current,{
      duration:1,
      opacity:0,
      delay:6.5
    })
  });
   Animate()
}, [contextSafe]);


  return (
    <div ref={containerRef} className='relative md:w-full md:h-full '>
          <img 
          ref={image1}
          src="/background/image1.jpg"
          alt="image"
          className='absolute md:bg-cover w-full h-screen '/>
          <img 
          ref={image2}
          src="/background/image2.jpg"
          alt="image"
          className='absolute md:bg-cover w-full h-screen '/>
          <img 
          ref={image}
          src="/background/image.jpg"
          alt="image"
          className='absolute md:bg-cover w-full h-screen'/>
        
    </div>
  )
};

export default Background;
