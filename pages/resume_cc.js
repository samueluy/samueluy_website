import About_cc from "../src/components/About_cc";
import Clients from "../src/components/Clients";
import Interests from "../src/components/Interests";
import { ImagePageBanner } from "../src/components/PageBanner";
import {
  VideoGenres,
  LanguagesSkills,
} from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import Layout from "../src/layout/Layout";
const ResumeImage = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      {/* Section Started */}
      <ImagePageBanner pageName={"Portfolio"} typingData={typingAnimation} />
      {/* Section About_cc */}
      <About_cc />
      {/* Section Design Skills */}
      <VideoGenres />
      {/* Section Languages Skills */}
      <LanguagesSkills />
      {/* Section Interests */}
      <Interests />
      {/* Section Testimonials */}
      {/*<Testimonials />*/}
      {/* Section Clients */}
      <Clients />
    </Layout>
  );
};
export default ResumeImage;
