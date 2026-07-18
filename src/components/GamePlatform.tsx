import React, { useEffect, useRef, useState } from 'react';
import { PlayerSprite, Cloud, Bush, CoinSprite, FlagSprite, MushroomSprite, FloatingBrick, QuestionBlock } from './Sprites';
import { resumeData } from '../data';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export const pipes = [
  { id: 'experience', x: 400, w: 90, h: 140, label: "Experience" },
  { id: 'projects', x: 800, w: 90, h: 200, label: "Projects" },
  { id: 'skills', x: 1200, w: 90, h: 120, label: "Skills" },
  { id: 'education', x: 1600, w: 90, h: 180, label: "Education" },
  { id: 'extracurriculars', x: 2000, w: 90, h: 150, label: "Extracurriculars" },
];

const initialBlocks = [
  { id: 1, type: 'brick', x: 282, y: 120, w: 32, h: 32, hit: false, broken: false },
  { id: 2, type: 'question', item: 'mushroom', x: 314, y: 120, w: 32, h: 32, hit: false, broken: false },
  { id: 3, type: 'brick', x: 346, y: 120, w: 32, h: 32, hit: false, broken: false },
  { id: 4, type: 'question', item: 'coin', x: 600, y: 180, w: 32, h: 32, hit: false, broken: false },
  { id: 5, type: 'brick', x: 632, y: 180, w: 32, h: 32, hit: false, broken: false },
  { id: 6, type: 'question', item: 'coin', x: 664, y: 180, w: 32, h: 32, hit: false, broken: false },
  { id: 7, type: 'brick', x: 1000, y: 120, w: 32, h: 32, hit: false, broken: false },
  { id: 8, type: 'question', item: 'coin', x: 1400, y: 160, w: 32, h: 32, hit: false, broken: false },
];

const initialMushrooms = [
  { id: 2, x: 314, y: 152, w: 32, h: 32, active: false, collected: false, vx: 100, vy: 0 }
];

const initialCoins = [
  { id: 1, x: 250, y: 60, collected: false },
  { id: 2, x: 300, y: 60, collected: false },
  { id: 3, x: 600, y: 60, collected: false },
  { id: 4, x: 650, y: 60, collected: false },
  { id: 5, x: 700, y: 60, collected: false },
  { id: 6, x: 1000, y: 60, collected: false },
  { id: 7, x: 1050, y: 60, collected: false },
  { id: 8, x: 1400, y: 60, collected: false },
  { id: 9, x: 1450, y: 60, collected: false },
  { id: 10, x: 1800, y: 60, collected: false },
  { id: 11, x: 1850, y: 60, collected: false },
  { id: 12, x: 2200, y: 60, collected: false },
];

function intersect(a: any, b: any) {
  return a.x < b.x + b.w &&
         a.x + a.w > b.x &&
         a.y < b.y + b.h &&
         a.y + a.h > b.y;
}

