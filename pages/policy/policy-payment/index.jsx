import Link from 'next/link'
import React from 'react'

const PolicyPayment = () => {
  return (
    <div className='px-5'>
      <h1 className='sm:text-3xl text-2xl py-5 uppercase text-[#1D9BD7]'>Chính sách thanh toán</h1>
      <p className='py-4 font-medium'>Khi mua sản phẩm hoặc sử dụng dịch vụ tại www.cuongngaoto.com , quý khách có thể lựa chọn một trong các hình thức thanh toán sau:</p>
      <div>
        <h3 className='py-3 font-semibold text-[#1D9BD7]'>PHƯƠNG THỨC THANH TOÁN TRỰC TIẾP TẠI CÔNG TY HOẶC CÁC SHOWROOM CỦA CÔNG TY TẠI CÁC ĐỊA CHỈ SAU:</h3>
        <div className='text-sm py-2'>
          <p><span className='font-semibold'>Chi nhánh 1:</span> 296A - An Dương Vương - P.4 - Q.5, TP.HCM - ĐT: (028) 38 337 447</p>
          <p><span className='font-semibold'>Chi nhánh 2:</span> 301-303 An Dương Vương phường 3 quận 5, TP.HCM</p>
          <p><span className='font-semibold'>Chi nhánh 3:</span> 295 An Dương Vương, P3, Q5, TP.HCM - ĐT: (028) 39 381 599</p>
          <p><span className='font-semibold'>Chi nhánh 4:</span> 709A Phan Văn Trị Phường 7 Quận Gò Vấp, TP.HCM - ĐT: (028) 35 885 199</p>
        </div>
      </div>
      <div>
        <h3 className='py-3 font-semibold text-[#1D9BD7]'>PHƯƠNG THỨC GIAO HÀNG - TRẢ TIỀN MẶT (COD): </h3>
        <p className='text-sm'>Khách hàng nhận hàng và thanh toán tại nhà hoặc tại địa chỉ mà khách hàng yêu cầu giao khi đặt hàng.</p>
        <div className='md:flex flex-col items-center justify-center text-center'>
          <p className='text-[#1D9BD7] py-4 font-semibold text-xl '>CÔNG TY TNHH TM XUẤT NHẬP KHẨU CƯỜNG NGA </p>
          <p className='text-[#1D9BD7] py-4 font-semibold text-xl '>NGÂN HÀNG EXIMBANK - CN CHỢ LỚN </p>
          <p className='text-[#1D9BD7] py-4 font-semibold text-xl '>TÀI KHOẢN CTY : 100414851008 546</p>
          <p className='text-sm'>Email : dcxhcuongnga@yahoo.com.vn</p>
          <p className='text-sm'>Website : www.cuongngaoto.com</p>
          <p className='text-sm py-3'>------------- o0o ------------</p>
          <p className='font-semibold text-sm py-1'>GIỜ LÀM VIỆC : TỪ 7h30 ĐẾN 18h </p>
          <p className='font-semibold text-sm py-1'>TỪ THỨ HAI ĐẾN THỨ BẢY HÀNG TUẦN </p>
        </div>
        <div className='mt-10'>
          <h3 className='text-center py-2 text-xl text-[#1D9BD7] font-semibold'>TIN KHÁC</h3>
          <div className='md:flex flex-col gap-1 text-sm my-2 text-center'>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-refund'>Chính sách đổi trả/hoàn tiền</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-transport'>Chính sách vận chuyển</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-warranty'>Chính sách bảo hành</Link></p>
            <p className='hover:text-[#1D9BD7]'><Link href='/policy/policy-security'>Chính sách bảo mật thông tin</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolicyPayment