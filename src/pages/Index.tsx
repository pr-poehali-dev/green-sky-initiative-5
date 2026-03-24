import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            FEFY<span className="text-red-600">.</span>
          </a>
          <div className="flex space-x-8">
            <a href="#features" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Функции
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О проекте
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <div className="text-sm uppercase tracking-widest text-red-600 mb-4">ДВФУ · Владивосток</div>
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              FEFY
              <br />
              GUIDE
            </h1>
            <p className="text-xl max-w-xl">
              Единый помощник для иностранных студентов ДВФУ. Карта кампуса, инструкции, словарь фраз и чат-бот — на вашем родном языке.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 border border-black px-4 py-2">
                <Icon name="Globe" size={16} />
                <span className="text-sm tracking-widest">5 языков</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2">
                <Icon name="Smartphone" size={16} />
                <span className="text-sm tracking-widest">iOS & Android</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2">
                <Icon name="Bot" size={16} />
                <span className="text-sm tracking-widest">AI-чат</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold tracking-tighter mb-2">中</div>
                <div className="text-4xl font-bold tracking-tighter mb-2">한국어</div>
                <div className="text-4xl font-bold tracking-tighter mb-2">Tiếng Việt</div>
                <div className="text-3xl font-bold tracking-tighter">English</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages strip */}
      <section className="py-6 bg-black text-white overflow-hidden">
        <div className="flex space-x-12 px-8 items-center">
          {['中文', 'TIẾNG VIỆT', '한국어', 'ENGLISH', 'РУССКИЙ', '中文', 'TIẾNG VIỆT', '한국어', 'ENGLISH', 'РУССКИЙ'].map((lang, i) => (
            <span key={i} className="text-sm uppercase tracking-widest whitespace-nowrap text-neutral-400">
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ФУНКЦИИ</h2>
          <p className="text-neutral-400 mb-12 max-w-xl">Всё необходимое для комфортной жизни и учёбы в одном приложении</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="Map" size={48} className="text-black group-hover:text-white transition-colors duration-300 mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors duration-300">01</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Карта кампуса</h3>
              <p className="text-neutral-400">Интерактивная карта всех зданий ДВФУ с маршрутами, контактами и расписанием работы на вашем языке</p>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="BookOpen" size={48} className="text-black group-hover:text-white transition-colors duration-300 mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors duration-300">02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Пошаговые инструкции</h3>
              <p className="text-neutral-400">Документы, учёба, быт, культура — чёткие инструкции по каждому вопросу: виза, регистрация, ОМС, расписание</p>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="MessageCircle" size={48} className="text-black group-hover:text-white transition-colors duration-300 mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors duration-300">03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Словарь фраз</h3>
              <p className="text-neutral-400">Разговорник для поликлиники, банка, деканата с транскрипцией и аудиопроизношением каждой фразы</p>
            </div>

            {/* Feature 4 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="Bot" size={48} className="text-black group-hover:text-white transition-colors duration-300 mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors duration-300">04</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-чат-бот 24/7</h3>
              <p className="text-neutral-400">Виртуальный помощник отвечает на вопросы на родном языке круглосуточно и при необходимости соединяет с отделом</p>
            </div>

            {/* Feature 5 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="CalendarDays" size={48} className="text-black group-hover:text-white transition-colors duration-300 mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors duration-300">05</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Культурный календарь</h3>
              <p className="text-neutral-400">Российские праздники и мероприятия ДВФУ с пояснениями традиций и push-уведомлениями о важных датах</p>
            </div>

            {/* Feature 6 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="AlertTriangle" size={48} className="text-black group-hover:text-white transition-colors duration-300 mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors duration-300">06</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Экстренная помощь</h3>
              <p className="text-neutral-400">Номера экстренных служб, шаблоны фраз на русском с транскрипцией и алгоритмы действий — в один клик</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О ПРОЕКТЕ</h2>
              <div className="aspect-[4/5] bg-black relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="text-center text-white px-8">
                  <div className="text-7xl font-bold text-red-600 mb-4">ДВФУ</div>
                  <div className="text-sm uppercase tracking-widest text-neutral-400">Дальневосточный федеральный университет</div>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                    <div>
                      <div className="text-3xl font-bold">5</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">языков</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">7+</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">разделов</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">поддержка</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">2</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">платформы</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-red-600 opacity-30 pointer-events-none"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                FEFY Guide — мобильное приложение, которое устраняет языковой барьер для иностранных студентов ДВФУ. Один источник достоверной информации на родном языке.
              </p>
              <p className="mb-6">
                Иностранному студенту приходится решать сотни бытовых и административных вопросов в незнакомой стране. FEFY Guide объединяет карту кампуса, пошаговые инструкции, разговорник, FAQ и культурный календарь в едином приложении.
              </p>
              <p className="mb-6">
                Поддержка пяти языков — китайского, вьетнамского, корейского, английского и русского — позволяет каждому студенту получить помощь без языкового барьера.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Разделы</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />Карта кампуса</li>
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />Инструкции</li>
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />FAQ</li>
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />Контакты ДВФУ</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Технологии</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />React Native</li>
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />iOS & Android</li>
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />AI чат-бот</li>
                    <li className="flex items-center gap-2"><Icon name="ChevronRight" size={14} className="text-red-600" />Push-уведомления</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-5xl font-bold tracking-tighter">ЧАСТО ЗАДАЮТ</h2>
              <div className="w-16 h-1 bg-red-600 mt-4 mb-6"></div>
              <p className="text-neutral-600">Ответы на популярные вопросы из базы знаний приложения</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-4">
                {[
                  { q: 'Как продлить визу?', cat: 'Документы' },
                  { q: 'Где находится деканат моего факультета?', cat: 'Карта' },
                  { q: 'Как заселиться в общежитие?', cat: 'Быт' },
                  { q: 'Как вызвать скорую помощь?', cat: 'Экстренная помощь' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-black py-4 group cursor-pointer hover:pl-2 transition-all">
                    <div className="flex items-center gap-4">
                      <span className="text-xs uppercase tracking-widest text-red-600 w-32 shrink-0">{item.cat}</span>
                      <span className="font-medium">{item.q}</span>
                    </div>
                    <Icon name="ArrowRight" size={16} className="text-neutral-400 group-hover:text-red-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Есть вопросы по приложению или хотите предложить улучшение? Пишите команде FEFY Guide.</p>
              <div className="space-y-4">
                <p className="flex items-start gap-4">
                  <Icon name="Mail" size={18} className="mt-0.5 shrink-0" />
                  <a href="mailto:hello@fefy.guide" className="hover:underline">
                    hello@fefy.guide
                  </a>
                </p>
                <p className="flex items-start gap-4">
                  <Icon name="MapPin" size={18} className="mt-0.5 shrink-0" />
                  <span>ДВФУ, о. Русский, Владивосток</span>
                </p>
                <p className="flex items-start gap-4">
                  <Icon name="Globe" size={18} className="mt-0.5 shrink-0" />
                  <span>Отдел по работе с иностранными студентами</span>
                </p>
              </div>
              <div className="mt-12">
                <h3 className="text-sm uppercase tracking-widest mb-4">Языки поддержки</h3>
                <div className="flex flex-wrap gap-3">
                  {['中文', 'Tiếng Việt', '한국어', 'English', 'Русский'].map((lang) => (
                    <span key={lang} className="border border-white px-3 py-1 text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="Ваш вопрос или предложение"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold tracking-tighter">
            FEFY<span className="text-red-600">.</span>GUIDE
          </span>
          <span className="text-sm text-neutral-400 uppercase tracking-widest">
            ДВФУ · Владивосток · {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
}
