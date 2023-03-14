import React from "react";
import Image from "next/image";
import { RightCircleOutlined } from '@ant-design/icons';
export default function CustomServiceBox() {
  return (
    <div className="flex justify-center gap-6 flex-wrap ">
        <div className="relative ">
            <Image
              alt="test"
              src='/img1.jpg'
              width={250}
              height={250}
              className='rounded-md'
            
            >
            </Image>
          <div className="absolute bottom-2 left-4 text-white ">
            <h1 className=" text-sm font-semibold mb-2 bg-slate-900 px-2 py-1 rounded-md">Vệ sinh, tẩy mâm</h1>
            <div className=" flex items-center bg-[#1D9BD7] px-2 py-1 rounded-xl w-fit">
              <p className="text-xs mr-2">Chi tiết</p>
              <RightCircleOutlined style={{fontSize:'12px',color:'white'}} />
            </div>
          </div>
        </div>
        <div className="relative ">
            <Image
              alt="test"
              src='/img2.jpg'
              width={250}
              height={250}
              className='rounded-md'
            >
            </Image>
          <div className="absolute bottom-2 left-4 text-white ">
            <h1 className=" text-sm font-semibold mb-2 bg-slate-900 px-2 py-1 rounded-md">Vệ sinh, tẩy mâm</h1>
            <div className=" flex items-center bg-[#1D9BD7] px-2 py-1 rounded-xl w-fit">
              <p className="text-xs mr-2">Chi tiết</p>
              <RightCircleOutlined style={{fontSize:'12px',color:'white'}} />
            </div>
          </div>
        </div>
        <div className="relative ">
            <Image
              alt="test"
              src='/img3.jpg'
              width={250}
              height={250}
              className='rounded-md'
            >
            </Image>
          <div className="absolute bottom-2 left-4 text-white ">
            <h1 className=" text-sm font-semibold mb-2 bg-slate-900 px-2 py-1 rounded-md">Vệ sinh, tẩy mâm</h1>
            <div className=" flex items-center bg-[#1D9BD7] px-2 py-1 rounded-xl w-fit">
              <p className="text-xs mr-2">Chi tiết</p>
              <RightCircleOutlined style={{fontSize:'12px',color:'white'}} />
            </div>
          </div>
        </div>
        <div className="relative ">
            <Image
              alt="test"
              src='/img4.jpg'
              width={250}
              height={250}
              className='rounded-md'
            >
            </Image>
          <div className="absolute bottom-2 left-4 text-white ">
            <h1 className=" text-sm font-semibold mb-2 bg-slate-900 px-2 py-1 rounded-md">Vệ sinh, tẩy mâm</h1>
            <div className=" flex items-center bg-[#1D9BD7] px-2 py-1 rounded-xl w-fit">
              <p className="text-xs mr-2">Chi tiết</p>
              <RightCircleOutlined style={{fontSize:'12px',color:'white'}} />
            </div>
          </div>
        </div>
    </div>
  );
}
