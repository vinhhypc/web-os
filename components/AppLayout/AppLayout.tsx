import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FloatButton } from 'antd';
import BreadCrumb from '../BreadCrumb'
const AppLayout = ({children}:any) => {
  return (
    <div>
      <Header />
      <BreadCrumb/>
      {children}
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default AppLayout;
