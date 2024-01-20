const StaffMember = ({ name, designation, qualifications, description }) => {
  return (
    <div class="card-wrapper">
          <div class="title">
            <h2>{name}</h2>
          </div>
          <div class="img-and-name">
            <div class="image-place">
              <img
                alt="Imagem de Carina Ponte, responsável pela área de Heranças em MSF Brasil"
                class="person-image"
                src="6596121.png"
                title="Imagem de Carina Ponte"
              />
            </div>
            <div class="information">
              <div class="person-name">
                <p id="postID">{designation}</p>
              </div>
              <div class="job-description">
                <ul>{qualifications.map((qualification, index) => {
                    return <li key={index}>{qualification}</li>
                })}</ul>
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
  );
};
