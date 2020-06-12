import React from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";


const Slider = loadable(() => import("react-slick"));

const SliderComponent = ({ children }) => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 3000,
            fadeIn: false,
            autoplay: true,
            pauseOnHover: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: true,
                        },
                  },
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                        },
                  },
            ],
      };
      return (
            <Slider {...settings}>
                  {children}
            </Slider>
      );
};


export default SliderComponent;