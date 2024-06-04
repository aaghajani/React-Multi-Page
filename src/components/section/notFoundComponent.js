import React from "react";
import { Link } from "react-router-dom";

const NotFoundComponent = (props) => {
  return (
    <React.Fragment>
      <div class="p-5 rounded bg-warning text-center mb-3">
        <h1>404</h1>
        <h2>!Page Not Found</h2>
        <hr />
        <Link to="/" className="btn btn-lg btn-primary">
          لطفا کلیک کنید
        </Link>
      </div>
    </React.Fragment>
  );
};
export default NotFoundComponent;
