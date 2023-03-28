import { Image } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import postApi from "../../api/postApi";
export default function CustomProduct() {
  const [postList, setPostList] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await postApi.getHomePost();
        setPostList(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostList();
  }, []);
  const posts = postList?.data
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-5 flex-[1_1_25%] min-[890px]:mx-[15%] mx-[10%] min-[1256px]:mx-0">
    {posts?.map((post) =>{
      return(
        <Link href={`/post/${post.id}`} key={post.id}>
      <div className="w-[280px] flex flex-col bg-white shadow-md rounded-sm hover:shadow-xl">
        <Image src={post.image[0]} width={280} height={200} preview={false} style={{objectFit:"!scale-down"}} />
        <div className="flex flex-col justify-start items-start ml-2 gap-2 my-2">
          <div className="flex gap-2 opacity-60 text-[11px] items-center cursor-default">
            <HistoryOutlined />
            <p>{post.postDate}</p>
          </div>
          <h2 className="text-xs font-bold text-start hover:text-[#1D9BD7] px-2 ">
            {post.title} 
          </h2>
          <p className=" text-xs text-start cursor-default px-2 ">
            {(post.bodyfirst).slice(0,60)}...
          </p>
        </div>
      </div>
    </Link>
      )
    })}
    
    </div>
  );
}
