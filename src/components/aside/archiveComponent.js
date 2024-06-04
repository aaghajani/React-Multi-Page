import React from "react";
import defaultData from "../../data/data";
import { Link } from "react-router-dom";

const ArchiveComponent = () => {
  const archiveValue = () => {
    return defaultData.map((item, index) => {
      return (
        <li key={index}>
          ◀{" "}
          <Link
            to={"/" + item.title}
            onClick={() => window.scrollTo(0, 0)}
            className="active"
          >
            {item.title}
          </Link>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="mt-4">
        <h4 className="fst-italic">💾 آرشیو</h4>
        <ol className="list-unstyled mb-0 p-3">{archiveValue()}</ol>
      </div>
    </React.Fragment>
  );
};
export default ArchiveComponent;
