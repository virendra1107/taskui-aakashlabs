import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitch,
  FaTiktok,
  FaXTwitter,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa6';
import { LuArrowUpRight } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const headingRef = useRef(null);
  const linkRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 70%",
      },
      defaults: { ease: "power2.out", duration: 0.5 }
    });

    tl.from(headingRef.current, { opacity: 0, scale: 0 })
      .from(linkRef.current, { opacity: 0, y: -30 }, "-=0.3");

  })
  return (
    <footer id='getintouch' className="bg-black text-white px-6 py-12 md:py-20">
      {/* Heading */}
      <h2 ref={headingRef} className="group text-5xl md:text-6xl font-extrabold text-center mb-24">
        <span className="relative inline-flex overflow-hidden">
          <span className="flex gap-1 translate-y-0 transition duration-500 group-hover:translate-y-[-160%]">
            Let's Work Together{" "}
            <LuArrowUpRight className="inline text-red-600 text-5xl" />
          </span>
          <span className="absolute translate-y-[164%] transition duration-500 group-hover:translate-y-0">
            <span className="flex">
              Let's Work Together{" "}
              <LuArrowUpRight className="inline text-red-600 text-5xl" />
            </span>
          </span>
        </span>

      </h2>

      {/* Footer Columns */}
      <div ref={linkRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-md md:text-base gap-20 mb-10">
        {/* Logo + Contact */}
        <div>
          <div className="flex items-center gap-2 mb-12">
            <img className="h-10" src="/aakash.png" alt="logo" />
          </div>
          <div className="flex items-center gap-2 mb-8">
            <FaEnvelope className="text-red-600" />
            <span>geral@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-red-600" />
            <span>(+23) 345 322 233</span>
          </div>
        </div>

        {/* Office Address */}
        <div>
          <h3 className="font-bold uppercase mb-5">Office</h3>
          <p>
            Naapo <em>headquarters</em>
            <br />
            PO Box 16122 Collins Street
            <br />
            West Victoria 8007
            <br />
            Australia
          </p>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold uppercase mb-5">Legal & Press</h3>
          <ul className="space-y-1">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Presskit</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold uppercase mb-3">Newsletter</h3>
          <p className="mb-3">News, free stuff and products updates</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border border-gray-500 px-3 py-2 text-white placeholder-gray-400 focus:outline-none mb-2"
          />
          <input
            type="submit"
            value="Subscribe"
            className="w-full bg-red-800 px-3 py-2 text-white"
          />

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col justify-center items-center border-t border-gray-700 pt-6 text-sm">
        {/* Social icons */}
        <div className="flex gap-5 mb-4 text-lg">
          <a href="https://www.facebook.com/">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.twitch.tv/">
            <FaTwitch />
          </a>
          <a href="https://www.tiktok.com/">
            <FaTiktok />
          </a>
          <a href="https://twitter.com/">
            <FaXTwitter />
          </a>
        </div>
        <p className="text-gray-400">2025 © Aakashlabs Group</p>
      </div>
    </footer>
  );
};

export default Footer;
