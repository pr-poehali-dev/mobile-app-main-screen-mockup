import { useState, Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface DisappointmentSurveyProps {
  setShowSurvey: Dispatch<SetStateAction<boolean>>;
  setShowCompensation: Dispatch<SetStateAction<boolean>>;
}

const DisappointmentSurvey = ({ setShowSurvey, setShowCompensation }: DisappointmentSurveyProps) => {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [feedbackText, setFeedbackText] = useState('');

  const toggleIssue = (issue: string) => {
    setSelectedIssues(prev => 
      prev.includes(issue) 
        ? prev.filter(i => i !== issue)
        : [...prev, issue]
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => setShowSurvey(false)} 
            className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <h1 className="text-xl font-semibold">справедливость связи</h1>
        </div>

        <div className="bg-[#2a2a2a] rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Что именно вас огорчило?
          </h2>
          
          <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
            Пожалуйста, выберите причину, чтобы мы могли вернуть вам бонусы
          </p>

          <div className="space-y-3 mb-6">
            <button
              onClick={() => toggleIssue('quality')}
              className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                selectedIssues.includes('quality') 
                  ? 'bg-red-500 border-red-500' 
                  : 'border-gray-600'
              }`}>
                {selectedIssues.includes('quality') && (
                  <Icon name="Check" size={16} className="text-white" />
                )}
              </div>
              <span>Качество связи</span>
            </button>

            <button
              onClick={() => toggleIssue('tariff')}
              className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                selectedIssues.includes('tariff') 
                  ? 'bg-red-500 border-red-500' 
                  : 'border-gray-600'
              }`}>
                {selectedIssues.includes('tariff') && (
                  <Icon name="Check" size={16} className="text-white" />
                )}
              </div>
              <span>Наполнение тарифа</span>
            </button>

            <button
              onClick={() => toggleIssue('support')}
              className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                selectedIssues.includes('support') 
                  ? 'bg-red-500 border-red-500' 
                  : 'border-gray-600'
              }`}>
                {selectedIssues.includes('support') && (
                  <Icon name="Check" size={16} className="text-white" />
                )}
              </div>
              <span>Работа сотрудника поддержки</span>
            </button>

            <button
              onClick={() => toggleIssue('speed')}
              className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                selectedIssues.includes('speed') 
                  ? 'bg-red-500 border-red-500' 
                  : 'border-gray-600'
              }`}>
                {selectedIssues.includes('speed') && (
                  <Icon name="Check" size={16} className="text-white" />
                )}
              </div>
              <span>Скорость интернета</span>
            </button>

            <button
              onClick={() => toggleIssue('other')}
              className="w-full flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-2xl text-left"
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                selectedIssues.includes('other') 
                  ? 'bg-red-500 border-red-500' 
                  : 'border-gray-600'
              }`}>
                {selectedIssues.includes('other') && (
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
              placeholder="Расскажите подробнее, что произошло..."
              className="w-full bg-[#1a1a1a] text-white rounded-2xl p-4 min-h-[100px] resize-none placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button 
            onClick={() => {
              setShowSurvey(false);
              setShowCompensation(true);
            }}
            disabled={selectedIssues.length === 0}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-2xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisappointmentSurvey;