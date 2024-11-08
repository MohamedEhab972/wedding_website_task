import backgroundimg from "../../assets/pexels-emre-keskinol-837719-1718345.jpg";
import backgroundimg1 from "../../assets/pexels-hikaique-775201.jpg";
import backgroundimg2 from "../../assets/pexels-markusspiske-117843.jpg";
import backgroundimg3 from "../../assets/pexels-elias-tigiser-411757-14430860.jpg";
import backgroundimg4 from "../../assets/pexels-stywo-1261728.jpg";
import leaves from "../../assets/—Pngtree—watercolor leaf leaf frame_5542840.png";
import floral from "../../assets/floral-crown-georgia_brannan.png";
import minimalist from "../../assets/minimalist-arch_aloha.png";
import champagne from "../../assets/champagne-sparkle_aloha.png";

import SliderSection from "../slider/SliderSection";
import Slider from "react-slick";
import ContactUs from "../contactUs/ContactUs";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    dots: false,
  };

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <>
      <header className="relative py-10 min-h-[100vh] flex  justify-center items-center">
        <div className="absolute top-0 bottom-0 right-0 left-0 min-h-[100vh]">
          <Slider className="min-h-[100vh]" {...settings}>
            <div>
              <img
                className="w-full h-[145vh] md:h-[100vh] object-cover"
                src={backgroundimg}
                alt="Slide 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="w-full h-[145vh] md:h-[100vh] object-cover"
                src={backgroundimg3}
                alt="Slide 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="w-full h-[145vh] md:h-[100vh] object-cover"
                src={backgroundimg4}
                alt="Slide 3"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="w-full h-[145vh] md:h-[100vh] object-cover"
                src={backgroundimg1}
                alt="Slide 3"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="w-full h-[145vh] md:h-[100vh] object-cover"
                src={backgroundimg2}
                alt="Slide 3"
                loading="lazy"
              />
            </div>
          </Slider>
        </div>
        <div className="w-full relative h-full flex-col md:flex-row flex justify-center content-evenly">
          <div className="md:w-7/12 py-5 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl mb-0 font-semibold p-10 text-center leading-[60px]">
              Hundreds of beautiful wedding website templates
            </h1>
            <p className="text-white text-xl px-10">
              Whether you’re going floral, modern, or feel undecided, browse
              hundreds of website design templates and customize them to match
              your style,Choose from any color, just as it should be. Follow the
              latest color trends or find that perfect peach-ish plum. Whatever
              hue tickles you pink, we have it.
            </p>
          </div>
          <div className="md:w-5/12 flex flex-wrap justify-center content-evenly overflow-hidden">
            <div className="w-6/12">
              <img className="w-full -rotate-12" src={floral} alt="" />
            </div>
            <div className="w-6/12">
              <img className="w-full -rotate-12" src={minimalist} alt="" />
            </div>
            <div className="w-6/12">
              <img className="w-full -rotate-12" src={champagne} alt="" />
            </div>
          </div>
        </div>
      </header>
      <section
        style={{
          backgroundImage: `url(${leaves}), linear-gradient(rgba(0, 128, 0, 0.3), rgba(255, 255, 0, 0.3), rgba(255, 165, 0, 0.3))`,
          backgroundSize: "cover",
        }}
        className="min-h-[100vh] overflow-hidden relative flex justify-center items-center flex-col"
      >
        <div className=" text-center">
          <h1
            data-aos="fade-up"
            className="opacity-[90%]  xl:text-[40px] text-[25px] font-bold mb-3"
          >
            Hundreds of beautiful wedding website templates.
          </h1>
          <p
            data-aos="fade-up"
            className="opacity-[40%] text-[16px] font-light mb-16 "
          >
            Explore gorgeous website designs with matching prints or online
            wedding invitations. From classic to modern, find the design that
            fits your wedding style.
          </p>
        </div>
        <div className="w-full flex absolute -bottom-5 md:-bottom-12">
          <div className="w-4/12 flex justify-center items-center">
            <img data-aos="fade-up" src={floral} alt="wedding template" />
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <img data-aos="fade-up" src={champagne} alt="wedding template" />
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <img data-aos="fade-up" src={minimalist} alt="wedding template" />
          </div>
        </div>
      </section>
      <SliderSection />
      <ContactUs />
    </>
  );
}
