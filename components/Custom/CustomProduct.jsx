import { Image, Rate } from "antd";

export default function CustomProduct() {
  return (
    <div className="w-[250px] flex flex-col ">
      <Image
        src="/volang.jpg"
        width={250}
        style={{ borderRadius: "5px" }}
      />
      <div className="flex flex-col justify-start items-start ml-2 gap-2 my-2">
        <><Rate disabled defaultValue={5} className="text-xs" /></>
        <h2 className="text-xs ">K28 - Phím cách nhiệt Vkool</h2>
        <p className="text-[#1D9BD7] text-xs">219.000 đ</p>
      </div>
    </div>
  );
}
// import React from "react";
// import { Card, Rate } from "antd";
// import { Image, Typography } from "antd";
// const { Meta } = Card;

// export default function Posts() {
//   return (
//     <div>
//       <Card
//         hoverable
//         style={{ width: 200 }}
//         cover={
//           <Image
//             style={{ objectFit: "cover" }}
//             alt="example"
//             src="/volang.jpg"
//           />
//         }
//       >
//         <Meta
//           title={
//             <Typography.Paragraph
//               ellipsis={{ rows: 2, expandable: true, symbol: "xem thêm..." }}
//             >
//               Phím cách nhiệt Vkool Phím cách nhiệt Vkool Phím cách nhiệt Vkool
//             </Typography.Paragraph>
//           }
//           description={<Rate disabled defaultValue={5} className="text-xs" />}
//         />
//       </Card>
//     </div>
//   );
// }
