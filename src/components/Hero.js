import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* 🔥 Background YouTube Video */}
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/vbTU--GoodM?autoplay=1&mute=1&loop=1&playlist=vbTU--GoodM&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Admissions Labs Background"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🔤 Foreground Hero Content */}
      <div className="hero-content">
        <h1 data-aos="fade-down">ADMISSIONS LAB</h1>
        <p data-aos="fade-up" data-aos-delay="300">
          At AdmissionLabs, we believe that every student deserves access to quality education, regardless of financial constraints...
        </p>
        <div className="buttons" data-aos="fade-up" data-aos-delay="500">
          <button className="buy">CONTACT NOW!</button>
          <button className="explore">GET A QUOTATION</button>
        </div>

        {/* 🔁 Scroll Circle */}
        <div className="scroll-circle">
          <svg viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M100,100 m-96,0 a96,96 0 1,1 192,0 a96,96 0 1,1 -192,0"
              />
            </defs>
            <text dy="10" textLength="600">
              <textPath href="#circlePath" startOffset="0">
                — YOU’RE NOT LOST - YOU’RE JUST NOT IN GERMANY YET —
              </textPath>
            </text>
          </svg>
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  );
}
