import React from 'react'
import { Menu, Input } from 'antd';
import type { MenuProps } from 'antd/es/menu';
import Image from 'next/image';
import { WhatsAppOutlined, YoutubeOutlined,FacebookOutlined,GoogleOutlined } from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];
const Navbar = () => {
  const onSearch =(value: string) =>{
    console.log(value)
  }
  const {Search} = Input
  const items:MenuItem[]=[
      {label: 'Trang chủ',key: 'home'},
      {label: 'Giới thiệu',key: 'intro'},
      {label: 'Sản phẩm',key: 'product',children:[{
        label : 'Chăm sóc xe', key: 'chamsocxe'
      },
      {
        label : 'Camera hành trình', key: 'camera'
      },
      {
        label : 'Màn hình android', key: 'android'
      },
    ]},
      {label: 'Dịch vụ',key: 'service',children:[{
        label : 'Độ đèn', key: 'lamp'
      },
      {
        label : 'Lót sàn ô tô', key: 'san'
      },
      {
        label : 'Màn hình android', key: 'android'
      },
    ]},
      {label: 'Chính sách',key: 'policy'},
      {label: 'Thanh toán',key: 'payment'},
      {label: 'Tư vấn',key: 'advise'},
      {label: 'Bảng giá',key: 'price'},
      {label: 'Liên hệ',key: 'contact'},
    ]
  return (
    <div>
      <div className='h-10 bg-[#1D9BD7] text-sm flex items-center justify-between px-40'>
        <div className= 'flex text-white gap-2 items-center'>
          <div className=''>Cần hỗ trợ ?</div>
          <span><WhatsAppOutlined  style={{ fontSize: '20px'}}/></span>
          <span>Gọi 0903 330 937</span>
        </div>
        <div className='text-white flex gap-4'>
          <FacebookOutlined style={{ fontSize: '20px'}}/>
          <YoutubeOutlined style={{ fontSize: '20px',}}/>
          <GoogleOutlined style={{ fontSize: '20px'}}/>
        </div>
      </div>
      <div className='flex items-center justify-evenly'>
        <div>
          <Image src='/Logo.png' width={120} height={60} alt='logo' />
        </div>
        <Menu 
            className='h-14 flex items-center justify-end gap-2 uppercase'
            items={items}
            mode='horizontal'
            defaultValue='home'
        />
      </div>
    </div>
  )
}

export default Navbar