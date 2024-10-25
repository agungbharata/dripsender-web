import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Testimonial {
  problem: string;
  tagproblem: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    problem: "Satu Akun Bisa Banyak Whatsapp",
    tagproblem: "yang Anda mau?",
    content: "Cocok sekali, Anda bisa memilih paket 1 Whatsapp, 5 Whatsapp atau Custom sesuai kebutuhan Anda, hubungi tim CS kami",
  },
  {
    problem: "Debbie O'Brien",
    tagproblem: "Senior Program Manager at Microsoft",
    content:
      "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
  },
  {
    problem: "Kent C. Dodds",
    tagproblem: "Developer and Educator",
    content: "Skip to the end. Use @tailwindcss.",
  },
  {
    problem: "Guillermo Rauch",
    tagproblem: "Vercel",
    content: "If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.",
  },
  {
    problem: "Shruti Balasa",
    tagproblem: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    problem: "Shruti Balasa",
    tagproblem: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    problem: "Shruti Balasa",
    tagproblem: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    problem: "Shruti Balasa",
    tagproblem: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    problem: "Shruti Balasa",
    tagproblem: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    problem: "Shruti Balasa",
    tagproblem: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    problem: "Shruti Balasa",
    tagproblem: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  // Add more testimonials as needed
];

const TestimonialCard: React.FC<Testimonial> = ({ problem, tagproblem, content }) => (
  <div className="mb-2 bg-white rounded-lg shadow-sm dark:bg-gray-800 ">
    <div className="flex items-center mb-4 bg-gray-100 dark:bg-slate-700">
      <div className="p-6">
        <p className="inline-block px-4 py-1 mb-2 text-xs font-light text-gray-800 bg-red-200 rounded-full dark:text-white">{tagproblem}</p>
        <h3 className="text-lg font-semibold text-gray-800 sm:text-xl dark:text-white">{problem}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="italic font-light text-gray-700 dark:text-white">{content}</p>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTestimonialsRef = useRef<HTMLDivElement>(null);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll && initialTestimonialsRef.current) {
      initialTestimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && initialTestimonialsRef.current) {
        const { bottom } = initialTestimonialsRef.current.getBoundingClientRect();
        containerRef.current.style.position = bottom < window.innerHeight ? "sticky" : "relative";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative px-4 py-16 isolate bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto my-12 sm:text-center">
          <p className="text-3xl font-semibold leading-8 tracking-tighter text-gray-700 dark:text-cyan-300 sm:text-5xl">
            Dripsender Memberikan Solusi Atas Masalah Anda!
          </p>
          <p className="mt-6 text-xl font-light text-gray-700 dark:text-gray-100 sm:text-2xl">Fleksibelitas Menjalankan WhatsApp Marketing</p>
        </div>

        <div ref={initialTestimonialsRef} className="pb-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
        <div className="absolute -inset-x-32 bottom-0 bg-gradient-to-t from-white dark:from-gray-900 pt-[17%] m-auto max-w-full"></div>
        <div ref={containerRef} className="relative bottom-0 left-0 right-0 z-10 py-4 isolate" style={{ position: "sticky" }}>
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex items-center shadow-sm px-6 py-2.5 border border-cyan-700 font-medium rounded-lg text-gray-100 bg-cyan-700 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              onClick={toggleShowAll}
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2 text-gray-100" aria-hidden="true" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2 text-gray-100" aria-hidden="true" />
                  Show more
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
