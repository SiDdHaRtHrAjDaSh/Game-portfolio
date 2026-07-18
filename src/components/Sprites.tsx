import React from 'react';

export const PlayerSprite = ({ state, direction }: { state: string, direction: number }) => {
  return (
    <div className="w-12 h-16 relative" style={{ transform: `scaleX(${direction})` }}>
      {/* Hat */}
      <div className="absolute top-0 left-2 w-8 h-3 bg-red-600 rounded-t-md border-2 border-black" />
      <div className="absolute top-2 left-4 w-7 h-2 bg-red-600 border-2 border-l-0 border-black border-t-0" />
      
      {/* Face */}
      <div className="absolute top-3 left-2 w-7 h-5 bg-[#ffcc99] rounded-sm border-2 border-black" />
      
      {/* Mustache */}
      <div className="absolute top-6 left-5 w-4 h-2 bg-black rounded-full" />
      
      {/* Eye */}
      <div className="absolute top-4 left-6 w-1 h-2 bg-black" />
      
      {/* Body */}
      <div className="absolute top-8 left-3 w-6 h-4 bg-red-600 border-x-2 border-black" />
      
      {/* Overalls */}
      <div className="absolute top-10 left-3 w-6 h-5 bg-blue-600 border-2 border-black" />
      
      {/* Buttons */}
      <div className="absolute top-11 left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
      <div className="absolute top-11 left-6 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
      
      {/* Arms */}
      <div className={`absolute top-8 ${state === 'run' ? '-left-0' : 'left-1'} w-3 h-5 bg-red-600 border-2 border-black origin-top transition-transform ${state === 'run' ? 'rotate-12' : ''}`} />
      <div className={`absolute top-8 ${state === 'run' ? 'left-9' : 'left-8'} w-3 h-5 bg-red-600 border-2 border-black origin-top transition-transform ${state === 'run' ? '-rotate-12' : ''}`} />
      
      {/* Legs */}
      <div className={`absolute top-[60px] left-3 w-3 h-3 bg-blue-800 border-2 border-black ${state === 'run' ? '-translate-y-1' : ''}`} />
      <div className={`absolute top-[60px] left-6 w-3 h-3 bg-blue-800 border-2 border-black ${state === 'jump' ? '-translate-y-3' : ''}`} />
    </div>
  );
};

export const Cloud = ({ x, y, scale = 1 }: { x: number, y: number, scale?: number }) => (
  <div className="absolute opacity-90" style={{ left: x, top: y, transform: `scale(${scale})` }}>
    <div className="w-16 h-16 bg-white rounded-full absolute -top-8 left-4 shadow-sm" />
    <div className="w-12 h-12 bg-white rounded-full absolute -top-4 left-14 shadow-sm" />
    <div className="w-24 h-8 bg-white rounded-full shadow-sm" />
  </div>
);

export const CoinSprite = () => (
  <div className="w-6 h-8 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center animate-bounce shadow-[inset_-2px_0_0_rgba(180,100,0,1)]">
    <div className="w-1.5 h-4 bg-yellow-600 rounded-full" />
  </div>
);

export const FloatingBrick = () => (
  <div className="w-full h-full bg-[#cc4c00] border-2 border-black relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black"></div>
    <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-black"></div>
    <div className="absolute bottom-0 left-1/4 w-[2px] h-1/2 bg-black"></div>
    <div className="absolute bottom-0 right-1/4 w-[2px] h-1/2 bg-black"></div>
  </div>
);

export const QuestionBlock = () => (
   <div className="w-full h-full bg-[#f8b800] border-2 border-black flex items-center justify-center shadow-[inset_-2px_-2px_0_0_#b06000,inset_2px_2px_0_0_#fcf8e8]">
      <span className="pixel-text text-black text-sm drop-shadow-[1px_1px_0_#fff]">?</span>
   </div>
);

export const FlagSprite = () => (
  <div className="relative w-12 h-[300px]">
    <div className="absolute left-4 w-4 h-full bg-green-500 border-2 border-black shadow-[inset_-2px_0_0_rgba(0,100,0,1)]" />
    <div className="absolute top-2 left-8 w-16 h-12 bg-green-500 border-2 border-black rounded-r-md flex items-center justify-center shadow-lg">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-black">
        <div className="w-4 h-4 bg-red-500 rounded-full" />
      </div>
    </div>
    <div className="absolute top-0 left-2 w-8 h-8 bg-green-600 rounded-full border-2 border-black" />
    <div className="absolute bottom-0 left-0 w-12 h-6 bg-gray-400 border-2 border-black rounded-t-md shadow-[inset_-2px_-2px_0_rgba(100,100,100,1)]" />
  </div>
);

export const MushroomSprite = () => (
  <div className="w-8 h-8 relative shadow-lg">
    <div className="absolute top-0 left-0 w-8 h-5 bg-red-500 rounded-t-full border-2 border-black z-10 overflow-hidden shadow-[inset_-2px_-2px_0_rgba(150,0,0,1)]">
        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
        <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
        <div className="absolute -top-1 left-3 w-3 h-3 bg-white rounded-full" />
    </div>
    <div className="absolute bottom-0 left-1 w-6 h-4 bg-[#ffcc99] border-2 border-t-0 border-black rounded-b-md shadow-[inset_-2px_-2px_0_rgba(200,150,100,1)]">
        <div className="absolute top-1 left-1 w-1 h-2 bg-black rounded-full" />
        <div className="absolute top-1 right-1 w-1 h-2 bg-black rounded-full" />
    </div>
  </div>
);

export const Bush = ({ x, y }: { x: number, y: number }) => (
  <div className="absolute bottom-16 z-10" style={{ left: x }}>
    <div className="w-16 h-16 bg-green-500 rounded-full absolute -top-8 left-2 border-4 border-black" />
    <div className="w-12 h-12 bg-green-500 rounded-full absolute -top-6 left-12 border-4 border-black" />
    <div className="w-24 h-10 bg-green-500 rounded-t-full border-4 border-b-0 border-black" />
    <div className="w-24 h-4 bg-green-500 absolute bottom-0" />
  </div>
);
