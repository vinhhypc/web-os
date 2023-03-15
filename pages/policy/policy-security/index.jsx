import Link from "next/link";
import React from "react";
const PolicySecurity = () => {
  return (
    <div className="px-5 text-sm">
      <h1 className="sm:text-3xl text-2xl py-5 uppercase text-[#1D9BD7]">
        Chính sách bảo mật thông tin
      </h1>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase">
        {" "}
        1. Mục đích và phạm vi thu thập:
      </p>
      <div className="flex flex-col gap-2 pl-5">
        <li>
          Việc thu thập dữ liệu chủ yếu trên website cuongngaoto.com bao gồm:
          email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ khách
          hàng (thành viên). Đây là các thông tin mà cuongngaoto.com cần khách
          hàng cung cấp bắt buộc khi đăng ký sử dụng dịch vụ và để
          cuongngaoto.com liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch
          vụ trên website nhằm đảm bảo quyền lợi cho cho người tiêu dùng.
        </li>
        <li>
          Trong quá trình giao dịch thanh toán tại websitecuongngaoto.com, chúng
          tôi chỉ lưu giữ thông tin chi tiết về đơn hàng đã thanh toán của khách
          hàng, các thông tin về số tài khoản ngân hàng của khách hàng sẽ không
          được lưu giữ.
        </li>
        <li>
          Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động
          sử dụng dịch vụ dưới thông tin đăng ký và thông tin xác nhận đơn hàng
          trong hộp thư điện tử của mình. Ngoài ra, khách hàng có trách nhiệm
          thông báo kịp thời cho webiste cuongngaoto.com về những hành vi sử
          dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật
          khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
        </li>
      </div>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase">
        2. Phạm vi sử dụng thông tin:
      </p>
      <p>Công ty sử dụng thông tin thành viên cung cấp để:</p>
      <div className="flex flex-col gap-2 pl-5 pt-2">
        <li>Cung cấp các dịch vụ đến khách hàng</li>
        <li>
          {" "}
          Gửi các thông báo về các hoạt động trao đổi thông tin giữa khách hàng
          và website cuongngaoto.com;
        </li>
        <li>
          {" "}
          Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của khách hàng
          hoặc các hoạt động giả mạo khách hàng;
        </li>
        <li>
          Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt.
        </li>
        <li>
          {" "}
          Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác nhận
          và liên hệ có liên quan đến giao dịch tại cuongngaoto.com;
        </li>
        <li>
          Trong trường hợp có yêu cầu của pháp luật: Công ty có trách nhiệm hợp
          tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ cơ quan tư
          pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên
          quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra,
          không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.
        </li>
      </div>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase">
        3. Thời gian lưu trữ thông tin:
      </p>
      <div className="pl-5 ">
        <li>
          Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu
          hủy bỏ Còn lại trong mọi trường hợp thông tin cá khách hàng sẽ được
          bảo mật trên máy chủ của cuongngaoto.com.
        </li>
      </div>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase">
        4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân:
      </p>
      <div className="flex flex-col gap-2 pl-5">
        <li>Công ty TNHH Thương Mại Xuất Nhập Khẩu Cường Nga</li>
        <li>Địa chỉ: 128 Mã Lò, P. Bình Trị Đông, Q. Bình Tân, Tp. HCM</li>
        <li>Email: dcxhcuongnga@yahoo.com.vn</li>
        <li>Hotline: 08383337447</li>
      </div>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase">
        5. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá
        nhân của mình:
      </p>
      <div className="flex flex-col gap-2 pl-5">
        <li>
          Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ
          thông tin cá nhân của mình bằng cách yêu cầu www.cuongngaoto.com thực
          hiện việc này.
        </li>
        <li>
          Khách hàng có quyền gửi khiếu nại về việc bị tiết lộ thông tin cho bên
          thứ 3 đến Ban quản trị của website www.cuongngaoto.com. Khi tiếp nhận
          những phản hồi này, www.cuongngaoto.com sẽ xác nhận lại thông tin,
          trường hợp đúng như phản ánh của khách hàng tùy theo mức độ,
          www.cuongngaoto.com sẽ có những biện pháp xử lý kịp thời.
        </li>
      </div>
      <p className="py-3 font-semibold text-[#1D9BD7] uppercase">6. Cam kết bảo mật thông tin cá nhân khách hàng:</p>
      <div className="flex flex-col gap-2 pl-5">
        <li>
          Thông tin cá nhân của khách hàng trên www.cuongngaoto.com được
          www.cuongngaoto.com cam kết bảo mật tuyệt đối theo chính sách bảo vệ
          thông tin cá nhân của www.cuongngaoto.com. Việc thu thập và sử dụng
          thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của
          khách hàng đó trừ những trường hợp pháp luật có quy định khác.
        </li>
        <li>Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của khách hàng khi không có sự cho phép đồng ý từ khách hàng.</li>
        <li>Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân khách hàng, www.cuongngaoto.com sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho khách hàng được biết.</li>
        <li>Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng bao gồm thông tin hóa đơn kế toán chứng từ số hóa trên www.cuongngaoto.com.</li>
        <li>Ban quản lý www.cuongngaoto.com yêu cầu các cá nhân khi đăng ký/mua hàng phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email, điện thoại,…., và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản lý www.cuongngaoto.com không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của khách hàng đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.</li>
      </div>
      <div className="mt-10">
        <h3 className="text-center py-2 text-xl text-[#1D9BD7] font-semibold">
          TIN KHÁC
        </h3>
        <div className="md:flex flex-col gap-1 text-sm my-2 text-center">
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-refund">
              Chính sách đổi trả/hoàn tiền
            </Link>
          </p>
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-transport">Chính sách vận chuyển</Link>
          </p>
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-warranty">Chính sách bảo hành</Link>
          </p>
          <p className="hover:text-[#1D9BD7]">
            <Link href="/policy/policy-payment">Chính sách thanh toán</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicySecurity;
