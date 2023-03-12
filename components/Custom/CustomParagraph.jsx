import { Image } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
export default function CustomProduct() {
  return (
    <div className="w-[250px] flex flex-col bg-white ">
      <Image
        src="/service.png"
        width={250}
        style={{ borderRadius: "5px" }}
      />
      <div className="flex flex-col justify-start items-start ml-2 gap-2 my-2">
        <div className="flex gap-2 opacity-60 text-[11px] items-center">
            <HistoryOutlined />
            <p>09/03/2023</p>
        </div>
        <h2 className="text-xs font-bold text-start ">Đánh bóng sơn ô tô, lấy lại vẻ đẹp ban đầu</h2>
        <p className=" text-xs text-start">Đánh bóng sơn ô tô là phương pháp làm đẹp ô tô hiệu quả và phổ biến trong giới chủ xe hiện nay.
        Tuy nhiên ...
        </p>
      </div>
    </div>
  );
}

