import { Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface FairnessCalendarScreenProps {
  setShowFairness: Dispatch<SetStateAction<boolean>>;
  setShowSurvey: Dispatch<SetStateAction<boolean>>;
  setShowHappySurvey: Dispatch<SetStateAction<boolean>>;
  dayRating: 'happy' | 'problem' | null;
}

const FairnessCalendarScreen = ({ setShowFairness, setShowSurvey, setShowHappySurvey, dayRating }: FairnessCalendarScreenProps) => {
  const generateCalendarDays = () => {
    const days = [];
    const firstDayOfWeek = 6;
    const daysInMonth = 28;
    const currentDay = 17;
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ day: null, active: false, isToday: false, isRed: false, isHappy: false });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDay = i === currentDay;
      const isRatedRed = isCurrentDay && dayRating === 'problem';
      const isRatedGreen = isCurrentDay && dayRating === 'happy';
      
      days.push({ 
        day: i, 
        active: (i < currentDay) || isRatedGreen, 
        isToday: isCurrentDay && !dayRating,
        isRed: (i === 2 || i === 13) || isRatedRed,
        isHappy: isRatedGreen
      });
    }
    
    return days;
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pb-20">
      <div className="max-w-md mx-auto">
        <div className="px-4 pt-6 pb-4 flex items-center gap-4">
          <button onClick={() => setShowFairness(false)} className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
            <Icon name="ChevronLeft" size={24} />
          </button>
          <h1 className="text-xl font-semibold">календарь справедливости</h1>
        </div>

        <div className="px-4 py-6">
          <div className="text-center mb-6">
            <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 border border-gray-500/30 rounded-2xl p-4 mb-6">
              <p className="text-sm text-gray-200 leading-relaxed">
                Оценивайте нас каждый день: ваши отзывы помогают нам исправлять ошибки, и дарят вам бонусы. Если мы подвели - сразу вернем деньги за сутки
              </p>
            </div>
            
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
                      item.isRed
                        ? 'bg-red-500 text-white'
                        : item.active 
                        ? 'bg-green-500 text-white' 
                        : 'bg-[#2a2a2a] text-gray-400'
                    } ${item.isToday ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-[#1a1a1a]' : ''}`}>
                      {item.day}
                    </div>
                  ) : (
                    <div className="w-10 h-10"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Activity" size={24} className="text-white" />
                </div>
                <p className="text-sm text-gray-200 leading-snug">
                  Сегодня вы скачали <span className="font-bold text-white">2 ГБ</span> и разговаривали <span className="font-bold text-white">25 минут</span>. Билайн работал для вас <span className="font-bold text-white">24 часа</span>
                </p>
              </div>
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

          <div className="mt-4 px-4 space-y-3">
            <button 
              onClick={() => {
                setShowFairness(false);
                setShowHappySurvey(true);
              }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl text-lg font-semibold"
            >
              билайн порадовал
            </button>
            
            <button 
              onClick={() => {
                setShowFairness(false);
                setShowSurvey(true);
              }}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-2xl text-lg font-semibold"
            >сообщить о проблеме</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessCalendarScreen;