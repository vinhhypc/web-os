import React, { useState } from 'react';
import { Input, Modal } from 'antd';
import {SearchOutlined} from "@ant-design/icons"
const { Search } = Input;
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch =(e:any) =>{
    console.log(e);
  }

  return (
    <>
      <SearchOutlined onClick={showModal} className='!text-lg'/>
      <Modal title="Tìm kiếm dịch vụ, sản phẩm..." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Search placeholder="input search text" onSearch={onSearch} allowClear />
      </Modal>
    </>
  );
};

export default App;