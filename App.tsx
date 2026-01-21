import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <main className="site-main">
          <Hero />
          <About />
          <Mission />
          <Services />
          <Team />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
