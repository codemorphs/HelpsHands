import React, { useEffect, useState } from 'react';

import './Home.css';

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Use a setTimeout to delay the appearance of the banner for the fade-in effect
    setTimeout(() => {
      setShowBanner(true);
    }, 100);
  }, []);
  return (
    <div className="home-page">
      
      <header className="banner">
        <img src="/banner.jpg" alt="Banner" />
        <div className="banner-content">
          <h1>WELCOME TO THE <br />HELPING HAND</h1><br />
          <h2>PSYCHOLOGICAL HOSPITAL</h2>
          <a href="#contact" className="contact-button">
            Contact Us
          </a>
        </div>
      </header>

      <main>
      <section class="we-offer-area text-center bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="site-heading text-center">
            <h2>Choose Our <span>Medical Services</span></h2>
            <h4>provide a wide range of mental health services to people of all ages and backgrounds</h4>
          </div>
        </div>
      </div>
      <div class="row our-offer-items less-carousel">
        <div class="col-md-4 col-sm-6 equal-height">
          <div class="item">
            <div class="service-icon">
              <img src="/Therapy.jpg" alt="Therapy" />
            </div>
            <br />
            <h4>Therapy</h4>
            <p>
              Psychologists can provide a variety of therapies to help people with mental health problems. Some common types of therapy include cognitive-behavioral therapy (CBT), interpersonal therapy (IPT), and psychodynamic therapy.
            </p>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 equal-height">
          <div class="item">
            <div class="service-icon">
              <img src="/counceling.jpg" alt="Counseling" />
            </div>
            <br />
            <h4>Counseling</h4>
            <p>
              Psychologists can also provide counseling to help people with a variety of personal and interpersonal challenges, such as grief and loss, relationship problems, and stress management.
            </p>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 equal-height">
          <div class="item">
            <div class="service-icon">
              <img src="/Medication.jpg" alt="Medication Management" />
            </div>
            <br />
            <h4>Medication Management</h4>
            <p>
              Psychologists can work with psychiatrists to manage medication for mental health conditions. This may involve prescribing new medications, adjusting dosages, or monitoring side effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
      </main>

      <footer id="contact">
        <div className="container">
          <p>Contact us for an appointment or further information.</p>
          <p>Email: clinic@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
