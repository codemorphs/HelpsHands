import React from 'react'
import './Home.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Our Psychological Clinic</h1>
      </header>

      <main>
        <section className="intro-section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              We are a dedicated team of professionals who provide caring and
              effective psychological services. Our clinic is committed to
              helping individuals, couples, and families navigate life's
              challenges.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <ul>
              <li>Counseling and Therapy</li>
              <li>Individual and Group Sessions</li>
              <li>Stress Management</li>
              <li>Child and Adolescent Counseling</li>
              <li>Marriage and Family Counseling</li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
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
