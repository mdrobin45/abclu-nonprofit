"use client";

import { ArrowRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const bannerData = [
   {
      id: 1,
      title: "Protecting Your Land Rights",
      subtitle: "Expert guidance for property disputes and legal protection",
      description:
         "Our team of legal experts provides comprehensive support for land rights issues, ensuring your property is protected under the law.",
      image: "https://images.pexels.com/photos/1630039/pexels-photo-1630039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "Get Legal Help",
      buttonLink: "#legal-aid",
   },
   {
      id: 2,
      title: "Civil Rights Advocacy",
      subtitle: "Standing up for justice and equality",
      description:
         "We advocate for the fundamental rights of all residents, ensuring equal treatment and access to justice for every community member.",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "Learn More",
      buttonLink: "#civil-rights",
   },
   {
      id: 3,
      title: "Community Business Support",
      subtitle: "Empowering local entrepreneurs",
      description:
         "Supporting local businesses with resources, guidance, and advocacy to help them thrive and contribute to our community's economic growth.",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "Business Resources",
      buttonLink: "#business-support",
   },
];

export default function BannerSlider() {
   return (
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20">
         <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            }}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            loop={true}
            className="banner-swiper">
            {bannerData.map((slide) => (
               <SwiperSlide key={slide.id}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-left">
                           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                              {slide.title}
                           </h1>
                           <p className="text-xl text-blue-600 font-semibold mb-4">
                              {slide.subtitle}
                           </p>
                           <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                              {slide.description}
                           </p>
                           <div className="flex flex-col sm:flex-row gap-4">
                              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2">
                                 {slide.buttonText}
                                 <ArrowRight className="h-5 w-5" />
                              </button>
                              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
                                 Contact Us Today
                              </button>
                           </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                           <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                              <img
                                 src={slide.image}
                                 alt={slide.title}
                                 className="w-full h-[500px] object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-blue-600 !bg-white !w-12 !h-12 !rounded-full !shadow-lg after:!text-lg"></div>
            <div className="swiper-button-next !text-blue-600 !bg-white !w-12 !h-12 !rounded-full !shadow-lg after:!text-lg"></div>
         </Swiper>

         {/* Custom Styles */}
         <style jsx global>{`
            .banner-swiper .swiper-button-prev:after,
            .banner-swiper .swiper-button-next:after {
               font-size: 18px;
               font-weight: bold;
            }
         `}</style>
      </section>
   );
}
