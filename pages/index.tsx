import React from "react";
import Slide from "../components/Slide";
import Services from "../components/Services";
import ProductHighlight from "../components/ProductHighlight";
import ServiceHighLight from "../components/ServiceHighLight";
import Paragraph from "../components/Paragraph";
export default function Home() {
  return (
    <div className="home">
      <Slide />
      <Services />
      <ProductHighlight />
      <ServiceHighLight />
      <Paragraph />
    </div>
  )
}
