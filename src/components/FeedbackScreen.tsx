import { Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface FeedbackScreenProps {
  selectedReasons: string[];
  toggleReason: (reason: string) => void;
  setShowFeedback: Dispatch<SetStateAction<boolean>>;
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}

const FeedbackScreen = ({ selectedReasons, toggleReason, setShowFeedback, setShowSuccess }: FeedbackScreenProps) => {
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

          <div className="mb-6">
            <textarea
              placeholder="Расскажите подробнее, что вас огорчило..."
              className="w-full bg-[#1a1a1a] text-white rounded-2xl p-4 min-h-[120px] resize-none placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button 
            onClick={() => {
              setShowFeedback(false);
              setShowSuccess(true);
            }}
            className="w-full bg-white text-black py-4 rounded-2xl text-lg font-semibold"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackScreen;