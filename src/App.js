import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

