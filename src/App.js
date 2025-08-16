import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, Award, Users, Code, Database, Palette, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: '1.6',
      color: '#333',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '1rem 0',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <h2 style={{
            margin: 0,
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.8rem',
            fontWeight: 'bold'
          }}>
            Komal Gangwar
          </h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['about', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  textTransform: 'capitalize',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  color: activeSection === section ? '#fff' : '#667eea',
                  background: activeSection === section ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section) {
                    e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{
        padding: '8rem 2rem 4rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fff, #f0f0f0)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            color: '#667eea',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
          K
           </div>
          <h1 style={{
            fontSize: '3.5rem',
            margin: '0 0 1rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Komal Gangwar
          </h1>
          <p style={{
            fontSize: '1.5rem',
            margin: '0 0 2rem',
            opacity: 0.9
          }}>
            Frontend Developer & Data Analyst
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} />
              <span>Bareilly, Uttar Pradesh</span>
            </div>
             
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} />
              <span>komalgangwar2004@gmail.com</span>
            </div>
          </div>

          {/* Education & Skills Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '4rem'
          }}>
            {/* Education Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h3 style={{ margin: '0 0 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={24} />
                Education
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#fff' }}>B.Tech in CSE & IT</h4>
                <p style={{ margin: '0 0 0.25rem', opacity: 0.8 }}>Mahatma Jyotiba Phule Rohilkhand University</p>
                <p style={{ margin: '0', opacity: 0.7, fontSize: '0.9rem' }}>CGPA: 8.67 | Nov 2021 - July 2025</p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem', color: '#fff' }}>High School</h4>
                <p style={{ margin: '0 0 0.25rem', opacity: 0.8 }}>Unique Model I C Fatehganj(W)</p>
                <p style={{ margin: '0', opacity: 0.7, fontSize: '0.9rem' }}>12th: 77.8% | 10th: 82.5%</p>
              </div>
            </div>

            {/* Skills Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h3 style={{ margin: '0 0 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={24} />
                Technical Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {['C++', 'Python', 'Java', 'JavaScript', 'React', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Node.js', 'MySQL', 'MongoDB', 'Power BI'].map((tool) => (
                  <span key={tool} style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        padding: '4rem 2rem',
        background: 'rgba(255, 255, 255, 0.95)',
        color: '#333'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Experience
          </h2>
          
          <div style={{
            background: '#fff',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.5rem', color: '#667eea', fontSize: '1.5rem' }}>
                  Front-end Engineer
                </h3>
                <p style={{ margin: '0 0 0.25rem', fontWeight: '600', color: '#764ba2' }}>
                  Netzent Technologies, Lucknow
                </p>
                <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                  React.js, Tailwind CSS
                </p>
              </div>
              <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Feb 2025 - Apr 2025
              </span>
            </div>
            
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem', color: '#555' }}>
                Developed a complete login system and implemented smooth onboarding flow to the home page after authentication.
              </li>
              <li style={{ color: '#555' }}>
                Created front-end from scratch for client projects, ensuring responsive design and optimized performance.
              </li>
            </ul>
          </div>
        </div>
      </section>

     {/* Projects Section */}
      <section id="projects" style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Projects
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {/* Project 1 - Customer Churn Analysis */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Database size={24} color="#667eea" />
                <h3 style={{ margin: 0, color: '#667eea' }}>Customer Churn Analysis</h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: '#e3f2fd',
                  color: '#1976d2',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Python
                </span>
                <span style={{
                  background: '#e8f5e8',
                  color: '#2e7d32',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  ML
                </span>
                <span style={{
                  background: '#f3e5f5',
                  color: '#7b1fa2',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Jan 2024
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Achieved 79% accuracy using Random Forest classification on telecom customer data
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Revealed 10x higher churn in month-to-month contracts through visual insights
                </li>
                <li>
                  Delivered actionable retention recommendations from 7,000+ customer profiles
                </li>
              </ul>
            </div>

            {/* Project 2 - House Price Prediction */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Database size={24} color="#ff9800" />
                <h3 style={{ margin: 0, color: '#ff9800' }}>House Price Prediction</h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: '#e3f2fd',
                  color: '#1976d2',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Python
                </span>
                <span style={{
                  background: '#e8f5e8',
                  color: '#2e7d32',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  ML
                </span>
                <span style={{
                  background: '#fff3e0',
                  color: '#f57c00',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Aug 2021
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Achieved 85%+ accuracy using regression analysis on 13,000+ property records
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Identified 7 critical variables with location proximity impacting prices by 30%
                </li>
                <li>
                  Analyzed 5+ years trends across 100+ neighborhoods, finding 3 high-growth corridors
                </li>
              </ul>
            </div>

            {/* Project 3 - Fresh Market */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Palette size={24} color="#4caf50" />
                  <h3 style={{ margin: 0, color: '#4caf50' }}>Fresh Market</h3>
                </div>
                <a
                  href="https://fresh-market-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(135deg, #4caf50, #45a049)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Live Demo
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {['HTML', 'CSS', 'JavaScript', 'React.js'].map((tech) => (
                  <span key={tech} style={{
                    background: '#e8f5e8',
                    color: '#2e7d32',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {tech}
                  </span>
                ))}
                <span style={{
                  background: '#e8f5e8',
                  color: '#2e7d32',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  May 2025
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Built full-stack grocery web application with category filtering and dynamic displays
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Implemented dynamic cart and checkout system with real-time updates and pricing logic
                </li>
                <li>
                  Developed customer engagement features like contact form and newsletter subscription
                </li>
              </ul>
            </div>

            {/* Project 4 - WebWhiz */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Code size={24} color="#9c27b0" />
                <h3 style={{ margin: 0, color: '#9c27b0' }}>WebWhiz</h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {['React.js', 'Node.js', 'Bootstrap', 'Tailwind CSS', 'SQL'].map((tech) => (
                  <span key={tech} style={{
                    background: '#f3e5f5',
                    color: '#7b1fa2',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {tech}
                  </span>
                ))}
                <span style={{
                  background: '#f3e5f5',
                  color: '#7b1fa2',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Jan 2024
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Full-stack campus placement web application with student, admin, and guest modules
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Admins can manage job listings while students can update placement status
                </li>
                <li>
                  Implementing Docker containerization for seamless feature deployment pipeline
                </li>
              </ul>
            </div>

            {/* Project 5 - App Behaviour Analysis */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Zap size={24} color="#764ba2" />
                <h3 style={{ margin: 0, color: '#764ba2' }}>App Behaviour Analysis</h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: '#e3f2fd',
                  color: '#1976d2',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Python
                </span>
                <span style={{
                  background: '#e8f5e8',
                  color: '#2e7d32',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  ML
                </span>
                <span style={{
                  background: '#f3e5f5',
                  color: '#7b1fa2',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Jul 2023
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Uncovered key app engagement patterns through statistical analysis of user behavior
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Conducted comparative analysis between Android and iOS user segments
                </li>
                <li>
                  Transformed raw usage data into actionable product recommendations
                </li>
              </ul>
            </div>

            {/* Project 6 - Devjobs */}
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Palette size={24} color="#ff6b6b" />
                  <h3 style={{ margin: 0, color: '#ff6b6b' }}>Devjobs</h3>
                </div>
                <a
                  href="https://devjobs-mjpru.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(135deg, #ff6b6b, #ff5252)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Live Demo
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {['HTML', 'CSS', 'JavaScript', 'MongoDB'].map((tech) => (
                  <span key={tech} style={{
                    background: '#fff5f5',
                    color: '#d32f2f',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {tech}
                  </span>
                ))}
                <span style={{
                  background: '#fff5f5',
                  color: '#d32f2f',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem'
                }}>
                  Jul 2023
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Developed comprehensive full-stack job portal web application
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Implemented advanced job search with location and category filters
                </li>
                <li>
                  Created fully responsive design compatible across all devices and browsers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Let's Connect
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <a href="mailto:komalgangwar2004@gmail.com" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              textDecoration: 'none',
              color: 'white',
              transition: 'transform 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Mail size={24} />
              <span>komalgangwar2004@gmail.com</span>
            </a>
      
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/komal-gangwar-646bb8227/" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '25px',
              textDecoration: 'none',
              color: 'white',
              transition: 'background 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/KomalGangwar" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '25px',
              textDecoration: 'none',
              color: 'white',
              transition: 'background 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a href="https://leetcode.com/u/KomalGangwar/" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '25px',
              textDecoration: 'none',
              color: 'white',
              transition: 'background 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              <Code size={20} />
              <span>LeetCode</span>
            </a>
          </div>

          {/* Achievements Section */}
          <div style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ margin: '0 0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Award size={24} />
              Achievements & Activities
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', textAlign: 'left' }}>
              <div>• Member of Captivators, technical club of university</div>
              <div>• 3rd rank in National Science Quiz at school level</div>
              <div>• Participated in Smart India Hackathon</div>
              <div>• Certified in Design and Implementation of Human Computer Interfaces</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
