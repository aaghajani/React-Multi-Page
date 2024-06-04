import React from "react";
import TitleComponent from "../components/section/titleComponent";
import SidebarComponent from "../components/aside/sidebarComponent";

const SinglePage = (props) => {
  return (
    <React.Fragment>
      <main className="container">
        <TitleComponent title={props.title} />

        <div className="row g-5">
          <div className="col-md-8">
            <article className="blog-post m-0 py-4 border-top">
              <p>{props.content}</p>
            </article>
          </div>

          <div className="col-md-4">
            <SidebarComponent date={props.date} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default SinglePage;
