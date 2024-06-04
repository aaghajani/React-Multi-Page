import React from "react";
import TitleComponent from "../components/section/titleComponent";

const ContactPage = (props) => {
  return (
    <React.Fragment>
      <main className="container">
        <TitleComponent title={props.title} desc={props.desc} />
      </main>
    </React.Fragment>
  );
};
export default ContactPage;
