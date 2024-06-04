import React from "react";
import NavComponent from "./navComponent";

const Header = () => {
  return (
    <React.Fragment>
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">سایت‌اینتک</div>
            <div className="col-4 text-center">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 646.64 800"
                className="logo"
              >
                <polygon
                  points="646.64 239.99 554.26 400 508.07 480.01 461.88 400 508.07 319.99 554.26 240.02 554.26 239.99 508.07 160.01 508.07 159.98 461.88 80.01 508.07 0 554.26 79.98 554.26 80.01 600.45 159.98 646.64 239.99"
                  style={{ strokeWidth: 0 }}
                />
                <polygon
                  points="415.7 480.01 461.88 560.01 415.7 640.02 369.51 719.99 369.51 720.02 323.32 800 277.13 719.99 230.94 640.02 230.94 639.99 184.75 560.01 277.13 560.01 323.32 640.02 369.51 560.01 323.32 480.01 277.13 400 230.94 319.99 184.75 240.02 184.75 239.99 230.94 160.01 230.94 159.98 277.13 80.01 323.32 0 369.51 79.98 369.51 80.01 415.7 159.98 461.88 239.99 369.51 239.99 323.32 159.98 277.13 239.99 369.51 400 415.7 480.01"
                  style={{ strokeWidth: 0 }}
                />
                <polygon
                  points="184.75 400 138.57 480.01 92.38 400 0 239.99 46.19 160.01 46.19 159.98 92.38 80.01 138.57 0 184.75 80.01 138.57 159.98 138.57 160.01 92.38 239.99 184.75 400"
                  style={{ strokeWidth: 0 }}
                />
              </svg>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              SITEINTECH
            </div>
          </div>
        </header>

        <NavComponent />
      </div>
    </React.Fragment>
  );
};
export default Header;
