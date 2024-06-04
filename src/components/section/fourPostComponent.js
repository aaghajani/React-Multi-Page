import React from "react";
import { Link } from "react-router-dom";

const FourPostComponent = (props) => {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const fourPostValue = () => {
    return shuffle(props.defaultData)
      .slice(0, 4)
      .map((item, index) => {
        return (
          <div className="col-md-6" key={index}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className=" text-body-secondary">
                  # {item.category}
                </strong>
                <h3 className="mb-0">{item.title}</h3>
                <div className="mb-1 text-body-secondary">{item.date}</div>
                <p className="card-text mb-auto">
                  {item.content.slice(0, 100)}..
                </p>
                <Link
                  to={"/" + item.title}
                  onClick={() => window.scrollTo(0, 0)}
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  ادامه مطلب..
                  <svg className="bi">
                    <div id="#chevron-right"></div>
                  </svg>
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: صورة مصغرة"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#8F7EE7" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em" fontSize={50}>
                    〉〉〉
                  </text>
                </svg>
              </div>
            </div>
          </div>
        );
      });
  };

  return (
    <React.Fragment>
      <div className="row mb-2">{fourPostValue()}</div>
    </React.Fragment>
  );
};
export default FourPostComponent;
