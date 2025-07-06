import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "@/lib/utils";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation immediately since hero is visible on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const successRate = useCounterAnimation(90, 2000, isVisible);
  const experience = useCounterAnimation(9, 2000, isVisible);
  const students = useCounterAnimation(800, 2000, isVisible);

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Mathematical formulas background */}
      <div className="math-bg">
        <div className="math-formula">x² + y² = z²</div>
        <div className="math-formula">2 + 2 = 4</div>
        <div className="math-formula">5 × 3 = 15</div>
        <div className="math-formula">9 - 4 = 5</div>
        <div className="math-formula">12 ÷ 3 = 4</div>
        <div className="math-formula">7 + 8 = 15</div>
        <div className="math-formula">6 × 7 = 42</div>
        <div className="math-formula">20 - 8 = 12</div>
        <div className="math-formula">3 + 5 = 8</div>
        <div className="math-formula">4 × 4 = 16</div>
        <div className="math-formula">15 - 9 = 6</div>
        <div className="math-formula">8 ÷ 2 = 4</div>
        <div className="math-formula">11 + 3 = 14</div>
        <div className="math-formula">5 × 6 = 30</div>
        <div className="math-formula">18 - 7 = 11</div>
        <div className="math-formula">25 - 13 = 12</div>
        <div className="math-formula">8 × 9 = 72</div>
        <div className="math-formula">36 ÷ 6 = 6</div>
        <div className="math-formula">14 + 17 = 31</div>
        <div className="math-formula">100 - 45 = 55</div>
        <div className="math-formula">7 × 8 = 56</div>
        <div className="math-formula">84 ÷ 7 = 12</div>
        <div className="math-formula">23 + 19 = 42</div>
        <div className="math-formula">90 - 34 = 56</div>
        <div className="math-formula">9 × 11 = 99</div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h1 className="font-bold text-4xl lg:text-6xl mb-6 leading-tight text-shadow">
              Частный репетитор по{" "}
              <span className="text-yellow-300 block lg:inline">математике</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl">
              Качественная подготовка к ЕГЭ и ОГЭ с индивидуальным подходом
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{successRate || 90}%</div>
                <p className="text-blue-100 text-sm">успешных учеников</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{experience || 9}</div>
                <p className="text-blue-100 text-sm">лет опыта</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{students || 800}+</div>
                <p className="text-blue-100 text-sm">довольных учеников</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Пробный урок бесплатно
              </button>
              <button 
                onClick={() => smoothScrollTo("about")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                <i className="fas fa-arrow-down mr-2"></i>
                Узнать больше
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=600" 
                alt="Анна Петрова - репетитор по математике" 
                className="rounded-2xl shadow-2xl w-80 h-96 lg:w-96 lg:h-[500px] object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
              />
              {/* Floating achievements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                ТОП репетитор
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                МГУ выпускник
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <i className="fas fa-square-root-alt text-6xl text-white animate-pulse"></i>
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <i className="fas fa-infinity text-5xl text-white animate-pulse"></i>
      </div>
      <div className="absolute top-1/2 left-4 opacity-10">
        <i className="fas fa-pi text-4xl text-white"></i>
      </div>
      <div className="absolute top-20 right-10 opacity-10">
        <i className="fas fa-angle text-3xl text-white"></i>
      </div>
      
      {/* Floating circles for visual appeal */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
