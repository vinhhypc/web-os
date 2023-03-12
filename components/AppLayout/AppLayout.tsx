import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slide from "../Slide";
import Services from "../Services";
import ProductHighlight from "../ProductHighlight";
import ServiceHighLight from "../ServiceHighLight";
import Paragraph from "../Paragraph";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Slide />
      <Services />
      <ProductHighlight />
      <ServiceHighLight />
      <Paragraph />
      <Footer />

    </div>
  );
};

export default AppLayout;
