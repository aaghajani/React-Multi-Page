import React from "react";
import LatestContentComponent from "./latestContentComponent";
import ArchiveComponent from "./archiveComponent";
import UsefulLinksComponent from "./usefulLinksComponent";

const SidebarComponent = (props) => {
  const dateProp = () => {
    if (props.date) {
      return <h4 className="fst-italic">نوشته شده در تاریخ {props.date}</h4>;
    } else {
      return <h4 className="fst-italic">لورم ایپسوم</h4>;
    }
  };
  return (
    <React.Fragment>
      <div className="position-sticky" style={{ top: "2rem" }}>
        <div className="p-4 mb-3 bg-body-tertiary rounded">{dateProp()}</div>

        <LatestContentComponent />
        <ArchiveComponent />
        <UsefulLinksComponent />
      </div>
    </React.Fragment>
  );
};
export default SidebarComponent;
