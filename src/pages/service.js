import React from "react";
import FourPostComponent from "../components/section/fourPostComponent";
import TitleComponent from "../components/section/titleComponent";
import defaultData from "../data/data";

const ServicePage = (props) => {
  const defaultData2 = defaultData.filter((item) => item.category === "خدمات");
  return (
    <React.Fragment>
      <main className="container">
        <TitleComponent title={props.title} />
        <FourPostComponent defaultData={defaultData2} />
      </main>
    </React.Fragment>
  );
};
export default ServicePage;
