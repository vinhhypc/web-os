import React from "react";
import { Button, Input } from "antd";
const FooterHead = () => {
  return (
      <div className="bg-[green] h-[120px] flex flex-col items-center justify-center gap-3">
          <h1 className="uppercase text-white font-semibold">Đăng kí nhận tin</h1>
      <div>
        <Input.Group compact>
          <Input
            style={{ width: "300px", borderRadius: "20px", height: "40px" }}
            placeholder="Nhập email của bạn ..."
          />
          <Button
            type="primary"
            className="bg-[#1D9BD7] h-10"
            style={{ borderRadius: "20px"}}
          >
            Đăng kí
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default FooterHead;
