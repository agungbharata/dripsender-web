import React, { useEffect, useState, useCallback } from "react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rowi - 089533015XXXX",
      title: "Internet Marketer",
      testimony:
        "Kalo menurut saya Hanya dan Baru Tool WA DRIPSENDER ini yg saya temukan yg benar-benar Mengelola dengan baik Sistem nya juga mau membantu mendengar kesulitan User nya. Tetap Semangat Para Admin DRIPSENDER semua. Semoga Berkah dan Bermanfaat ...Aminn",
    },
    {
      id: 2,
      name: "Yani Bspro - 08132143XXXX",
      title: "Admin Bspro",
      testimony:
        "Waduh maaf nich, ane ampe skrng belum komplein. Krn selama ini dripsender berjalan mulus di sini. Dan sangat mendukung agar terus bisa berkembang lebih baik lagi. Izin nanti kalau ada trouble, mohon di bantu yaa para suhu",
    },
    {
      id: 3,
      name: "Rizki Awal - 08121989XXXX",
      title: "Social Media Expert",
      testimony:
        "Produk apps blast WA tidak bisa ngeblast bila jaringan internet applikasi blastnya mati, tapi dripsender beda. Bahkan dia bisa menjadwalkan blast. Semoga bisa membuat produk serupa untuk telegram juga",
    },
    {
      id: 4,
      name: "Imam SU",
      title: "Interrnet Marketer",
      testimony:
        "Dripsender ini sebenere nggak banyak trobel. Daripada software2 serupa. Awal-awal pake emang agak ruwet karna ga terbiasa. Sering dipake dioptimalkan. Asli jadi CUAN 😂. Bot nya SANGAT SUPER MEMBANTU SEKALI",
    },
    {
      id: 5,
      name: "Bhakti Adhitya",
      title: "Internet Marketer",
      testimony:
        "Banyak yang agak murah, tapi tools ini jauh melampui yg murah itu. Padahal bedanya cuma 200-300rb/tahun setahun. Saran saya, kalau database udh siap, Dripsender tools yg paling tepat. Bukan endorse ya, saya user dan tahun ini sy perpanjang lagi. Good job team Dripsender.",
    },
    {
      id: 6,
      name: "Denny Rachmat Mustofa",
      title: "IT Fullstack Enthusiasts",
      testimony:
        "Kami sudah coba bermacam-macam WA Services, baik dari dalam maupun luarnegeri. Tapi belum menemukan WA Services sebagus Dripsender. Serius! UI/UIX nya yang lite, cepat dan harga yang kompetitif. Sangat membantu Web Aplikasi lembaga kami! Luarrrrbiasah!",
    },
    {
      id: 7,
      name: "Rizki Azhari, S.T.P",
      title: "Marketer Online",
      testimony:
        "Saya dulu sempat ragu karena kok mahal banget ya biaya 100rb perbulan. Begitu saya coba Alhamdulillah langsung Berani ambil paket 600 RB setahun. Dan Alhamdulillah semua itu jadi bagian dari investasi 😭 🤑 🤑",
    },
  ];

  const totalSlides = testimonials.length;
  const slidesToShow = {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleTestimonials = () => {
    let result = [...testimonials];
    // Add duplicates at the end for smooth infinite scroll
    result = [...result, ...testimonials.slice(0, slidesToShow.desktop)];
    return result;
  };

  return (
    <div className="w-full py-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto text-center">
        <p class="text-2xl font-semibold leading-8 tracking-tight text-cyan-700 dark:text-cyan-300 sm:text-4xl font-sora">
          Review Pengguna Dripsender
        </p>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-0 z-10 block w-32 pointer-events-none dark:hidden"
            style={{
              background: "linear-gradient(to right, rgb(249 250 251) 0%, rgba(249, 250, 251, 0) 100%)",
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 z-10 block w-32 pointer-events-none dark:hidden"
            style={{
              background: "linear-gradient(to left, rgb(249 250 251) 0%, rgba(249, 250, 251, 0) 100%)",
            }}
          />

          {/* Dark mode gradient */}
          <div
            className="absolute top-0 bottom-0 left-0 z-10 hidden w-32 pointer-events-none dark:block"
            style={{
              background: "linear-gradient(to right, rgb(17 24 39) 0%, rgba(17, 24, 39, 0) 100%)",
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 z-10 hidden w-32 pointer-events-none dark:block"
            style={{
              background: "linear-gradient(to left, rgb(17 24 39) 0%, rgba(17, 24, 39, 0) 100%)",
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute z-20 p-2 -translate-y-1/2 bg-white rounded-full shadow-lg left-4 top-1/2 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute z-20 p-2 -translate-y-1/2 bg-white rounded-full shadow-lg right-4 top-1/2 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Container with Padding for Fade Effect */}
          <div className="px-8 py-10 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow.desktop)}%)`,
              }}
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-full px-3 md:w-1/2 lg:w-1/4">
                  <div className="h-full p-6 transition-transform duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="ml-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-sm text-left text-gray-600 dark:text-gray-100">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="italic text-left text-gray-600 dark:text-gray-50">"{testimonial.testimony}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bullet Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none
                  ${currentIndex === index ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