export function GamePlatform({ onOpenSection, onSimpleMode }: { onOpenSection: (id: string) => void, onSimpleMode: () => void }) {
  const playerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const isEnteringPipeRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playerAnimState, setPlayerAnimState] = useState('idle');
  const [playerDir, setPlayerDir] = useState(1);
  const [score, setScore] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const activePipeRef = useRef<string | null>(null);
  const coinsRef = useRef(initialCoins);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      if (!isMuted) {
        audioRef.current.play().catch(e => console.error(e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  useEffect(() => {
    let lastTime = performance.now();
    let animationFrameId: number;

    const player = {
      x: 100, y: 0, w: 48, h: 64, vx: 0, vy: 0,
      isGrounded: false, onPipe: null as any,
      isSuper: false
    };

    const keys = { left: false, right: false, up: false, down: false };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') keys.left = true;
      if (e.code === 'ArrowRight') keys.right = true;
      if (e.code === 'ArrowUp' || e.code === 'Space') keys.up = true;
      if (e.code === 'ArrowDown') keys.down = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') keys.left = false;
      if (e.code === 'ArrowRight') keys.right = false;
      if (e.code === 'ArrowUp' || e.code === 'Space') keys.up = false;
      if (e.code === 'ArrowDown') keys.down = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Provide a way to release the pipe entry
    const releasePipe = () => {
       if (activePipeRef.current) {
          isEnteringPipeRef.current = false;
          const p = pipes.find(pipe => pipe.id === activePipeRef.current);
          if (p) {
             player.y = p.h; // reset to top of pipe
             player.vy = 0;
          }
          activePipeRef.current = null;
       }
    };
    // Expose this method to the window so the parent can call it when modal closes
    (window as any).releasePlayerFromPipe = releasePipe;

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isEnteringPipeRef.current) {
        // Handle input
        const speed = 400;
        let newState = 'idle';
        if (keys.left) { player.vx = -speed; newState = 'run'; setPlayerDir(-1); }
        else if (keys.right) { player.vx = speed; newState = 'run'; setPlayerDir(1); }
        else { player.vx = 0; newState = 'idle'; }

        if (keys.up && player.isGrounded) {
          player.vy = 1400; // Jump force
          player.isGrounded = false;
          player.onPipe = null;
        }

        // Pipe entry
        if (keys.down && player.isGrounded && player.onPipe) {
          const pipeCenter = player.onPipe.x + player.onPipe.w / 2;
          const playerCenter = player.x + player.w / 2;
          // Require player to be roughly centered on the pipe
          if (Math.abs(pipeCenter - playerCenter) < 30) {
            isEnteringPipeRef.current = true;
            activePipeRef.current = player.onPipe.id;
            player.x = player.onPipe.x + player.onPipe.w/2 - player.w/2;
            player.vx = 0;
            player.vy = -150; // Slowly sink down
            
            setTimeout(() => {
              onOpenSection(player.onPipe.id);
            }, 800);
          }
        }
        
        if (!player.isGrounded) {
           newState = 'jump';
        }

        setPlayerAnimState(newState);

        // Physics integration
        const GRAVITY = 3000;
        player.vy -= GRAVITY * dt;
        player.x += player.vx * dt;

        // X Collisions boundaries
        if (player.x < 0) player.x = 0;
        
        // Flag collision
        const flagRect = { x: 2360, y: 0, w: 20, h: 300 };
        if (intersect(player, flagRect)) {
            player.x = 100;
            player.y = 0;
            player.vx = 0;
            player.vy = 0;
            setScore(s => s + 5000);
            
            // Reset everything simply
            player.isSuper = false;
            player.w = 48;
            player.h = 64;
            document.getElementById('mario-player-sprite')?.classList.remove('scale-[1.5]', 'origin-bottom');
        }

        for (const p of pipes) {
          const pipeRect = { x: p.x, y: 0, w: p.w, h: p.h };
          if (intersect(player, pipeRect)) {
            if (player.vx > 0) player.x = pipeRect.x - player.w;
            else if (player.vx < 0) player.x = pipeRect.x + pipeRect.w;
            player.vx = 0;
          }
        }

        for (const b of initialBlocks) {
           if (b.broken) continue;
           const blockRect = { x: b.x, y: b.y, w: b.w, h: b.h };
           if (intersect(player, blockRect)) {
               // Ignore X collision if player is primarily above or below
               if (player.y < blockRect.y + blockRect.h - 10 && player.y + player.h > blockRect.y + 10) {
                   if (player.vx > 0) player.x = blockRect.x - player.w;
                   else if (player.vx < 0) player.x = blockRect.x + blockRect.w;
                   player.vx = 0;
               }
           }
        }

        player.y += player.vy * dt;

        // Collect coins
        for (const c of coinsRef.current) {
          if (!c.collected) {
            const coinRect = { x: c.x, y: c.y, w: 24, h: 32 };
            if (intersect(player, coinRect)) {
              c.collected = true;
              setScore(s => s + 100);
              const el = document.getElementById(`coin-${c.id}`);
              if (el) el.style.display = 'none';
              
              const pt = document.createElement('div');
              pt.className = 'absolute pixel-text text-white text-[10px] z-50 pointer-events-none transition-all duration-500 ease-out';
              pt.innerText = '100';
              pt.style.left = `${c.x}px`;
              pt.style.bottom = `${64 + c.y + 40}px`;
              cameraRef.current?.appendChild(pt);
              
              requestAnimationFrame(() => {
                pt.style.bottom = `${64 + c.y + 80}px`;
                pt.style.opacity = '0';
              });

              setTimeout(() => pt.remove(), 500);
            }
          }
        }

        // Y Collisions
        player.isGrounded = false;
        player.onPipe = null;

        if (player.y <= 0) {
          player.y = 0;
          player.vy = 0;
          player.isGrounded = true;
        }

        for (const p of pipes) {
          const pipeRect = { x: p.x, y: 0, w: p.w, h: p.h };
          if (intersect(player, pipeRect)) {
            if (player.vy < 0) { // falling down
              player.y = pipeRect.h;
              player.vy = 0;
              player.isGrounded = true;
              player.onPipe = p;
            } else if (player.vy > 0) { // jumping up hitting bottom? Pipes are on the ground so you can't hit bottom.
              player.y = pipeRect.y - player.h;
              player.vy = 0;
            }
          }
        }

        for (const b of initialBlocks) {
            if (b.broken) continue;
            const blockRect = { x: b.x, y: b.y, w: b.w, h: b.h };
            if (intersect(player, blockRect)) {
                if (player.vy < 0) { // Falling onto block
                    player.y = blockRect.y + blockRect.h;
                    player.vy = 0;
                    player.isGrounded = true;
                } else if (player.vy > 0) { // Hitting from below
                    player.y = blockRect.y - player.h;
                    player.vy = -100;
                    if (!b.hit) {
                        b.hit = true;
                        const el = document.getElementById(`block-${b.id}`);
                        if (el) el.style.transform = 'translateY(-8px)';
                        setTimeout(() => { if (el) el.style.transform = 'translateY(0)'; }, 100);

                        if (b.type === 'brick') {
                            if (player.isSuper) {
                                b.broken = true;
                                if (el) el.style.display = 'none';
                                setScore(s => s + 50);
                            }
                        } else if (b.type === 'question') {
                            if (el) {
                                el.style.backgroundColor = '#8c5c3c'; // empty block color
                                el.innerHTML = ''; 
                            }
                            if (b.item === 'mushroom') {
                                const m = initialMushrooms.find(m => m.id === b.id);
                                if (m) {
                                   m.active = true;
                                   m.vy = 600;
                                   const mel = document.getElementById(`mushroom-${m.id}`);
                                   if (mel) mel.style.display = 'block';
                                }
                            } else if (b.item === 'coin') {
                                setScore(s => s + 100);
                            }
                        }
                    }
                }
            }
        }

        // Mushroom logic
        for (const m of initialMushrooms) {
            if (m.active && !m.collected) {
                m.vy -= GRAVITY * dt;
                m.x += m.vx * dt;
                m.y += m.vy * dt;

                if (m.y <= 0) {
                    m.y = 0;
                    m.vy = 0;
                }

                for (const p of pipes) {
                    const pipeRect = { x: p.x, y: 0, w: p.w, h: p.h };
                    if (intersect({x: m.x, y: m.y, w: m.w, h: m.h}, pipeRect)) {
                        if (m.x < pipeRect.x) { m.x = pipeRect.x - m.w; m.vx = -m.vx; }
                        else if (m.x > pipeRect.x) { m.x = pipeRect.x + pipeRect.w; m.vx = -m.vx; }
                    }
                }

                if (intersect(player, {x: m.x, y: m.y, w: m.w, h: m.h})) {
                    m.collected = true;
                    setScore(s => s + 1000);
                    player.isSuper = true;
                    player.h = 96;
                    player.w = 56;
                    document.getElementById('mario-player-sprite')?.classList.add('scale-[1.5]', 'origin-bottom');
                    const mel = document.getElementById(`mushroom-${m.id}`);
                    if (mel) mel.style.display = 'none';
                }

                const mel = document.getElementById(`mushroom-${m.id}`);
                if (mel) mel.style.transform = `translate(${m.x}px, ${-m.y}px)`;
            }
        }

      } else {
         // Entering pipe animation
         player.y -= 150 * dt;
      }

      // Update DOM directly for smooth 60fps rendering without React overhead
      if (playerRef.current) {
        playerRef.current.style.transform = `translate(${player.x}px, ${-player.y}px)`;
      }
      
      if (cameraRef.current) {
        let cx = player.x - window.innerWidth / 2 + player.w / 2;
        cx = Math.max(0, Math.min(cx, 2500 - window.innerWidth));
        cameraRef.current.style.transform = `translateX(${-cx}px)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onOpenSection]);

  return (
    <div className="w-full h-full overflow-hidden bg-[#5c94fc] relative select-none font-sans">
      <audio ref={audioRef} src="https://archive.org/download/super-mario-bros-theme-song/Super%20Mario%20Bros.%20Theme%20Song.mp3" loop />
      
      {/* Top HUD Bar */}
      <div className="fixed top-0 left-0 w-full p-6 sm:p-8 flex justify-between items-start z-50">
        <div className="text-white pixel-text">
          <div className="text-base sm:text-xl mb-3">{resumeData.header.name.toUpperCase()}</div>
          <div className="text-[8px] sm:text-[10px] flex gap-4 pointer-events-auto">
            <a href={resumeData.header.github} target="_blank" rel="noreferrer" className="hover:text-yellow-400">GITHUB</a>
            <a href={resumeData.header.linkedin} target="_blank" rel="noreferrer" className="hover:text-yellow-400">LINKEDIN</a>
            <a href={`mailto:${resumeData.header.contact.split(' | ')[1]}`} className="hover:text-yellow-400">EMAIL</a>
          </div>
          <button 
             onClick={(e) => { e.currentTarget.blur(); onSimpleMode(); }}
             className="mt-4 pointer-events-auto bg-white text-black px-4 py-2 text-[10px] sm:text-xs rounded border-2 border-black hover:bg-yellow-400 hover:text-black transition-colors"
          >
            SIMPLE MODE
          </button>
        </div>
        <div className="text-white pixel-text text-center hidden sm:block pointer-events-none">
          <div className="text-base sm:text-xl text-yellow-300 mb-2">WORLD</div>
          <div className="text-base sm:text-xl">1-1</div>
        </div>
        <div className="text-white pixel-text text-right flex flex-col items-end">
          <div className="text-base sm:text-xl mb-2 pointer-events-none">SCORE</div>
          <div className="text-base sm:text-xl pointer-events-none mb-4">{score.toString().padStart(6, '0')}</div>
          
          <button 
            onClick={() => setIsMuted(!isMuted)} 
            className="pointer-events-auto bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
          >
            {isMuted ? <FaVolumeMute className="text-white" /> : <FaVolumeUp className="text-white" />}
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="fixed top-28 left-1/2 -translate-x-1/2 bg-[#0000a8] text-white p-4 sm:p-6 rounded-md pixel-text text-[10px] sm:text-xs border-4 border-white shadow-[8px_8px_0_rgba(0,0,0,0.8)] z-40 text-center flex flex-col gap-4 whitespace-nowrap pointer-events-none">
        <p>USE <span className="text-yellow-400">← →</span> TO MOVE</p>
        <p>PRESS <span className="text-yellow-400">SPACE</span> TO JUMP</p>
        <p>PRESS <span className="text-red-400">DOWN (↓)</span> ON PIPE</p>
      </div>

      <div ref={cameraRef} className="absolute top-0 left-0 w-[2500px] h-full will-change-transform">
        
        {/* Background Scenery */}
        <Cloud x={300} y={100} scale={1.2} />
        <Cloud x={800} y={150} scale={0.8} />
        <Cloud x={1500} y={80} scale={1.5} />
        <Cloud x={2200} y={120} scale={1} />

        <Bush x={400} y={64} />
        <Bush x={1000} y={64} />
        <Bush x={1800} y={64} />
        <Bush x={2400} y={64} />

        {/* Coins */}
        {initialCoins.map(c => (
          <div 
            key={c.id} 
            id={`coin-${c.id}`}
            className="absolute z-20 will-change-transform"
            style={{ left: c.x, bottom: 64 + c.y }}
          >
            <CoinSprite />
          </div>
        ))}

        <div className="absolute z-10 bottom-16" style={{ left: 2360 }}>
          <FlagSprite />
        </div>

        {/* Mushrooms */}
        {initialMushrooms.map(m => (
          <div 
            key={m.id} 
            id={`mushroom-${m.id}`}
            className="absolute z-10 will-change-transform"
            style={{ left: m.x, bottom: 64 + m.y, width: m.w, height: m.h, display: m.active && !m.collected ? 'block' : 'none' }}
          >
            <MushroomSprite />
          </div>
        ))}

        {/* Blocks */}
        {initialBlocks.map(b => (
          <div 
            key={b.id} 
            id={`block-${b.id}`}
            className="absolute z-20 transition-transform duration-100"
            style={{ left: b.x, bottom: 64 + b.y, width: b.w, height: b.h, display: b.broken ? 'none' : 'block' }}
          >
            {b.type === 'brick' ? <FloatingBrick /> : <QuestionBlock />}
          </div>
        ))}

        {/* Pipes */}
        {pipes.map((p) => (
          <div key={p.id} className="absolute z-20" style={{ left: p.x, bottom: 64, width: p.w, height: p.h }}>
            {/* Pipe Label */}
            <div 
              className="absolute -top-12 w-full flex justify-center z-50 transform -translate-y-full"
            >
              <span className="pixel-text text-white text-[10px] sm:text-xs tracking-widest text-center leading-loose">
                {p.label}
              </span>
            </div>
            
            {/* Pipe Body */}
            <div className="absolute top-0 w-[110%] -left-[5%] h-10 mario-pipe-rim rounded-sm z-30" />
            <div className="absolute top-10 bottom-0 w-full mario-pipe border-t-0 z-20" />
          </div>
        ))}

        {/* Player */}
        <div 
          ref={playerRef} 
          className="absolute z-10 will-change-transform" 
          style={{ bottom: 64, left: 0 }}
        >
          <PlayerSprite state={playerAnimState} direction={playerDir} />
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 h-16 w-[2500px] flex z-40 overflow-hidden">
           {Array.from({ length: 40 }).map((_, i) => (
             <div key={i} className="mario-brick w-16 h-16 shrink-0" />
           ))}
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="fixed bottom-4 left-4 right-4 flex justify-between z-50 md:hidden opacity-80">
        <div className="flex gap-2">
          <button 
            className="w-16 h-16 bg-white/20 border-4 border-white rounded-full flex items-center justify-center text-white text-2xl font-black active:bg-white/40"
            onPointerDown={() => window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }))}
            onPointerUp={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))}
            onPointerCancel={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))}
          >←</button>
          <button 
            className="w-16 h-16 bg-white/20 border-4 border-white rounded-full flex items-center justify-center text-white text-2xl font-black active:bg-white/40"
            onPointerDown={() => window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }))}
            onPointerUp={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowRight' }))}
            onPointerCancel={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowRight' }))}
          >→</button>
        </div>
        <div className="flex gap-2">
          <button 
            className="w-16 h-16 bg-white/20 border-4 border-white rounded-full flex items-center justify-center text-white text-2xl font-black active:bg-white/40"
            onPointerDown={() => window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }))}
            onPointerUp={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowDown' }))}
            onPointerCancel={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowDown' }))}
          >↓</button>
          <button 
            className="w-16 h-16 bg-white/20 border-4 border-white rounded-full flex items-center justify-center text-white text-2xl font-black active:bg-white/40"
            onPointerDown={() => window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }))}
            onPointerUp={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' }))}
            onPointerCancel={() => window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' }))}
          >↑</button>
        </div>
      </div>
    </div>
  );
}
