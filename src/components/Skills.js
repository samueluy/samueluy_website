import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const VideoGenres = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Genres</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Vlogs</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">45%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Informative</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "67%" }}>
                  <span className="percent">30%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Unboxing</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "22%" }}>
                  <span className="percent">10%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Commercial</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "33%" }}>
                  <span className="percent">15%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Filipino</div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">Python</div>
              <div className="progress p95">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">SQL</div>
              <div className="progress p90">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">DAX</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Java</div>
              <div className="progress p85">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Knowledge</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Azure DevOps</div>
            </li>
            <li>
              <div className="name">Azure Data Factory</div>
            </li>
            <li>
              <div className="name">Azure Synapse Analytics</div>
            </li>
            <li>
              <div className="name">Azure Stream Analytics</div>
            </li>
            <li>
              <div className="name">Azure Data Lake Storage</div>
            </li>
            <li>
              <div className="name">Azure Databricks</div>
            </li>
            <li>
              <div className="name">Microsoft Power BI</div>
            </li>
            <li>
              <div className="name">SQL</div>
            </li>
            <li>
              <div className="name">Python</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
