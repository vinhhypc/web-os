import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import pic1 from "../../public/slide1.jpg";
import pic2 from "../../public/slide2.jpg";

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} autoplay={true} className='mt-5' draggable dots={false}>
      <div>
        <Image alt="pic1" src={pic1} />
      </div>
      <div>
        <Image alt="pic2" src={pic2} />
      </div>
      <div>
        <Image alt="pic1" src={pic1} />
      </div>
      <div>
        <Image alt="pic2" src={pic2} />
      </div>
    </Carousel>
  );
};

export default App;
