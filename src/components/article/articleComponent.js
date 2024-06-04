import React from "react";
import defaultData from "../../data/data";
import { Link } from "react-router-dom";

const ArticleComponent = () => {
  const articleValue = () => {
    return defaultData.slice(0, 6).map((item, index) => {
      return (
        <article className="blog-post m-0 py-4 border-top" key={index}>
          <h2 className="display-6 mb-1">{item.title}</h2>
          <p className="text-body-secondary">
            ✒️ نوشته شده در تاریخ {item.date} توسط <a href="#"> ادمین </a>
          </p>

          <p>{item.content.slice(0, 300)}..</p>

          <Link
            to={"/" + item.title}
            onClick={() => window.scrollTo(0, 0)}
            className="btn btn-outline-primary rounded-pill"
          >
            ادامه مطلب..
          </Link>
        </article>
      );
    });
  };

  return (
    <React.Fragment>
      <h3 className="pb-4 mb-2">📰 محتوای منتشر شده</h3>
      {articleValue()}
    </React.Fragment>
  );
};
export default ArticleComponent;
