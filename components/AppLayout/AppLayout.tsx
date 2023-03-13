import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slide from "../Slide";
import Services from "../Services";
import ProductHighlight from "../ProductHighlight";
import ServiceHighLight from "../ServiceHighLight";
import Paragraph from "../Paragraph";
import { FloatButton } from 'antd';
import Head from "next/head";
const AppLayout = () => {
  return (
    <div>
      <Head>
        <title>Thành công</title>
      </Head>
      <Header />
      <Slide />
      <Services />
      <ProductHighlight />
      <ServiceHighLight />
      <Paragraph />
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default AppLayout;
