import React  from "react";
import "./AboutUs.css";

function AboutUs(){
    return (
        <div className="AboutUs">
            <div>
            <div class="card-wrapper">
                <div class="title">
                <h2>Thaaru Paranavithana</h2>
                </div>
                <div class="img-and-name">
                <div class="image-place">
                    <img
                    alt="Imagem de Carina Ponte, responsável pela área de Heranças em MSF Brasil"
                    class="person-image"
                    src="director.jpg"
                    title="Imagem de Carina Ponte"
                    />
                </div>
                <div class="information">
                    <div class="person-name">
                    <p id="postID">Director – Clinical Psychologist</p>
                    </div>
                    <div class="job-description">
                    BA Psycho (Spc) Kelaniya <br></br>MA ( B,Psycho) Kelniya<br></br>{" "}
                    MA (Sociology) Colombo<br></br> MSc (Applied & Clinical Psycho)
                    NIBM <br></br>PGDC at university of Colombo, Psychotherapy High
                    National Diploma (MHF)<br></br> Member of Amarican psychological
                    association <br></br>Former psychologist at Gampha base hospital &
                    Kiribathgoda hospital<br></br> Visiting lecturer- National police
                    academy & Government Teacher training college bolawalana<br></br>{" "}
                    World Vision Lanka NGO <br></br>Director- The Helping Hand
                    psychological hospital
                    </div>

                    {/* <div class="contacts">
                    <div class="phone-number">
                        <p>
                        <a href="tel:+552135273614">(21) 3527-3614</a>
                        </p>
                    </div>
                    <div class="email">
                        <p>
                        <a href="mailto:heranca@rio.msf.org">heranca@rio.msf.org</a>
                        </p>
                    </div>
                    </div> */}
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default AboutUs;