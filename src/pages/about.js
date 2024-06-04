import React from "react";
import TitleComponent from "../components/section/titleComponent";

const AboutPage = (props) => {
  return (
    <React.Fragment>
      <main className="container">
        <TitleComponent title={props.title} desc={props.desc} />
      </main>
    </React.Fragment>
  );
};
export default AboutPage;
