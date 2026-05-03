import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const slides = [
  {
    title: "The Wellness Journal",
    description: "A sanctuary for your thoughts. Reflect, track your journey, and find your inner peace through guided expression.",
    image: "/onboarding/journal.png",
    accent: "#064E3B"
  },
  {
    title: "Mood Analysis",
    description: "Daily emotional check-ins help you discover deep-seated patterns and understand the rhythm of your well-being.",
    image: "/onboarding/mood_log.png",
    accent: "#155E54"
  },
  {
    title: "Private Sanctuary",
    description: "Your digital diary is encrypted and personal. A safe space where your secrets and dreams remain yours alone.",
    image: "/onboarding/private_thoughts.png",
    accent: "#1A202C"
  },
  {
    title: "Peer Support",
    description: "Connect with a compassionate community anonymously. Share experiences and find strength in collective wisdom.",
    image: "/onboarding/community.png",
    accent: "#276749"
  },
  {
    title: "Professional Care",
    description: "Professional counselors are just a conversation away. Access expert guidance whenever you need focused support.",
    image: "/onboarding/support.png",
    accent: "#064E3B"
  }
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      navigate('/user/checkin');
    }
  };

  const handleSkip = () => {
    navigate('/user/checkin');
  };

  const slide = slides[currentSlide];

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: '#F8FAFB',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Top Navigation */}
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleSkip} 
          style={{ 
            color: '#718096', 
            fontWeight: '700', 
            fontSize: '0.9rem', 
            border: 'none', 
            background: 'none', 
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#064E3B'}
          onMouseLeave={(e) => e.target.style.color = '#718096'}
        >
          Skip
        </button>
      </div>

      {/* Main Slide Content */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '0 2rem', 
        textAlign: 'center',
        transform: 'translateY(-20px)'
      }}>
        
        {/* Dynamic Illustration */}
        <div style={{ 
          width: '320px', 
          height: '320px', 
          marginBottom: '3.5rem',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeIn 0.8s ease-out'
        }}>
          {/* Subtle Glow Background */}
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            backgroundColor: slide.accent,
            filter: 'blur(80px)',
            opacity: 0.1,
            zIndex: 0
          }} />
          
          <img 
            src={slide.image} 
            alt={slide.title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1
            }} 
          />
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#1A202C', 
          marginBottom: '1rem', 
          fontWeight: '900',
          letterSpacing: '-0.02em'
        }}>
          {slide.title}
        </h1>
        <p style={{ 
          color: '#4A5568', 
          fontSize: '1.1rem', 
          lineHeight: 1.7, 
          maxWidth: '450px',
          fontWeight: '500'
        }}>
          {slide.description}
        </p>

      </div>

      {/* Bottom Controls */}
      <div style={{ 
        padding: '3rem 2rem 5rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '2.5rem' 
      }}>
        
        {/* Dot Indicators */}
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          {slides.map((_, index) => (
            <div 
              key={index}
              style={{
                width: currentSlide === index ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentSlide === index ? '#064E3B' : '#CBD5E0',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            />
          ))}
        </div>

        <div style={{ width: '100%', maxWidth: '400px' }}>
          <button 
            onClick={handleNext}
            style={{
              width: '100%',
              backgroundColor: '#064E3B',
              color: '#FFFFFF',
              border: 'none',
              padding: '1.1rem',
              borderRadius: '16px',
              fontWeight: '800',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(6, 78, 59, 0.3)',
              transition: 'transform 0.2s, background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.02)';
              e.target.style.backgroundColor = '#043528';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = '#064E3B';
            }}
          >
            {currentSlide === slides.length - 1 ? 'Start Your Journey' : 'Next Step'}
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Onboarding;
