import React from "react";
import defaultData from "../../data/data";
import { Link } from "react-router-dom";

const LatestContentComponent = () => {
  const latestContentValue = () => {
    const reverseData = defaultData;
    return reverseData
      .slice()
      .reverse()
      .slice(0, 3)
      .map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={"/" + item.title}
              onClick={() => window.scrollTo(0, 0)}
              className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
            >
              <span>📝</span>
              <div className="col-lg-8">
                <h6 className="mb-0">{item.title}</h6>
                <small className="text-body-secondary">{item.date}</small>
              </div>
            </Link>
          </li>
        );
      });
  };

  return (
    <React.Fragment>
      <div className="mt-4">
        <h4 className="fst-italic">📜 آخرین مطالب</h4>
        <ul className="list-unstyled p-3">{latestContentValue()}</ul>
      </div>
    </React.Fragment>
  );
};
export default LatestContentComponent;
