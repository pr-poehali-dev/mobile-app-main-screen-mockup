import { Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface HappyScreenProps {
  setShowHappy: Dispatch<SetStateAction<boolean>>;
  setShowFairness: Dispatch<SetStateAction<boolean>>;
  setDayRating: Dispatch<SetStateAction<'happy' | 'problem' | null>>;
}

const HappyScreen = ({ setShowHappy, setShowFairness, setDayRating }: HappyScreenProps) => {
  const handleGoToCalendar = () => {
    setDayRating('happy');
    setShowHappy(false);
    setShowFairness(true);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-[#2a2a2a] rounded-3xl p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Icon name="Heart" size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">
            Спасибо, мы стараемся для вас
          </h1>
          
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Ваша оценка важна для нас! Мы продолжим радовать вас качественным сервисом.
          </p>
          
          <button 
            onClick={handleGoToCalendar}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-semibold"
          >
            Вернуться к календарю
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappyScreen;