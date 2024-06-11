import { CreativePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const WorksCreative = () => {
  const typingData = [
    "Data with <strong>Azure pipelines</strong> and <strong>SQL</strong>",
    "AI with <strong>Azure ML Studio</strong> and <strong>Python</strong>",
    "TikTok <strong>@samueluyyt</strong>",
  ];

  return (
    <Layout>
      <CreativePageBanner pageName={"works"} extraClass="typed-subtitle" />
      <div className="section works" id="section-portfolio">
        <div className="content">
          <ItemIsotope />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default WorksCreative;
