const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">Oct 2023 - Present</div>
                <div className="name">Data Engineer - Exist Software Labs, Inc.</div>
                <div className="text">
                Collaborated with clients in energy and bancassurance to improve software solutions and enhance operational efficiency. Developed over 30 Azure pipelines, fixed five Power BI reports, and utilized Microsoft Fabric UI for UI development. Contributed to developing a new service line within the company.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Apr 2023 - Present</div>
                <div className="name">Co-Founder - Overflow Creatives.</div>
                <div className="text">
                Expanded the team to four members, secured four recurring clients, and served eight clients in the first year, enhancing operational capacity and establishing strong partnerships.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2009 - 2010</div>
                <div className="name">Content Creator</div>
                <div className="text">
                Grew 175,000 followers as a Computer Science/Finance content creator. Partnered with local and international exchanges, tech companies, and retail brands. Invited as a keynote speaker to discuss Python and Object-Oriented Programming.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2020 - 2024</div>
                <div className="name">De La Salle University - Manila</div>
                <div className="text">
                  Bachelors Degree in Computer Science Major in Software Technology<br></br><br></br>
                  Associate Vice President for Training and Devleopment - La Salle Computer Society<br></br>
                  Associate Vice President for Publicity and Creatives - La Salle Computer Society
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2018 - 2020</div>
                <div className="name">Far Eastern University - Diliman</div>
                <div className="text">
                  STEM<br></br>
                  President - The Lumière Club<br></br>
                  Member of FEU Diliman Robotics Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
