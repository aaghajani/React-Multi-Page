import React from "react";
import FourPostComponent from "../components/section/fourPostComponent";
import TitleComponent from "../components/section/titleComponent";
import defaultData from "../data/data";

const BlogPage = (props) => {
  const defaultData2 = defaultData.filter((item) => item.category === "بلاگ");
  return (
    <React.Fragment>
      <main className="container">
        <TitleComponent title={props.title} />
        <FourPostComponent defaultData={defaultData2} />
      </main>
    </React.Fragment>
  );
};
export default BlogPage;
