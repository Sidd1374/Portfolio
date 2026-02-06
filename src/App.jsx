import React, { useState, useEffect } from 'react'
import Portfolio from './Portfolio'
import AIToolsPreview from './AIToolsPreview'

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Show AI Tools Preview page when #ai-tools hash is present
  if (route === '#ai-tools') {
    return <AIToolsPreview />;
  }

  return <Portfolio />;
}
