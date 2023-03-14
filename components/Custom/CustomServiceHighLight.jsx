import { Rate,Image} from "antd";
import Link from "next/link";
export default function CustomServiceHighLight() {
  return (
    <Link href='/highlight-service'>
    <div className="w-[250px] flex flex-col bg-[#F5F5F5] rounded-sm shadow-md hover:shadow-xl">
      <Image
        src="/volang.jpg"
        width={250}
        style={{ borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}
        preview={false}
      />
      <div className="flex flex-col justify-start items-start ml-2 gap-2 my-2">
        <><Rate disabled defaultValue={5} className="text-xs" /></>
        <h2 className="text-xs ">K28 - Phím cách nhiệt Vkool</h2>
        <p className="text-[#1D9BD7] text-xs">219.000 đ</p>
      </div>
    </div>
    </Link>
  );
}
  