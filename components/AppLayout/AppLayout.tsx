import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FloatButton } from 'antd';
const AppLayout = ({children}:any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default AppLayout;
