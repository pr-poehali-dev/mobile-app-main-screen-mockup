import { useState, Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface HappySurveyProps {
  setShowHappySurvey: Dispatch<SetStateAction<boolean>>;
  setShowHappy: Dispatch<SetStateAction<boolean>>;
}

const HappySurvey = ({ setShowHappySurvey, setShowHappy }: HappySurveyProps) => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [feedbackText, setFeedbackText] = useState('');

  const toggleReason = (reason: string) => {
    setSelectedReasons(prev => 
      prev.includes(reason) 
        ? prev.filter(i => i !== reason)
        : [...prev, reason]
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => setShowHappySurvey(false)} 
            className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <h1 className="text-xl font-semibold">справедливость связи</h1>
        </div>

        <div className="bg-[#2a2a2a] rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Что именно вас порадовало?
          </h2>
          
          <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
            Расскажите, что вам понравилось, чтобы мы делали еще больше хорошего
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
              <span>Выгодный тариф</span>
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
              <span>Отличная поддержка</span>
            </button>

            <button
              onClick={() => toggleReason('speed')}
              className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                selectedReasons.includes('speed') 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-600'
              }`}>
                {selectedReasons.includes('speed') && (
                  <Icon name="Check" size={16} className="text-white" />
                )}
              </div>
              <span>Быстрый интернет</span>
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
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Расскажите подробнее, что вам понравилось..."
              className="w-full bg-[#1a1a1a] text-white rounded-2xl p-4 min-h-[100px] resize-none placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button 
            onClick={() => {
              setShowHappySurvey(false);
              setShowHappy(true);
            }}
            disabled={selectedReasons.length === 0}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappySurvey;
