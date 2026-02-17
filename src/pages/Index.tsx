import { useState } from 'react';
import MainScreen from '@/components/MainScreen';
import FairnessCalendarScreen from '@/components/FairnessCalendarScreen';
import DisappointmentSurvey from '@/components/DisappointmentSurvey';
import CompensationScreen from '@/components/CompensationScreen';
import FeedbackScreen from '@/components/FeedbackScreen';
import SuccessScreen from '@/components/SuccessScreen';
import HappyScreen from '@/components/HappyScreen';
import HappySurvey from '@/components/HappySurvey';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showFairness, setShowFairness] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [showCompensation, setShowCompensation] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHappy, setShowHappy] = useState(false);
  const [showHappySurvey, setShowHappySurvey] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [dayRating, setDayRating] = useState<'happy' | 'problem' | null>(null);

  const toggleReason = (reason: string) => {
    setSelectedReasons(prev => 
      prev.includes(reason) 
        ? prev.filter(r => r !== reason)
        : [...prev, reason]
    );
  };

  if (showHappy) {
    return (
      <HappyScreen
        setShowHappy={setShowHappy}
        setShowFairness={setShowFairness}
        setDayRating={setDayRating}
      />
    );
  }

  if (showHappySurvey) {
    return (
      <HappySurvey
        setShowHappySurvey={setShowHappySurvey}
        setShowHappy={setShowHappy}
      />
    );
  }

  if (showSuccess) {
    return (
      <SuccessScreen
        setShowSuccess={setShowSuccess}
        setShowFeedback={setShowFeedback}
        setShowCompensation={setShowCompensation}
        setShowFairness={setShowFairness}
        setSelectedReasons={setSelectedReasons}
        setDayRating={setDayRating}
      />
    );
  }

  if (showFeedback) {
    return (
      <FeedbackScreen
        selectedReasons={selectedReasons}
        toggleReason={toggleReason}
        setShowFeedback={setShowFeedback}
        setShowSuccess={setShowSuccess}
      />
    );
  }

  if (showCompensation) {
    return (
      <CompensationScreen
        setShowCompensation={setShowCompensation}
        setShowSuccess={setShowSuccess}
      />
    );
  }

  if (showSurvey) {
    return (
      <DisappointmentSurvey
        setShowSurvey={setShowSurvey}
        setShowCompensation={setShowCompensation}
      />
    );
  }

  if (showFairness) {
    return (
      <FairnessCalendarScreen
        setShowFairness={setShowFairness}
        setShowSurvey={setShowSurvey}
        setShowHappySurvey={setShowHappySurvey}
        dayRating={dayRating}
      />
    );
  }

  return (
    <MainScreen
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      setShowFairness={setShowFairness}
    />
  );
};

export default Index;