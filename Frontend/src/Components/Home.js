import React, { useEffect, useState } from "react";

import "./Home.css";

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
          <h1>
            WELCOME TO THE <br />
            HELPING HAND
          </h1>
          <br />
          <h2>PSYCHOLOGICAL HOSPITAL</h2>
          <br />

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
                  <h2 id="medicalServicesTopic">
                    Choose Our <span>Medical Services</span>
                  </h2>
                  <h4>
                    provide a wide range of mental health services to people of
                    all ages and backgrounds
                  </h4>
                </div>
              </div>
            </div>
            <div class="row our-offer-items less-carousel">
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <div class="service-icon">
                    <img src="residentialTreatement.png" alt="Therapy" />
                  </div>
                  <br />
                  <h5 id="serivceHeadings">Residential Treatment</h5>
                  {/* <p>
                    Psychologists can provide a variety of therapies to help
                    people with mental health problems. Some common types of
                    therapy include cognitive-behavioral therapy
                  </p> */}
                </div>
              </div>

              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <div class="service-icon">
                    <img src="PsychiatricTreatment.jpeg" alt="Counseling" />
                  </div>
                  <br />
                  <h5 id="serivceHeadings">Psychiatric Treatment</h5>
                  {/* <p>
                    Psychologists can also provide counseling to help people
                    with a variety of personal and interpersonal challenges,
                    such as grief and loss, relationship problems, and stress
                    management.
                  </p> */}
                </div>
              </div>

              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <div class="service-icon">
                    <img src="counselling.avif" alt="Medication Management" />
                  </div>
                  <br />
                  <h5 id="serivceHeadings">Counseling</h5>
                  {/* <p>
                    Psychologists can work with psychiatrists to manage
                    medication for mental health conditions. This may involve
                    prescribing new medications, adjusting dosages, or
                    monitoring side effects.
                  </p> */}
                </div>
              </div>

              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <div class="service-icon">
                    <img
                      src="BehavioralTherapy.jpeg"
                      alt="Medication Management"
                    />
                  </div>
                  <br />
                  <h5 id="serivceHeadings">Behavioral Therapy</h5>
                  {/* <p>
                    Psychologists can work with psychiatrists to manage
                    medication for mental health conditions. This may involve
                    prescribing new medications, adjusting dosages, or
                    monitoring side effects.
                  </p> */}
                </div>
              </div>

              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <div class="service-icon">
                    <img src="training.jpeg" alt="Medication Management" />
                  </div>
                  <br />
                  <h5 id="serivceHeadings">
                    Training for Psychology Professionals
                  </h5>
                  {/* <p>
                    Psychologists can work with psychiatrists to manage
                    medication for mental health conditions. This may involve
                    prescribing new medications, adjusting dosages, or
                    monitoring side effects.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section">
          <div class="container">
            <div class="row">
              <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div class="inner-column">
                  <div class="sec-title">
                    {/* <span class="title">About Css3transition</span> */}
                    <h3 id="secTitle1">
                      Empowering Minds, Embracing Change: Your Journey to Inner
                      Peace
                    </h3>
                  </div>
                  <div class="text">
                    Our hospital is a distinguished private healthcare
                    institution committed to advancing mental health and
                    psychological well-being. With a focus on providing premium
                    care and support, this hospital offers a wide spectrum of
                    services, including inpatient and outpatient rehabilitation,
                    counseling, and psychotherapy. The dedicated team of
                    professionals at The Helping Hand Psychological Hospital
                    delivers personalized treatment and therapies, ensuring that
                    each patient's unique needs are met. With a strong emphasis
                    on confidentiality and comfort, the hospital strives to
                    create a nurturing environment for individuals seeking
                    expert mental health care in a private and compassionate
                    setting.
                  </div>

                  <div class="btn-box">
                    <a href="#" class="theme-btn btn-style-one">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column wow fadeInLeft">
                  <div class="author-desc">
                    <h2>Thaaru Paranavithana</h2>
                    <span>Clinical Psychologist</span>
                  </div>
                  <figure class="image-1">
                    <a href="#" class="lightbox-image" data-fancybox="images">
                      <img
                        title="Rahul Kumar Yadav"
                        src="director.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div class="wrapper">
            <h1>Our Team</h1>
            <div class="team">
              <div class="team_member">
                <div class="team_img">
                  <img src="director.jpg" alt="Team_image" />
                </div>
                <h3 id="personName">Thaaru Paranavithana</h3>
                <p class="role">Director – Clinical Psychologist</p>
                <p id="descPerson">
                  BA Psycho (Spc) Kelaniya<br></br>
                  MA( B,Psycho) Kelniya<br></br>
                  MA(Sociology)Colombo<br></br> MSc (Applied & Clinical Psycho)
                  NIBM
                  <br></br>
                  PGDC at university of colombo, Psychotherapy High National
                  Diploma (MHF) <br></br>Member of Amarican psychological
                  association <br></br>Former psychologist at Gampha base
                  hospital & Kiribathgoda hospital<br></br> Visiting lecturer-
                  National police academy & Government Teacher training college
                  bolawalana, World Vision Lanka NGO<br></br> Director- The
                  Helping Hand psychological hospital
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/jQj1I8E.png" alt="Team_image" />
                </div>
                <h3 id="personName">Saman Athula Kumara</h3>
                <p class="role">Manager</p>
                <p id="descPerson">
                  Sri Lanka Government Principle Service<br></br>
                  Mahaweli College Of Education <br></br>
                  The National Diploma in Teaching <br></br>
                  Former principal with more than 20 years’ Experiences<br></br>
                  Level II Capacity Development Program (Enhancement of
                  Education Achievement) <br></br>
                  Department of Education, Western Province Level I Capacity
                  Development Program (Smart School Leaders). Department of
                  Education, Western Province
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">Dr. B.M. Dayan Samarasekara</h3>
                <p class="role">Medical Officer</p>
                <p id="descPerson">
                  MBBS (University of Sri Jayawardana Pura) <br></br>Post
                  Graduate Diploma in Elderly Medicine, University of Colombo{" "}
                  <br></br>
                  Diploma in Counseling Psychology, University of Colombo
                  <br></br>
                  MRCGP (Int) (Part 1) <br></br>Orientation for Medical Officers
                  of Health, National Institute of Health Sciences, 2009
                  <br></br>
                  Preventive sector and primary care<br></br> Worked as Medical
                  officer of Health Kantale , Additional Medical officer of
                  Health
                  <br></br>
                  Divulapitiya, Seeduwa, Minuwangoda<br></br> Curative sector
                  and Tertiary care Senior House Officer (Medicine) (DGH
                  Negombo)
                  <br></br>
                  Medical Officer, DGH Gampaha
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">K.R.M.Y. Harshani Kasthurirathna</h3>
                <p class="role">Professional Psycho Therapist</p>
                <p id="descPerson">
                  Bachelor of Art (special) degree at university of Sri
                  Jayawardharapura<br></br>
                  Advanced Diploma In Psychotherapy at Mental Health Foundation
                  <br></br>
                  Master of Art in Buddhist Ayurveda Counselling at University
                  of Kelaniya<br></br>
                  Diploma Course in counseling at University of Sri
                  Jayawadhanapura (Department of Psychiatry). Postgraduate
                  Diploma at University of Colombo <br></br>
                  Registered Counselor and member of Professional Psychological
                  Counselors Association in Sri Lanka. (Sri Lanka foundation
                  Institute)
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">Chithrani Priyangani De Silva</h3>
                <p class="role">Educational Counsellor</p>
                <p id="descPerson">
                  Bachelor of Arts Degree at the University of Kelaniya, Sri
                  Lanka
                  <br></br>
                  Postgraduate Diploma in Education Management at Faculty of
                  Education Leadership Development and Management Meepe, Sri
                  Lanka
                  <br></br>
                  The certificate course in educational research methodology,
                  University of Colombo, Sri Lanka. <br></br>Postgraduate
                  Diploma in Education at University of Colombo, Sri Lanka{" "}
                  <br></br>Trained Teacher Certificate (primary education) at
                  National Institute of Education, Sri Lanka<br></br> Care
                  Certificate at FLEXEBEE.LTD, United Kingdom OTHM Level 03
                  Foundation Diploma in Health and Social Care Northern Campus,
                  United Kingdom Care Giver Course at Feel It Nursing Academy,
                  Minuwangoda, Sri Lanka Master of Education (Education and
                  Development Psychology) at the University of Colombo, Sri
                  Lanka.
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">W.A.Shanika Madubhashini</h3>
                <p class="role">Medical Officer</p>
                <p id="descPerson">
                  Bachelor of Arts (Special) Degree in Psychology<br></br>
                  Diploma (Part I & II) in Counselling and Psychotherapy in the
                  Institute of Psychological Studies, Colombo, Sri Lanka{" "}
                  <br></br>
                  Followed a Diploma in Applied Psychology and Counselling One
                  Year Course with Clinical Practical conducted by the Life
                  Center, Sri Lanka <br></br>Followed a Course in Practical
                  Psychiatry and Clinical Psychology in the Life Center for
                  Personality Development, Kohuwala, Sri Lanka<br></br> Clinical
                  Training Programme Conducted by Sandeepani Home, Psychosocial
                  Residential Care for Mentally Ill<br></br> Professional
                  Psychologist at National Dangerous Drugs Control Board,
                  Colombo, Sri Lanka.
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">M.G. Anuththara Indumini Mapage</h3>
                <p class="role">Shadow Teacher</p>
                <p id="descPerson">
                  Diploma in Child Psychology<br></br> Diploma in Counselling
                  Psychology <br></br>Higher National Diploma in Special Needs
                  Education<br></br> Internship in The Helping Hand
                  Psychological Hospital <br></br>Reading Bachelor of
                  Information Technology at University of Colombo School of
                  Computing
                  <br></br>
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">Ruhaniya Roomy</h3>
                <p class="role">Elder Care Assistant</p>
                <p id="descPerson">
                  Diploma in Counselling Psychology <br></br>Internship in The
                  Helping Hand Psychological Hospital <br></br>As a teacher in
                  Kids International School in Sri Lanka for 3 years.<br></br>{" "}
                  Completed on Information Technology course in Esoft Metro
                  Campus Seeduwa.
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">Amali Ureshani Silva</h3>
                <p class="role">Special Needs Education Teacher </p>
                <p id="descPerson">
                  Diploma in Child Psychology (SLIT Campus)<br></br>
                  Social Work Diploma (University of Japura)<br></br>
                  Higher National Diploma in Special Needs Education (The
                  Helping Hand Hospital)
                </p>
              </div>
              <div class="team_member">
                <div class="team_img">
                  <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                </div>
                <h3 id="personName">W.A. Isuru Naveen</h3>
                <p class="role">Medical Billing Specialist</p>
                <p id="descPerson"></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer_container">
          <div class="footer-col">
            <h4>Our Info</h4>
            <ul>
              <li>
                <a href="#">Company Reg. No. : PV00243655</a>
              </li>
              <li>
                <a href="#">Health Ministry Reg. No. AA 14835</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-phone"></i> 071 900 1212 / 011 756 1122
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="far fa-envelope"></i>{" "}
                  thehelpinghandhospital18@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-globe"></i> www.helpinghandlk.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* <div class="footer-col OnlineShop">
            <h4>Online Shop</h4>
            <ul>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">All Versions</a>
              </li>
            </ul>
          </div> */} 

          <div class="footer-col">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
