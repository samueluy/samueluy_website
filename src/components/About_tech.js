const About = () => {
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
My passion for technology began early, evolving into a career of continuous learning and leadership. At 22, I am a senior at De La Salle University, majoring in Software Technology, with extensive IT experience. Currently, as a Software Engineer at Exist Software Labs, Inc., I've developed over 50 Azure pipelines for ETL processes. As a Co-founder of Overflow Creatives, I've driven growth and client engagement. On TikTok, I share knowledge in Computer Science and Finance with 175,000 followers. I hold certifications in Microsoft Azure Data Engineering, Cloud Data Integration, and Associate Integration Development. Let's collaborate and drive innovation together!
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
            <a href="/documents/Samuel_Uy_Resume_2024.pdf" className="btn hover-animated" download="Samuel_Uy_Resume_2024.pdf">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
