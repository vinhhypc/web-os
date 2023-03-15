import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumb } from "antd";

const BreadCrumb = () => {
  const location = useRouter();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div className="px-5 mt-3">
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link href="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            ""
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={index}>{capatilize(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index}>
                <Link href={`${routeTo}`}>{capatilize(name)}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
