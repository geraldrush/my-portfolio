import React from 'react';
import TypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <TypingEffect
            text={["Hi, I'm Gerald"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={3000}
          />
        </h2>
        <p className="text-lg md:text-2xl">
        
            A passionate Full-Stack Developer
            
      
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-8 py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
