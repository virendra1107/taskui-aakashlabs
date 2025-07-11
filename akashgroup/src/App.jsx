import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AnimationPage from './components/Hero/AnimationPage';
import Background from './components/Hero/Background';
import Navbar from './components/Hero/Navbar';
import Banner from "./components/Banner";
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import AnimationCounter from './components/AnimationCounter';
const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh()
  }, []);

  return (
    <>
      <div className='bg-black'>
        <Background />
        <AnimationPage />
        <Navbar />
      </div>
      <Banner />
      <AnimationCounter />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App