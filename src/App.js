import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";
import HomePage from "./pages/home";
import ServicePage from "./pages/service";
import BlogPage from "./pages/blog";
import NotFound from "./pages/notFound";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import SinglePage from "./pages/single";
import defaultData from "./data/data";
import React from "react";

function App() {
  const lorem =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.";
  const titleRoute = defaultData.map((item, index) => {
    return (
      <Route
        path={"/" + item.title}
        element={
          <SinglePage
            title={item.title}
            content={item.content}
            date={item.date}
          />
        }
        key={index}
      />
    );
  });
  return (
    <Router basename="/101">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage title={"خدمات"} />} />
        <Route path="/blog" element={<BlogPage title={"بلاگ"} />} />
        <Route
          path="/about"
          element={<AboutPage title={"درباره ما"} desc={lorem} />}
        />
        <Route
          path="/contact"
          element={<ContactPage title={"تماس با ما"} desc={lorem} />}
        />
        {titleRoute}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
