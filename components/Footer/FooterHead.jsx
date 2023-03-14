import React from "react";
import { Button, Input } from "antd";
const FooterHead = () => {
  return (
      <div className=" h-[120px] flex flex-col items-center justify-center gap-3" style={{background: 'linear-gradient(to right, #00b4db, #0083b0)'}}>
          <h1 className="uppercase text-white font-semibold">Đăng kí nhận tin</h1>
      <div>
        <Input.Group compact className="max-[350px]:!flex max-[350px]:!flex-col max-[350px]:!gap-1">
          <Input
            className='sm:!w-[300px] sm:!rounded-[20px] sm:!h-10 !w-[250px] !rounded-[20px] !h-8'
            placeholder="Nhập email của bạn ..."
          />
          <Button
            type="primary"
            className="bg-[#1D9BD7] sm:!h-10 sm:!rounded-[20px] !h-8 !rounded-[20px]"
          >
            Đăng kí
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default FooterHead;
