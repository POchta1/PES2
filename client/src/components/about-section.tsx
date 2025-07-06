export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-primary mb-6">Обо мне</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Меня зовут <span className="font-semibold text-primary">Анна Петрова</span>, и я помогаю ученикам 
            полюбить математику и достигать высоких результатов на экзаменах
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                alt="Анна Петрова - репетитор по математике" 
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-600">сдают на 80+</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-yellow-400 p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">9</div>
                <div className="text-sm text-primary">лет опыта</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-xl text-gray-800">Образование</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-university text-primary mr-3 mt-1"></i>
                  <span>МГУ им. М.В. Ломоносова, механико-математический факультет</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-medal text-yellow-500 mr-3 mt-1"></i>
                  <span>Диплом с отличием по специальности "Математика"</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-certificate text-green-500 mr-3 mt-1"></i>
                  <span>Курсы повышения квалификации по современным методикам</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-xl text-gray-800">Опыт работы</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-user-graduate text-primary mr-3 mt-1"></i>
                  <span>8 лет частного репетиторства</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-school text-accent mr-3 mt-1"></i>
                  <span>5 лет работы в ведущих образовательных центрах</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chart-line text-green-500 mr-3 mt-1"></i>
                  <span>Подготовил более 150 учеников к ЕГЭ и ОГЭ</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-2xl shadow-lg text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-lightbulb text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-xl">Моя методика</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Использую <span className="font-semibold">индивидуальный подход</span> к каждому ученику, 
                современные интерактивные методы и проверенные методики, которые делают изучение 
                математики <span className="font-semibold">увлекательным и эффективным</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
