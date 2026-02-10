import { Dispatch, SetStateAction } from 'react';
import Icon from '@/components/ui/icon';

interface MainScreenProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  setShowFairness: Dispatch<SetStateAction<boolean>>;
}

const MainScreen = ({ activeTab, setActiveTab, setShowFairness }: MainScreenProps) => {
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

export default MainScreen;
