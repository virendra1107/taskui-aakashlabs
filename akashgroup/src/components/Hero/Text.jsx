import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';

const Text = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const elementsContainerRefs = useRef([]);

  const info = [
    {
      id: 'innovate',
      desc: "welcome to Aakashlabs Group",
      top: "Innovate",
      bottom: "& Transform"
    },
    {
      id: 'creativity',
      desc: "pushing boundaries to create work that stands out",
      top: "Creativity",
      bottom: "Without Limits"
    },
    {
      id: 'branding',
      desc: "your vision is the heart of everything we do",
      top: "Branding",
      bottom: "& Strategy"
    },
  ];

  useGSAP(() => {
    const container = elementsContainerRefs.current[currentIndex];
    if (!container) return;

    const firstLine = container.querySelector('.anim-first-line');
    const descText = container.querySelector('.anim-desc');
    const largeText = container.querySelector('.anim-large-text');
    const lastLine = container.querySelector('.anim-last-line');
    const button = container.querySelector('.anim-button');

    if (!firstLine || !descText || !largeText || !lastLine || !button) return;

    gsap.set([firstLine, descText, largeText, lastLine, button], {
      clearProps: 'all'
    });

    gsap.set(firstLine, { scaleY: 0, autoAlpha: 0, transformOrigin: 'top' });
    gsap.set(descText, { y: 20, autoAlpha: 0 });
    gsap.set(largeText, { y: 20, autoAlpha: 0 });
    gsap.set(lastLine, { scaleY: 0, autoAlpha: 0, transformOrigin: 'top' });
    gsap.set(button, { scale: 0.8, autoAlpha: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % info.length);
      }
    });

    tl.to(firstLine, { scaleY: 1, autoAlpha: 1, duration: 0.5, delay: 0.3 })
      .to(descText, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.3")
      .to(largeText, { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.3")
      .to(lastLine, { scaleY: 1, autoAlpha: 1, duration: 0.6 })
      .to(button, { scale: 1, autoAlpha: 1, duration: 0.3 }, "-=0.2");

    tl.addLabel("fadeOutStart", "+=6");

    tl.to([firstLine, descText, largeText, lastLine, button], {
      scale: 0.5,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.inOut"
    }, "fadeOutStart");

    return () => {
      tl.kill();
    };
  }, { scope: elementsContainerRefs, dependencies: [currentIndex, info.length] });

  return (
    <div className="relative text-white bg-transparent p-6 rounded w-screen h-screen flex flex-col items-center">
      <div className="flex-grow flex md:top-16 flex-col items-center justify-center">
        {info.map(({ id, desc, top, bottom }, index) => (
          <div
            key={id}
            ref={el => elementsContainerRefs.current[index] = el}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            aria-hidden={index !== currentIndex}
          >
            <div className="anim-first-line h-[110px] border-l-2 border-white lg:mt-5 mb-6"></div>
            <p className="anim-desc text-[8px] flex-nowrap md:text-md sm:text-sm font-semibold sm:font-bold uppercase tracking-widest text-gray-200 md:mb-1 sm:mb-5">
              {desc}
            </p>
            <h1 className="anim-large-text text-5xl sm:text-7xl md:text-[110px] font-black leading-tight">
              {top}
              <br />
              <span className="text-white text-nowrap text-">{bottom}</span>
            </h1>
            <div className="anim-last-line h-[100px] border-l-2 border-white mt-6"></div>
            <button className="anim-button flex-nowrap shrink-0 lg:mt-8 lg:mb-10 mt-12 px-14 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black  transition-color duration-300">
              <a href="#aboutus">
                More About Us
              </a>
            </button>
          </div>
        ))}
      </div>

      <div className="hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 md:flex gap-4 z-10">
        {info.map((_, index) => (
          <div
            key={`line-${index}`}
            aria-label={`Go to item ${index + 1}`}
            className={`w-[3px] h-6 bg-zinc-300 ${currentIndex === index ? 'bg-slate-200 scale-x-110' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Text;
