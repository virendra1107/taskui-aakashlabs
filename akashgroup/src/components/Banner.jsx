import { FcAdvertising } from "react-icons/fc";
import { MdDeveloperMode } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { TbMessageChatbot } from "react-icons/tb";
const Banner = () => {
  return (
    <div id="aboutus" className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 px-10 bg-black text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          <div data-aos="zoom-in">
            <img className='max-w-[650px] h-[400px] w-full mx-auto object-cover' src="/about.jpg" alt="Banner Img" />
          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-5xl font-bold'>Our Expertise

            </h1>
            <p data-aos="fade-up" className='text-md text-gray-500 font-semibold tracking-wide leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, architecto. Sapiente placeat rerum debitis beatae architecto maxime vitae expedita quis magni fuga. Dolorem sequi sint sed accusamus at facilis, eveniet nihil delectus ut alias voluptatum.

            </p>
            <div className='flex flex-col gap-4'>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <FcAdvertising className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400' />
                <p>Social Media Marketing</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <MdDeveloperMode className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400' />
                <p>Website Development</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <TbSocial className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400' />
                <p>Social Engine Marketing</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <TbMessageChatbot className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400' />
                <p>Chat Bots Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner