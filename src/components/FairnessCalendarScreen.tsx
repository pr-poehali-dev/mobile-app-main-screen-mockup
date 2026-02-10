import { Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface FairnessCalendarScreenProps {
  setShowFairness: Dispatch<SetStateAction<boolean>>;
  setShowSurvey: Dispatch<SetStateAction<boolean>>;
  setShowHappy: Dispatch<SetStateAction<boolean>>;
}

const FairnessCalendarScreen = ({ setShowFairness, setShowSurvey, setShowHappy }: FairnessCalendarScreenProps) => {
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, active: false, isToday: false, isCrownDay: false });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, active: i <= 7, isToday: i === 8, isCrownDay: i === 28 });
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
                    <div className="relative">
                      {item.isCrownDay && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                          <Icon name="Crown" size={16} className="text-yellow-400" />
                        </div>
                      )}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium relative ${
                        item.active 
                          ? 'bg-green-500 text-white' 
                          : 'bg-[#2a2a2a] text-gray-400'
                      } ${item.isToday ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-[#1a1a1a]' : ''} ${
                        item.isCrownDay ? 'ring-2 ring-yellow-400' : ''
                      }`}>
                        {item.day}
                      </div>
                    </div>
                  ) : (
                    <div className="w-10 h-10"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Gift" size={24} className="text-white" />
                </div>
                <p className="text-sm text-gray-200 leading-snug">
                  До подарка осталось <span className="font-bold text-white">20</span> классных дней
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
                setShowHappy(true);
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
            >
              билайн огорчил
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessCalendarScreen;