import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useEffect, useRef, useState } from "react";

export default function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const avgScore = useCounterAnimation(78, 2000, isVisible);
  const successRate = useCounterAnimation(92, 2000, isVisible);
  const improvement = useCounterAnimation(35, 2000, isVisible);
  const satisfaction = useCounterAnimation(98, 2000, isVisible);

  const testimonials = [
    {
      name: "Елена Смирнова",
      role: "Мама ученика",
      text: "Анна Александровна — настоящий профессионал! Мой сын повысил балл с 45 до 78 за полгода подготовки. Занятия проходили интересно, сын с удовольствием делал домашние задания."
    },
    {
      name: "Михаил Петров",
      role: "Ученик 11 класса",
      text: "Благодаря занятиям с Анной Александровной сдал ЕГЭ на 85 баллов и поступил в МГУ! Объясняет очень понятно, всегда поддерживает и верит в успех."
    },
    {
      name: "Анастасия Иванова",
      role: "Выпускница",
      text: "Математика была моим слабым местом, но после года занятий сдала ЕГЭ на 82 балла! Анна Александровна умеет найти подход и объяснить самые сложные темы простым языком."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="results" 
      className="py-20 bg-gradient-to-r from-primary to-accent text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl mb-4">Результаты учеников</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Моя главная цель — помочь каждому ученику раскрыть свой потенциал и достичь высоких результатов
          </p>
        </div>
        
        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{avgScore}</div>
            <p className="text-blue-200">Средний балл ЕГЭ</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{successRate}</div>
            <p className="text-blue-200">% поступивших в ВУЗы</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{improvement}</div>
            <p className="text-blue-200">Улучшение на баллов</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{satisfaction}</div>
            <p className="text-blue-200">% довольных родителей</p>
          </div>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <h3 className="font-bold text-2xl text-center mb-8">Отзывы учеников и родителей</h3>
          
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card text-gray-800 max-w-2xl mx-auto">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4 text-white text-2xl">
                        <i className="fas fa-user"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-center text-yellow-400 text-xl">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-center text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Navigation */}
          <button 
            onClick={previousTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all shadow-lg"
          >
            <i className="fas fa-chevron-left text-white text-xl"></i>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all shadow-lg"
          >
            <i className="fas fa-chevron-right text-white text-xl"></i>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
