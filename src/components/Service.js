const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Skills</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-cloud" />
              </div>
              <div className="name">Cloud Computing</div>
              <div className="text">
              Expertise in Azure DevOps, Data Factory, Synapse Analytics, Stream Analytics, Event Hubs, Data Lake Storage, and Databricks.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-database" />
              </div>
              <div className="name">Data Engineering</div>
              <div className="text">
              Proficient in developing ETL processes and pipelines using Python and SQL.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-display" />
              </div>
              <div className="name">Data Visualization</div>
              <div className="text">
              Skilled in creating interactive reports and dashboards with Power BI.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code" />
              </div>
              <div className="name">Web Development</div>
              <div className="text">
              Modern and mobile-ready websites using React and Node.js
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-person" />
              </div>
              <div className="name">Leadership</div>
              <div className="text">
              Experience in leading initiatives and expanding teams to enhance operational capacity.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-people-group" />
              </div>
              <div className="name">Community Management</div>
              <div className="text">
              Experienced in building and maintaining community engagement.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
