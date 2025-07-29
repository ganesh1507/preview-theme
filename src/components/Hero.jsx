import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* 🔥 Background YouTube Video */}
      <div className="video-background">
        <div className="overlay"></div>
        <iframe
          src="https://www.youtube.com/embed/CZRYqch0ei0?autoplay=1&mute=1&loop=1&playlist=CZRYqch0ei0&controls=0&modestbranding=1&rel=0"
          title="Admissions Labs Background"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* ✨ Foreground Content */}
      <div className="hero-content">
        <h1 data-aos="fade-down">Your German Dream Starts Here</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          From applications to arrival, AdmissionLabs helps you access top public universities in Germany with expert guidance every step of the way.
        </p>

        <div className="countdown" data-aos="fade-up" data-aos-delay="300">
          <h4>🎓 Summer Intake 2026 Applications Open In:</h4>
          <div className="timer">
            <span><strong>19</strong><small>Days</small></span>
            <span><strong>14</strong><small>Hours</small></span>
            <span><strong>17</strong><small>Minutes</small></span>
            <span><strong id="seconds">53</strong><small>Seconds</small></span>
          </div>
        </div>

        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
          <button className="primary">Free Profile Evaluation</button>
          <button className="whatsapp">Talk on WhatsApp</button>
        </div>

        <div className="scroll-circle">
          <svg viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M100,100 m-96,0 a96,96 0 1,1 192,0 a96,96 0 1,1 -192,0"
              />
            </defs>
            <text dy="10" textLength="600">
              <textPath href="#circlePath">
                — YOU’RE NOT LOST - YOU’RE JUST NOT IN GERMANY YET
              </textPath>
            </text>
          </svg>
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  );
}


