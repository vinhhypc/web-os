import React from "react";
import Link from "next/link";
const PolicyTransport = () => {
  return (
    <div className="px-5">
      <h1 className="sm:text-3xl text-2xl py-5 uppercase text-[#1D9BD7]">
        Chính sách vận chuyển
      </h1>
      <p className="text-sm py-2">
        Khách hàng mua sắm tại www.cuongngaoto.com có thể xem và nhận hàng trực
        tiếp tại cửa hàng của www.cuongngaoto.com.
      </p>
      <p className="text-sm py-2">
        Trường hợp khách hàng mua hàng trực tuyến hoặc có nhu cầu nhờ vận chuyển
        đến tận nơi theo yêu cầu thì công ty chúng tôi có cung cấp dịch vụ vận
        chuyển cho khách hàng. Thông thường www.cuongngaoto.com sẽ vận chuyển
        cho khách hàng trong khoảng 02 – 05 ngày làm việc kể từ khi nhận được
        đơn hàng. Tuy nhiên, cũng có trường hợp việc giao hàng kéo dài hơn nhưng
        chỉ xảy ra trong những tình huống bất khả kháng như sau:
      </p>
      <div className="text-sm py-2 pl-2 flex gap-2 flex-col">
        <li>
          Nhân viên www.cuongngaoto.com liên lạc với khách hàng qua điện thoại
          không được nên không thể giao hàng.
        </li>
        <li> Địa chỉ giao hàng bạn cung cấp không chính xác hoặc khó tìm.</li>
        <li>
          Số lượng đơn hàng của www.cuongngaoto.com tăng đột biến khiến việc xử
          lý đơn hàng bị chậm.
        </li>
        <li>
          Đối tác cung cấp hàng cho www.cuongngaoto.com chậm hơn dự kiến khiến
          việc giao hàng bị chậm lại hoặc đối tác vận chuyển giao hàng bị chậm
        </li>
      </div>
      <p className="text-sm py-2">
        Về phí vận chuyển, www.cuongngaoto.com miễn phí cho tất cả đơn hàng mua
        online trong nội thành thành phố Hồ Chí Minh trong phạm vị bán kính 3km
        tính từ vị trí các cửa hàng của www.cuongngaoto.com hoặc trị giá các đơn
        hàng từ 2.000.000đ trở lên, các trường hợp còn lại chúng tôi sẽ tính phí
        hoặc đối với khách tỉnh nếu có nhu cầu mua sản phẩm của
        www.cuongngaoto.com thì www.cuongngaoto.com sẽ nhờ dịch vụ giao nhận,
        chuyển phát nhanh của các công ty dịch vụ vận chuyển và phí sẽ được tính
        theo phí của các đơn vị cung cấp dịch vụ vận chuyển. Trước khi giao hàng
        Công ty gọi xác nhận và báo phí vận chuyển cụ thể trước khi chuyển hàng
        cho khách.
      </p>
      <div className='mt-10'>
          <h3 className='text-center py-2 text-xl text-[#1D9BD7] font-semibold'>TIN KHÁC</h3>
          <div className='md:flex flex-col gap-1 text-sm my-2 text-center'>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-refund'>Chính sách đổi trả/hoàn tiền</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-payment'>Chính sách thanh toán</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-warranty'>Chính sách bảo hành</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-security'>Chính sách bảo mật thông tin</Link></p>
          </div>
        </div>
    </div>
  );
};

export default PolicyTransport;
