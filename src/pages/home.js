import React from "react";
import CarouselComponent from "../components/section/carouselComponent";
import FourPostComponent from "../components/section/fourPostComponent";
import ArticleComponent from "../components/article/articleComponent";
import SidebarComponent from "../components/aside/sidebarComponent";
import defaultData from "../data/data";

const HomePage = () => {
  return (
    <React.Fragment>
      <main className="container">
        <CarouselComponent />
        <FourPostComponent defaultData={defaultData} />

        <div className="row">
          <div className="col-md-8">
            <ArticleComponent />
          </div>

          <div className="col-md-4">
            <SidebarComponent />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
export default HomePage;
