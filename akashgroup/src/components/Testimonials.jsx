import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "Victor",
    position: "Software Engineer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium incidunt dolor natus amet, rerum alias cumque reiciendis reprehenderit ut.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya",
    position: "Product Manager",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium incidunt dolor natus amet, rerum alias cumque reiciendis reprehenderit ut.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Vikram",
    position: "UX Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium incidunt dolor natus amet, rerum alias cumque reiciendis reprehenderit ut.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Kachra Seth",
    position: "Marketing Specialist",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium incidunt dolor natus amet, rerum alias cumque reiciendis reprehenderit ut.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Lalit Burari",
    position: "Sales Executive",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium incidunt dolor natus amet, rerum alias cumque reiciendis reprehenderit ut.",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='ourteam' className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-md md:text-2xl font-semibold text-primary mb-2">
            Meet our Team
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-extrabold mb-3">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil, fugit dignissimos a earum sed nobis nisi repellat enim alias.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-4 px-2">
                <div className="flex flex-row gap-4 shadow-lg py-8 px-8 rounded-xl bg-slate-700 relative">
                  <div className="mb-2">
                    <img src={data.img} alt={data.name} className="w-[120px] h-[150px] rounded-xl max-w-none max-h-none" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm text-gray-300 font-medium mb-2">
                      {data.text}
                    </p>
                    <h2 className="text-xl font-bold text-white">{data.name}</h2>
                    <p className="text-sm text-gray-400">{data.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
