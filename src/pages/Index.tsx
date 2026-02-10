import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showFairness, setShowFairness] = useState(false);
  const [showCompensation, setShowCompensation] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, active: false });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, active: i <= 7 });
    }
    
    return days;
  };

  const toggleReason = (reason: string) => {
    setSelectedReasons(prev => 
      prev.includes(reason) 
        ? prev.filter(r => r !== reason)
        : [...prev, reason]
    );
  };

  if (showFeedback) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-8">
            <button 
              onClick={() => setShowFeedback(false)} 
              className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <h1 className="text-xl font-semibold">справедливость связи</h1>
          </div>

          <div className="bg-[#2a2a2a] rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Успешно!</h2>
            
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 mb-6">
              <p className="text-white text-center font-medium leading-relaxed">
                На ваш счёт зачислено 20 бонусных рублей - именно столько вы заплатили за связь в прошлом месяце.
              </p>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Пожалуйста, уделите время и оставьте обратную связь: что именно Вам не понравилось в этом месяце?
            </p>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => toggleReason('quality')}
                className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                  selectedReasons.includes('quality') 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-gray-600'
                }`}>
                  {selectedReasons.includes('quality') && (
                    <Icon name="Check" size={16} className="text-white" />
                  )}
                </div>
                <span>Качество связи</span>
              </button>

              <button
                onClick={() => toggleReason('tariff')}
                className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                  selectedReasons.includes('tariff') 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-gray-600'
                }`}>
                  {selectedReasons.includes('tariff') && (
                    <Icon name="Check" size={16} className="text-white" />
                  )}
                </div>
                <span>Изменение условий тарифа</span>
              </button>

              <button
                onClick={() => toggleReason('support')}
                className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                  selectedReasons.includes('support') 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-gray-600'
                }`}>
                  {selectedReasons.includes('support') && (
                    <Icon name="Check" size={16} className="text-white" />
                  )}
                </div>
                <span>Работа сотрудника</span>
              </button>

              <button
                onClick={() => toggleReason('other')}
                className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                  selectedReasons.includes('other') 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-gray-600'
                }`}>
                  {selectedReasons.includes('other') && (
                    <Icon name="Check" size={16} className="text-white" />
                  )}
                </div>
                <span>Другое</span>
              </button>
            </div>

            <button 
              onClick={() => {
                setShowFeedback(false);
                setShowCompensation(false);
                setShowFairness(false);
                setSelectedReasons([]);
              }}
              className="w-full bg-white text-black py-4 rounded-2xl text-lg font-semibold"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showCompensation) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-8">
            <button 
              onClick={() => setShowCompensation(false)} 
              className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <h1 className="text-xl font-semibold">справедливость связи</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-[#2a2a2a] rounded-3xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Извините, что вас разочаровали!
              </h2>
              
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 mb-6">
                <p className="text-white text-center text-lg font-medium">
                  Хотите вернуть 20 бонусных рублей за эту ситуацию?
                </p>
              </div>

              <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed">
                После нажатия на кнопку на ваш счёт будет начислено 20 бонусных рублей.
              </p>

              <button 
                onClick={() => {
                  setShowCompensation(false);
                  setShowFeedback(true);
                }}
                className="w-full bg-white text-black py-4 rounded-2xl text-lg font-semibold mb-4"
              >
                Подтвердить
              </button>

              <p className="text-gray-400 text-xs text-center leading-relaxed">
                Осталось нажатий в этом году: 50 из 50
              </p>
            </div>

            <div className="bg-[#2a2a2a] rounded-3xl p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Сумма начисления равна стоимости дня в зависимости от вашей АП.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Бонусы могут быть использованы для оплаты услуг связи.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showFairness) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white pb-20">
        <div className="max-w-md mx-auto">
          <div className="px-4 pt-6 pb-4 flex items-center gap-4">
            <button onClick={() => setShowFairness(false)} className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
              <Icon name="ChevronLeft" size={24} />
            </button>
            <h1 className="text-xl font-semibold">справедливость связи</h1>
          </div>

          <div className="px-4 py-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Февраль 2026</h2>
              <div className="grid grid-cols-7 gap-2 text-xs text-gray-400 mb-4">
                <div>пн</div>
                <div>вт</div>
                <div>ср</div>
                <div>чт</div>
                <div>пт</div>
                <div>сб</div>
                <div>вс</div>
              </div>
              
              <div className="grid grid-cols-7 gap-3 mb-6">
                {generateCalendarDays().map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {item.day ? (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        item.active 
                          ? 'bg-green-500 text-white' 
                          : 'bg-[#2a2a2a] text-gray-400'
                      }`}>
                        {item.day}
                      </div>
                    ) : (
                      <div className="w-10 h-10"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <p className="text-sm text-gray-200 leading-snug">
                    Сегодня <span className="font-bold text-white">94%</span> пользователей оценили день как ценный
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 px-4">
              <button 
                onClick={() => {
                  setShowFairness(false);
                  setShowCompensation(true);
                }}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-2xl text-lg font-semibold"
              >
                билайн огорчил
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pb-20">
      <div className="max-w-md mx-auto">
        <div className="px-4 pt-3 pb-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <span>16:29</span>
            <Icon name="CheckCircle2" size={14} className="text-blue-400" />
            <span>•••</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="BellOff" size={14} />
            <Icon name="Wifi" size={14} />
            <div className="flex gap-0.5">
              <div className="w-1 h-3 bg-white rounded-sm" />
              <div className="w-1 h-3 bg-white rounded-sm" />
              <div className="w-1 h-3 bg-white rounded-sm" />
              <div className="w-1 h-3 bg-white/40 rounded-sm" />
            </div>
            <div className="px-1.5 py-0.5 bg-white/20 rounded text-[10px]">70</div>
          </div>
        </div>

        <div className="px-4 pb-4 grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent" />
              <span className="text-2xl font-bold relative z-10">Ai</span>
            </div>
            <span className="text-[10px] text-center leading-tight text-gray-400">с ИИ по душам</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center relative">
              <Icon name="MapPin" size={28} className="text-white" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full" />
            </div>
            <span className="text-[10px] text-center leading-tight text-gray-400">обновили «Локатор»</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center relative">
              <Icon name="Map" size={28} className="text-gray-700" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full" />
            </div>
            <span className="text-[10px] text-center leading-tight text-gray-400">что умеет «Локатор»</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center relative">
              <Icon name="MessageCircle" size={28} className="text-white" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full" />
            </div>
            <span className="text-[10px] text-center leading-tight text-gray-400">много сервисов</span>
          </div>
        </div>

        <div className="px-4 pb-3 flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
            <Icon name="User" size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
            <Icon name="Search" size={20} />
          </button>
          <div className="flex-1 bg-[#2a2a2a] rounded-full px-4 py-2.5 text-sm">
            +7 966 004 06 04
          </div>
          <button className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
            <Icon name="Plus" size={20} />
          </button>
        </div>

        <div className="px-4 pb-3">
          <div className="bg-[#2a2a2a] rounded-3xl p-5 flex items-center justify-between">
            <div className="text-3xl font-semibold">2 232 ₽</div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center">
                <Icon name="Plus" size={24} className="text-black" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 pb-3">
          <div className="bg-[#2a2a2a] rounded-3xl p-4 flex items-center justify-between">
            <span className="text-sm">подключить автоплатёж</span>
            <Icon name="RotateCw" size={32} className="text-gray-500" />
            <button className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>

        <div className="px-4 pb-3">
          <div className="bg-[#2a2a2a] rounded-3xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-lg font-medium">мой тариф</div>
                <div className="text-xs text-gray-400">03.03 спишем 700 ₽</div>
              </div>
              <Icon name="Settings" size={24} className="text-gray-400" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-2xl font-semibold">770,7 гб</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">133 мин</div>
              </div>
            </div>

            <div className="relative h-20 rounded-2xl overflow-hidden mb-4" 
                 style={{
                   backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
                   backgroundSize: '8px 8px'
                 }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                <span className="text-black text-lg font-bold">гб</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-3">
          <button 
            onClick={() => setShowFairness(true)}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-5 flex items-center justify-between"
          >
            <span className="text-lg font-semibold text-white">справедливость связи</span>
            <Icon name="ChevronRight" size={24} className="text-white" />
          </button>
        </div>

        <div className="px-4 pb-3">
          <div className="bg-[#2a2a2a] rounded-3xl p-5 flex items-center justify-between">
            <span className="text-sm">вместе в билайне</span>
            <Icon name="Users" size={24} className="text-gray-400" />
          </div>
        </div>

        <div className="flex justify-center gap-1 py-4">
          <div className="w-8 h-1 bg-white rounded-full" />
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800">
        <div className="max-w-md mx-auto px-8 py-3 flex justify-between items-center">
          <button 
            onClick={() => setActiveTab('menu')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'menu' ? 'text-white' : 'text-gray-500'}`}
          >
            <Icon name="Menu" size={24} />
          </button>
          
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-white' : 'text-gray-500'}`}
          >
            <Icon name="Home" size={24} />
            <span className="text-[10px]">главный</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('services')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'services' ? 'text-white' : 'text-gray-500'}`}
          >
            <Icon name="Grid3x3" size={24} />
            <span className="text-[10px]">сервисы</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('shop')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'shop' ? 'text-white' : 'text-gray-500'}`}
          >
            <Icon name="ShoppingBag" size={24} />
            <span className="text-[10px]">магазин</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'chat' ? 'text-white' : 'text-gray-500'}`}
          >
            <Icon name="MessageCircle" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;