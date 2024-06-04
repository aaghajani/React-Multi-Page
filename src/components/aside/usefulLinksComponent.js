import React from "react";
import { Link } from "react-router-dom";

const UsefulLinksComponent = () => {
  return (
    <React.Fragment>
      <div className="mt-4">
        <h4 className="fst-italic">📌 لینک های مفید</h4>
        <ol className="list-unstyled p-3">
          <li>
            ◀{" "}
            <Link
              to="/service"
              onClick={() => window.scrollTo(0, 0)}
              className="active"
            >
              خدمات
            </Link>
          </li>
          <li>
            ◀{" "}
            <Link
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
              className="active"
            >
              بلاگ
            </Link>
          </li>
          <li>
            ◀{" "}
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="active"
            >
              درباره ما
            </Link>
          </li>
          <li>
            ◀{" "}
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="active"
            >
              تماس با ما
            </Link>
          </li>
        </ol>
      </div>
    </React.Fragment>
  );
};
export default UsefulLinksComponent;
