import React from "react";
import { Link } from "react-router-dom";

const TitleComponent = (props) => {
  return (
    <React.Fragment>
      <div className="p-4 p-md-5 mb-3 rounded text-body-emphasis bg-body-secondary">
        <div className="px-0 text-center">
          <h1 className="display-4">{props.title}</h1>
          <p className="lead my-3">
            <Link to="/" className="active">
              صفحه اصلی
            </Link>{" "}
            / {props.title}
          </p>
          <p>{props.desc && props.desc}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TitleComponent;
