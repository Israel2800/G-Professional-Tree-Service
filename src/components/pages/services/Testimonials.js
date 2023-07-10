import React from "react";
import { testimonials } from "../../../data";
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
        <section id="Testimonials" className="py-12 bg-white">
            <div className="container px-8 mx-auto">
            <h2 className="text-center text-3xl font-bold text-green-700">Testimonials</h2>                
            <h2 className="text-center text-1xl pb-5 text-green-700 py-2">What our clients are saying from Google, HomeAdvisor, Angi, And Much More!</h2>
                <Slider {...settings} className="flex justify-center">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-3/4 p-2 md:p-4 flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4 w-full">
                        <div className="flex flex-col items-center mb-3">
                        <FaQuoteLeft size={30} className="mb-2" />
                        <div className="flex flex-row">
                            {Array.from(Array(testimonial.rating), (e, i) => (
                            <FaStar key={i} color="#ffc107" size={20} />
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
            <style jsx>{`
                .slick-next:before {
                color: #17803d;
                }
                .slick-prev:before {
                    color: #17803d;
                    }
            `}</style>
        </section>
    );
}