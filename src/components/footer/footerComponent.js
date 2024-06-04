import React from "react";

const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
        <p>
          طراحی شده توسط
          <a href="https://siteintech.ir/" target="blank" className="active">
            {" "}
            سایت‌اینتک{" "}
          </a>
          💎
        </p>
      </footer>
    </React.Fragment>
  );
};
export default FooterComponent;
