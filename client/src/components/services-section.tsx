import { useState, useEffect } from "react";

interface ServicesSectionProps {
  onBookingClick: () => void;
}

export default function ServicesSection({ onBookingClick }: ServicesSectionProps) {
  const [lessonType, setLessonType] = useState(1500);
  const [lessonCount, setLessonCount] = useState(8);
  const [discount, setDiscount] = useState("Нет");
  const [totalCost, setTotalCost] = useState(12000);

  useEffect(() => {
    calculateCost();
  }, [lessonType, lessonCount]);

  const calculateCost = () => {
    let discountRate = 0;
    let discountText = "Нет";
    
    if (lessonCount >= 20) {
      discountRate = 0.15;
      discountText = "15%";
    } else if (lessonCount >= 10) {
      discountRate = 0.10;
      discountText = "10%";
    } else if (lessonCount >= 5) {
      discountRate = 0.05;
      discountText = "5%";
    }
    
    const subtotal = lessonType * lessonCount;
    const total = subtotal * (1 - discountRate);
    
    setDiscount(discountText);
    setTotalCost(Math.round(total));
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-primary mb-4">Услуги и цены</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаю различные форматы занятий для максимально эффективного обучения
          </p>
        </div>
        
        {/* Service Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-primary to-accent w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-calculator text-3xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">Алгебра</h3>
            <p className="text-gray-600 leading-relaxed">Уравнения, неравенства, функции, логарифмы</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-accent to-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-shapes text-3xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">Геометрия</h3>
            <p className="text-gray-600 leading-relaxed">Планиметрия, стереометрия, векторы</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-chart-line text-3xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">Подготовка к ЕГЭ/ОГЭ</h3>
            <p className="text-gray-600 leading-relaxed">Разбор заданий, стратегии решения</p>
          </div>
        </div>
            
        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="service-card">
            <div className="text-center mb-6">
              <h3 className="font-bold text-2xl mb-2">Базовый</h3>
              <div className="text-4xl font-bold text-primary mb-2">1500₽</div>
              <p className="text-gray-600">за урок</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Индивидуальные занятия",
                "60 минут",
                "Домашние задания",
                "Контроль прогресса"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onBookingClick}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Выбрать план
            </button>
          </div>
          
          <div className="service-card bg-primary text-white transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-primary px-4 py-1 rounded-full text-sm font-bold">
              ПОПУЛЯРНЫЙ
            </div>
            <div className="text-center mb-6">
              <h3 className="font-bold text-2xl mb-2">Стандартный</h3>
              <div className="text-4xl font-bold mb-2">2000₽</div>
              <p className="text-blue-200">за урок</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Все из базового",
                "90 минут",
                "Дополнительные материалы",
                "Онлайн поддержка"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-green-400 mr-3"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onBookingClick}
              className="w-full bg-white text-primary py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Выбрать план
            </button>
          </div>
          
          <div className="service-card">
            <div className="text-center mb-6">
              <h3 className="font-bold text-2xl mb-2">Премиум</h3>
              <div className="text-4xl font-bold text-primary mb-2">2500₽</div>
              <p className="text-gray-600">за урок</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Все из стандартного",
                "Пробные экзамены",
                "Психологическая подготовка",
                "Связь с родителями"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onBookingClick}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Выбрать план  
            </button>
          </div>
        </div>
        
        {/* Cost Calculator */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-bold text-2xl text-center mb-8">Калькулятор стоимости</h3>
          <div className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Тип занятия</label>
              <select 
                value={lessonType}
                onChange={(e) => setLessonType(parseInt(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value={1500}>Базовый (1500₽)</option>
                <option value={2000}>Стандартный (2000₽)</option>
                <option value={2500}>Премиум (2500₽)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Количество уроков</label>
              <input 
                type="number" 
                min="1" 
                max="50" 
                value={lessonCount}
                onChange={(e) => setLessonCount(parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Скидка за объем</label>
              <input 
                type="text" 
                value={discount}
                readOnly 
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div> 
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{totalCost.toLocaleString()}₽</div>
              <p className="text-sm text-gray-600">Итого</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
