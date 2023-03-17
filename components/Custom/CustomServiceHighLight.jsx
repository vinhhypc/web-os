import { Rate, Image, Carousel } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";
function GetLink() {
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    const fetchServiceList = async () => {
      try {
        const params = {
          skip: 1,
          limit: 4,
        };
        const response = await productApi.getAll(params);
        setServiceList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServiceList();
  }, []);
  const services = serviceList.products;
  const responsive = [
    {
      breakpoint: 1640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  return (
    <Carousel autoplay infinite responsive={responsive} >
      {services?.map((service) => {
        return (
          <Link
            href="/highlight-product"
            key={service.id}
            className="w-[280px]"
          >
            <div
              className="w-[280px] flex flex-col bg-[#F5F5F5] rounded-sm shadow-md hover:shadow-xl"
              style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
            >
              <Image
                src={`${service.thumbnail}`}
                height={200}
                style={{
                  objectFit: "!scale-down",
                }}
                preview={false}
              />
              <div className="flex flex-col justify-start items-start ml-2 gap-2 my-2">
                <>
                  <Rate
                    disabled
                    defaultValue={service.rating}
                    className="text-xs"
                    allowHalf
                  />
                </>
                <h2 className="text-xs ">{service.title}</h2>
                <p className="text-[#1D9BD7] text-xs">{service.price} $</p>
              </div>
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
}
export default function CustomServiceHighLight() {
  return (
    <div className="mx-[10%] ">
      <GetLink />
    </div>
  );
}
