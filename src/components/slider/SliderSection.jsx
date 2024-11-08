import img from "../../assets/iPhone-Frame-PNG-Picture.png";
import img1 from "../../assets/pexels-trungnguyenphotog-1603884.jpg";
import img2 from "../../assets/pexels-jonathan-nenemann-13434429.jpg";
import vedio1 from "../../assets/vedio1.mp4";
import vedio2 from "../../assets/vedio2.mp4";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SliderSection() {
  const settings1 = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 400, // مدة التأثير بالميلي ثانية
      easing: "ease", // نوع تأثير التسهيل
    });
  }, []);
  return (
    <>
      <section className="py-6 min-h-[100vh] bg-[#ffe5b2aa] flex justify-center items-center flex-col">
        <div className="my-5 p-5">
          <h1
            data-aos="fade-up"
            className="leading-[38.15px] text-center text-[35px] font-bold mb-3"
          >
            Membership Plan
          </h1>
          <p
            data-aos="fade-up"
            className="leading-[30px] text-center text-secondary-color text-[20px] font-medium mb-3"
          >
            Enhance your photo collection by subscribing to our packages.
          </p>
        </div>
        <div className="container mx-auto">
          <div>
            <Slider className="" {...settings1}>
              <div data-aos="fade-up" className="iteamx">
                <div className="iteam relative w-[50%] ">
                  <video
                    className="absolute md:ps-3 ps-2 rounded-[40px] top-0 left-0 w-[95%] h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={vedio1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="relative">
                    <img
                      className="w-full h-[450px]"
                      src={img}
                      alt="iphoneImage"
                    />
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="iteamx">
                <div className="iteam relative w-[50%]  ">
                  <img
                    className="absolute md:ps-3 ps-2 rounded-[40px] top-0 left-0 w-[95%] h-full object-cover z-0"
                    src={img1}
                    alt=""
                  />
                  <div className="relative">
                    <img
                      className="w-full h-[450px]"
                      src={img}
                      alt="iphoneImage"
                    />
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="iteamx">
                <div className="iteam relative w-[50%] ">
                  <video
                    className="absolute md:ps-3 ps-2 rounded-[40px] top-0 left-0 w-[95%] h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={vedio2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="relative">
                    <img
                      className="w-full h-[450px]"
                      src={img}
                      alt="iphoneImage"
                    />
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="iteamx">
                {" "}
                <div className="iteam relative w-[50%] ">
                  <img
                    className="absolute md:ps-3 ps-2 rounded-[40px] top-0 left-0 w-[95%] h-full object-cover z-0"
                    src={img2}
                    alt=""
                  />
                  <div className="relative">
                    <img
                      className="w-full h-[450px]"
                      src={img}
                      alt="iphoneImage"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
