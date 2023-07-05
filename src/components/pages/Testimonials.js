import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../../data";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <section id="Testimonials" className="py-8 ">
        <div className="container px-8 mx-auto">
          <h5 className="text-center ">Testimonials</h5>
          <h2 className="text-center pb-5">What our clients are saying</h2>
          <Slider {...settings} className="">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-2 md:p-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <div className="flex flex-col items-center mb-3">
                    <FaQuoteLeft size={20} className="mb-2" />
                    <div className="flex flex-row">
                      {Array.from(Array(testimonial.rating), (e, i) => (
                        <FaStar key={i} color="#ffc107" size={12} />
                      ))}
                    </div>
                  </div>
                  <p className="pb-3 text-lg text-center text-slate-900">{testimonial.comment}</p>
                  <h5 className="font-bold text-center text-slate-900">{testimonial.name}</h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
}