import { Rate, Image } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import serviceApi from "../../api/serviceApi"
import axios from "axios";
function GetLink() {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    const fetchServiceList = async () => {
      try {
        const response = await serviceApi.getHomeService();
        setServiceList(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServiceList();
  }, []);
  const services = serviceList.data;
  return (
    <>
      {services?.map((service) => {
        return (
          <Link
            href={`/service/${service.id}`}
            key={service.id}
          >
            <div
              className="w-[280px] flex flex-col bg-[#F5F5F5] rounded-sm shadow-md hover:shadow-xl"
              style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
            >
              <Image
                src={`${service.thumbnail}`}
                width={278}
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
                <h2 className="text-xs text-start truncate w-[200px] uppercase ">{service.title}</h2>
                <p className="text-[#1D9BD7] text-xs">{formatter.format(service.price)} </p>
              </div>
            </div>
          </Link>
        );
      })}

    </>
  );
}
export default function CustomServiceHighLight() {
  return (
    <div className=" flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-5 flex-[1_1_25%] min-[890px]:mx-[15%] mx-[10%] min-[1256px]:mx-0 ">
      <GetLink />
    </div>
  );
}
