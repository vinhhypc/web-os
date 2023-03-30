import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import serviceApi from "../../api/serviceApi";
import { Image } from "antd";
import { Skeleton } from "antd";
import axios from "axios";
const ServiceDetail = () => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  const router = useRouter();
  const [service, setService] = useState();
  const idservice = router.query.id;
  const [loading, setLoading] = useState(true);
  const getService = useCallback(async () => {
    if (idservice) {
      const res = await axios.get(`https://test-vinhhypc.vercel.app/services/${idservice}`)
      setService(res.data);
      setLoading(false);
    }
  }, [idservice]);

  useEffect(() => {
    getService();
  }, [getService]);
  return (
    <Skeleton
      loading={loading}
      avatar
      className="flex items-center justify-center px-[20%]"
    >
      <div className="md:flex text-center justify-evenly gap-4">
        <div
          className="text-center md:mx-0 mx-2"
          style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
        >
          <Image src={service?.thumbnail} width={350} />
        </div>
        <div className="md:self-center text-center md:text-start mb-10">
          <h1 className="text-[#1D9BD7] text-center md:text-start font-semibold my-2 px-[10%] md:px-0">
            {service?.title}
          </h1>
          <div>
            <hr className="my-2 md:w-full mx-auto w-1/3 " />
            <p >{formatter.format(service?.price)}</p>
            <hr className="my-2 md:w-full mx-auto w-1/3 " />
            <p>
              <span className="font-semibold">Lượt xem :</span> {service?.stock}
            </p>
            <hr className="my-2 md:w-full mx-auto w-1/3 " />
            <p>
              <span className="font-semibold">Danh mục : </span>
              {service?.category}
            </p>
          </div>
        </div>
      </div>
    </Skeleton>
  );
};
export default ServiceDetail;
