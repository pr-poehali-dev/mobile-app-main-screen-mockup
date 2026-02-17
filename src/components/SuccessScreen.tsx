import { Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface SuccessScreenProps {
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
  setShowFeedback: Dispatch<SetStateAction<boolean>>;
  setShowCompensation: Dispatch<SetStateAction<boolean>>;
  setShowFairness: Dispatch<SetStateAction<boolean>>;
  setSelectedReasons: Dispatch<SetStateAction<string[]>>;
  setDayRating: Dispatch<SetStateAction<'happy' | 'problem' | null>>;
}

const SuccessScreen = ({ 
  setShowSuccess, 
  setShowFeedback, 
  setShowCompensation, 
  setShowFairness, 
  setSelectedReasons,
  setDayRating
}: SuccessScreenProps) => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-[#2a2a2a] rounded-3xl p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6">
            <Icon name="Check" size={40} className="text-white" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Спасибо за обратную связь!</h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Мы обязательно учтём её, чтобы стать лучше для вас и свяжемся с вами при необходимости
          </p>

          <button 
            onClick={() => {
              setDayRating('problem');
              setShowSuccess(false);
              setShowFeedback(false);
              setShowCompensation(false);
              setShowFairness(true);
              setSelectedReasons([]);
            }}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-2xl text-lg font-semibold"
          >
            Вернуться к календарю
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;