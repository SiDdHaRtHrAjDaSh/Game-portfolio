/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { GamePlatform } from './components/GamePlatform';
import { ResumeModal } from './components/ResumeModal';
import { SimpleResumeView } from './components/SimpleResumeView';

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSimpleMode, setIsSimpleMode] = useState(false);

  const handleCloseModal = () => {
    setActiveSection(null);
    // Release player from pipe so they pop back out
    if ((window as any).releasePlayerFromPipe) {
      (window as any).releasePlayerFromPipe();
    }
  };

  if (isSimpleMode) {
    return <SimpleResumeView onBack={() => setIsSimpleMode(false)} />;
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <GamePlatform onOpenSection={setActiveSection} onSimpleMode={() => setIsSimpleMode(true)} />
      {activeSection && (
        <ResumeModal sectionId={activeSection} onClose={handleCloseModal} />
      )}
    </div>
  );
}

