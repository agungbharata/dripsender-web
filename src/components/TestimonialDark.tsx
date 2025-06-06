import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Satu Akun Bisa Banyak Whatsapp",
    role: "Remix & React Training",
    content: "I feel like an idiot for not using Tailwind CSS until now.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Debbie O'Brien",
    role: "Senior Program Manager at Microsoft",
    content:
      "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Kent C. Dodds",
    role: "Developer and Educator",
    content: "Skip to the end. Use @tailwindcss.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Guillermo Rauch",
    role: "Vercel",
    content: "If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Shruti Balasa",
    role: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Shruti Balasa",
    role: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Shruti Balasa",
    role: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Shruti Balasa",
    role: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Shruti Balasa",
    role: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Shruti Balasa",
    role: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Shruti Balasa",
    role: "Full Stack Web Developer & Tech Educator",
    content:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
    avatar: "/api/placeholder/40/40",
  },
  // Add more testimonials as needed
];

const TestimonialCard: React.FC<Testimonial> = ({ name, role, content, avatar }) => (
  <div className="p-6 mb-4 bg-gray-800 rounded-lg">
    <div className="flex items-center mb-4">
      <img src={avatar} alt={name} className="w-10 h-10 mr-4 rounded-full" />
      <div>
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
    <p className="text-gray-300">{content}</p>
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
    <div className="px-4 py-16 bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto my-12 sm:text-center">
          <p className="text-3xl font-semibold leading-8 tracking-tighter text-gray-50 sm:text-5xl">Review Pengguna</p>
          <p className="mt-6 text-xl font-light text-gray-100 sm:text-2xl">Testimoni mereka yang telah menggunakan Dripsender</p>
        </div>
        <div ref={initialTestimonialsRef} className="pb-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
        <div ref={containerRef} className="bottom-0 left-0 right-0 z-10 py-4 bg-gray-900" style={{ position: "sticky" }}>
          <div className="flex justify-center absolute -inset-x-32 bottom-0 bg-gradient-to-t from-gray-900 pt-[40%] mx-auto max-w-full">
            <button
              type="button"
              className="inline-flex mt-28 items-center shadow-sm px-6 py-2.5 border border-gray-700 text- font-medium rounded-full text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleShowAll}
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2 text-gray-400" aria-hidden="true" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2 text-gray-400" aria-hidden="true" />
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
