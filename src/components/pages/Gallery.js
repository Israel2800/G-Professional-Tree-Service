import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import { images } from "../../data";


export default function Gallery(){
    return(
        <section id="Gallery" className="py-8 bg-white">
        <div className="flex flex-col p-4 my-5">
          <p className="w-100 text-center m-2 font-bold text-3xl text-green-700">Our Latest Work</p>
          <p className="w-100 text-center mb-4 text-1xl text-green-700">
            We provide services that set high standards for quality, reliability, durability, and value for money
          </p>
          <Carousel
            className="grid gap-4"
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={false}
            interval={6000}
            stopOnHover={false}
            swipeable={true}
            emulateTouch={true}
            renderIndicator={() => null}
            itemsToShow={3} // Display three items at a time
            responsive={[
              {
                breakpoint: 640,
                itemsToShow: 1, // Reduce to one item on smaller screens
              },
              {
                breakpoint: 768,
                itemsToShow: 2, // Display two items on medium screens
              },
              {
                breakpoint: 1024,
                itemsToShow: 3, // Display three items on large screens
              },
            ]}
          >
            {images.map((image) => (
              <div key={image.id} className="mb-4">
                <img src={image.imageUrl} alt="Tree Service Work" className="w-full h-auto object-contain" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      
    );
}