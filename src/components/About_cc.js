const About_cc = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/resume_pic.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
          Alright! I'm Sam, your go-to content creator from the vibrant streets of Quezon City, Philippines.
I'm a 22-year-old Computer Science student at De La Salle University - Manila, and I've got a deep love for all things tech, lifestyle, and finance.
If you're in need of a storyteller with a zest for life, you're in the right place! Let's create something remarkable together!
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 22
              </li>
              <li>
                <strong>Residence:</strong> Philippines
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Metro Manila
              </li>
              <li>
                <strong>Phone:</strong> +63 956 381 2141
              </li>
              <li>
                <strong>E-mail:</strong> contact@samueluy.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="/documents/Samuel_Uy_Portfolio_2024.pdf" className="btn hover-animated" download="Samuel_Uy_Portfolio_2024.pdf">
              <span className="circle" />
              <span className="lnk">Download Portfolio</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About_cc;
