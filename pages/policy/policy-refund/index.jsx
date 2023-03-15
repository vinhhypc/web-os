import React from "react";
import Link from "next/link";
const PolicyRefund = () => {
  return (
    <div className="px-5 text-sm">
      <h1 className="sm:text-3xl text-2xl py-5 uppercase text-[#1D9BD7]">
        Chính sách đổi trả / hoàn tiền
      </h1>
      <p className="py-3 text-base font-semibold text-[#1D9BD7] uppercase">Những trường hợp được đổi trả:</p>
      <div className="font-semibold text-sm flex flex-col gap-2 pl-5 ">
        <li>
          Hàng bị lỗi kỹ thuật và lỗi do nhà sản xuất như sản phẩm biến dạng,
          nứt, không sử dụng được,…
        </li>
        <li>
          Hàng bị hư hỏng, nứt vỡ do quá trình vận chuyển hàng cho khách của
          cuongngaoto.com
        </li>
        <li>Hàng giao không đúng mẫu mã, loại mà khách đã đặt</li>
        <li>Hàng giao bị thiếu không đủ bộ đi kèm (nếu là combo)</li>
      </div>
      <p className="my-2">
        Nếu phát hiện những trường hợp trên, quý khách vui lòng không nhận hàng
        và yêu cầu nhân viên giao nhận của chúng tôi xác nhận tình trạng máy
        ngay tại chỗ và yêu cầu đổi trả. Còn không khách hàng phải báo ngay tình
        trạng hàng bị lỗi về cho chúng tôi trong vòng 3 ngày kể từ ngày nhận
        hàng để được hỗ trợ đổi mới, quá 3 ngày chúng tôi sẽ không hỗ trợ giải
        quyết vì mặc định khách hàng đã đồng ý với sản phẩm được giao. Các
        trường hợp hư hỏng trong quá trình sử dụng sẽ được hỗ trợ sữa chữa theo
        chính sách bảo hành kèm theo máy, không áp dụng chính sách đổi trả.
      </p>
      <p className="py-3 text-base font-semibold text-[#1D9BD7] uppercase">Điều kiện và quy định đổi trả chung:</p>
      <div className="font-semibold text-sm flex flex-col gap-2 pl-5 ">
        <li>
          Sản phẩm bị lỗi được nhân viên công ty chúng tôi xác định và nhìn nhận
          là lỗi do nhà sản xuất
        </li>
        <li>Còn đầy đủ bao bì, vỏ hộp, chưa có dấu hiệu đã qua sử dụng;</li>
        <li>
          {" "}
          Thời gian đổi hàng không quá 3 ngày kể từ khi nhận hàng (căn cứ theo
          hóa đơn mua hàng hoặc biên lai ký nhận của bên giao hàng)
        </li>
        <li>
          Có đầy đủ các chứng từ kèm theo như biên nhận, hóa đơn, phiếu giao
          hàng, …
        </li>
      </div>
      <p className="my-2">
        Tuy nhiên đối với một số sản phẩm chúng tôi sẽ không áp dụng những điều
        kiện đổi trả giống như trên, trong quá trình tư vấn bán hàng chúng tôi
        sẽ tư vấn cụ thể về thời hạn cũng như hình thức đổi trả cho từng sản
        phẩm để khách hàng tham khảo khi có nhu cầu mua sản phẩm đó.
      </p>
      <p className="my-2">Lệ phí hoàn trả: phí hoàn trả sẽ hoàn toàn do cuongngaoto.com chi trả hoàn toàn nếu lỗi đó thuộc về công ty.</p>
      <p>Hình thức hoàn trả: Sẽ đổi mới sản phẩm cho khách hàng, trường hợp không còn sản phẩm hàng hóa đó trong kho, công ty cam kết hoàn trả 100% phí mà khách hàng đã thanh toán cho chúng tôi thông qua các hình thức như: tiền mặt tại công ty hoặc chuyển khoản cho khách hàng.</p>
      <div className="mt-10">
        <h3 className="text-center py-2 text-xl text-[#1D9BD7] font-semibold">
          TIN KHÁC
        </h3>
        <div className="md:flex flex-col gap-1 text-sm my-2 text-center">
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-payment">Chính sách thanh toán</Link>
          </p>
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-transport">Chính sách vận chuyển</Link>
          </p>
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-warranty">Chính sách bảo hành</Link>
          </p>
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-security">
              Chính sách bảo mật thông tin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyRefund;
