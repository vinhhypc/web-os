import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Affix, FloatButton } from "antd";
import BreadCrumb from "../BreadCrumb";
import { useRouter } from "next/router";
import Admin from "../../pages/admin/AdminLayout";
const AppLayout = ({ children }: any) => {
  const router = useRouter();
  const pathRouter = router.pathname.split("/");
  const removeLayout = ["admin"].includes(pathRouter[1]);
  return removeLayout ? (
    <Affix>
    <div className="flex">
      <Admin />
      {children}
    </div>
    </Affix>
  ) : (
    <div>
      <Header />
      <BreadCrumb />
      {children}
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default AppLayout;
