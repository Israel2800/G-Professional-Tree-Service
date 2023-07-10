import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { images } from '../../../data';
export default function GallerySection() {
  return (
    <section id="GallerySection" className="py-8 bg-white">
      <div className="flex flex-col p-4 my-5">
        <p className="w-full text-center m-2 font-bold text-3xl text-green-700">Our Latest Work</p>
        <p className="w-full text-center mb-4 text-1xl text-green-700">
          We provide services that set high standards for quality, reliability, durability, and value for money
        </p>
        {window.innerWidth <= 640 ? (
          <Carousel
            className="grid gap-4"
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            stopOnHover={false}
            swipeable={true}
            emulateTouch={true}
            renderIndicator={() => null}
            itemsToShow={1} // Display one item at a time on mobile devices
          >
            {images.map((image) => (
              <div key={image.id}>
                <img
                  src={image.imageUrl}
                  alt="Tree Service Work"
                  className="w-full h-48 object-cover rounded-t-lg rounded-b-lg"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:p-10 p-4">
            {images.map((image) => (
              <div key={image.id}>
                <img
                  src={image.imageUrl}
                  alt="Tree Service Work"
                  className="w-full h-48 object-cover rounded-t-lg rounded-b-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
