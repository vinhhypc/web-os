import React from "react";
import Link from "next/link";
const PolicyWarranty = () => {
  return (
    <div className="px-5">
      <h1 className="sm:text-3xl text-2xl py-5 uppercase text-[#1D9BD7]">Chính sách bảo hành</h1>
      <p className="py-3 text-sm">
        www.cuongngaoto.com cam kết bảo hành trì miễn phí mọi thiết bị bán ra
        trong thời hạn bảo hành theo điều kiện của hãng hoặc theo thời gian quy
        định trên phiếu bảo hành đối với từng sản phẩm cụ thể do chúng tôi cung
        cấp nếu lỗi thuộc về chúng tôi. Trong thời gian này mọi sự cố phát sinh
        hoặc gặp bất kì trờ ngại nào do lỗi kỹ thuật, khách hàng hãy liên hệ
        trực tiếp với chúng tôi (thông tin ghi trên phiếu bảo hành) để nhận được
        chính sách hậu mãi thỏa đáng. Các điều kiện bảo hành được tuân thủ theo
        các điều kiện bảo hành của các nhà sản xuất . www.cuongngaoto.com sẽ sửa
        chữa miễn phí đúng theo những điều kiện được thể hiện trong phiếu bảo
        hành kèm theo.
      </p>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase">  Những trường hợp được bảo hành miễn phí khi đảm bảo các điều kiện sau:</p>
      <div className="text-sm flex flex-col gap-2 pl-5">
        <li> Sản phẩm còn thời hạn bảo hành (tính từ ngày được ghi trên hóa đơn chứng từ mua hàng), có tem bảo hành và phiếu bảo hành của chính công ty (thể hiện đầy đủ thông tin không được tẩy xóa, sửa chữa).</li>
        <li>Thời gian bảo hành được ghi trên phiếu bảo hành và theo quy định của từng hãng sản xuất đối với tất cả sự cố về mặt kỹ thuật</li>
        <li> Số serial trên sản phẩm, trên phiếu bảo hành và trên phiếu xuất bán hàng phải trùng khớp với nhau.</li>
        <li> Sản phẩm phải được lắp đặt theo đúng hướng dẫn sử dụng, catalogue theo máy.</li>
        <li> Sản phẩm bị hư hỏng do linh kiện trong máy hoặc do nhà sản xuất.</li>
      </div>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase"> Những trường hợp sau sẽ không được bảo hành miễn phí:</p>
      <div className="text-sm flex flex-col gap-2 pl-5">
        <li>Thiết bị hết thời hạn bảo hành ghi trên trên phiếu bảo hành, tem bảo hành hoặc biên bản bàn giao thiết bị.</li>
        <li>Các thiết bị không còn nguyên tem bảo hành của hãng sản xuất, của nhà cung cấp, của www.cuongngaoto.com. Tem bảo hành đã bị sửa đổi hoặc không chính xác.</li>
        <li>Số mã vạch trên thiết bị không xác định được hoặc sai so với phiếu bảo hành.</li>
        <li>Thiết bị đã bị cháy nổ, rơi vỡ, va đập, trầy xước,...</li>
        <li>Hư hỏng do thiên tai, ẩm ướt, hoen gỉ, côn trùng xâm nhập hoặc con người làm hỏng.</li>
        <li>Các phần mềm cung cấp miễn phí kèm theo máy.</li>
        <li>Các phụ kiện tự hao mòn trong quá trình sử dụng</li>
        <li>Tự ý tháo dỡ, sửa chữa bởi nơi khác không phải là nhân viên www.cuongngaoto.com</li>
      </div>
      
      <div className='mt-10'>
          <h3 className='text-center py-2 text-xl font-semibold text-[#1D9BD7]'>TIN KHÁC</h3>
          <div className='md:flex flex-col gap-1 text-sm my-2 text-center'>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-refund'>Chính sách đổi trả/hoàn tiền</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-transport'>Chính sách vận chuyển</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-payment'>Chính sách thanh toán</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-security'>Chính sách bảo mật thông tin</Link></p>
          </div>
        </div>
    </div>
  );
};

export default PolicyWarranty;
