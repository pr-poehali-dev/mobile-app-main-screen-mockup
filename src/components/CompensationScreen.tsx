import { Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface CompensationScreenProps {
  setShowCompensation: Dispatch<SetStateAction<boolean>>;
  setShowFeedback: Dispatch<SetStateAction<boolean>>;
}

const CompensationScreen = ({ setShowCompensation, setShowFeedback }: CompensationScreenProps) => {
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
};

export default CompensationScreen;
