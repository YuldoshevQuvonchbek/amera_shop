import { RxHamburgerMenu } from "react-icons/rx";
import { getCatygory } from "@/service/getCatygory";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ServiceIcon from "../../public/serviceIcon";
import ServiceIcon2 from "../../public/serviceIcon2";
import ServiceIcon3 from "../../public/serviceIcon3";
import ServiceIcon4 from "../../public/serviceIcon4";
import ServiceIcon5 from "../../public/serviceIcon5";
import CatygoryInfoCart from "./home/components/carts/catygoryInfoCart";
import ProductList from "./home/productList/productList";
import SubCatygory from "./home/subCatygoryList/page";
import Subbannerlist from "./home/components/subbannerlist/subbannerlist";
import BrandList from "./home/components/brandList/brandList";
import Link from "next/link";

import HeroBanner from "./home/components/banners/heroBanner";
import DiscountBanner2 from "./home/components/banners/discountBanner2";
import DiscountBanner3 from "./home/components/banners/discountBanner3";
import DiscountBanner from "./home/components/banners/discountBanner";
import Subbannerlist2 from "./home/components/subbannerlist/subbannerlist2";

export default async function Home() {
  const catygorydata = await getCatygory();
  return (
    <div className=" bg-bodycolor">
      <div className="container">
        <div className=" flex py-8   gap-8 ">
          <div className=" hidden lg:block bg-white ">
            {/* Catygory bar :) */}
            <div className="px-4  w-[275px]">
              <div className=" flex gap-5 items-center py-5  ">
                <RxHamburgerMenu className=" w-5 h-6" />
                <span className="text-sm font-medium">Shop By Department</span>
              </div>
              <Menubar className="flex h-[435px]  overflow-y-scroll  flex-col">
                {catygorydata.results.map((item) => (
                  <div className=" border-t-2 " key={item.id}>
                    <MenubarMenu>
                      <MenubarTrigger className=" text-sm font-normal ">
                        <div className=" py-2 flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-7 h-7"
                          />
                          <h1 className=" text-sm font-normal hover:text-primarycolor duration-200">
                            {item.title}
                          </h1>
                        </div>
                      </MenubarTrigger>
                      {item.children.length > 0 ? (
                        <MenubarContent className=" relative w-[400px] h-[300px] ml-[260px]">
                          <div className="p-4 w-[200px]">
                            {item?.children?.map((item) => (
                              <div
                                key={item.id}
                                className=" cursor-pointer hover:text-primary py-2 flex items-center gap-4"
                              >
                                <img
                                  className="w-7 h-7"
                                  src={item.image}
                                  alt=""
                                />
                                <Link href={`/products/${item.id}`}>
                                  <h1 className=" text-sm hover:text-primarycolor duration-200 font-normal">
                                    {item.title}
                                  </h1>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <img
                            className=" absolute z-[-30] bottom-0 right-0 w-[150px]"
                            src={item.image}
                            alt="image"
                          />
                        </MenubarContent>
                      ) : null}
                    </MenubarMenu>
                  </div>
                ))}
              </Menubar>
            </div>
          </div>
          {/* banner :) */}
          <div className=" 2xl:max-w-[1050px] xl2:max-w-[950px] lg:max-w-[750px] ml:w-full   ">
            <HeroBanner />
          </div>
        </div>
      </div>
      {/* service cart :) */}
      <div className=" container">
        <div className="  rounded bg-white py-8  px-4 ">
          <div className=" lg:flex lg:flex-wrap  gap-4 md:grid-cols-3 sm:grid-cols-2  grid items-center justify-between">
            <div className=" flex items-center gap-4">
              <ServiceIcon />
              <div>
                <h1 className=" text-sm font-medium">Free Delivery</h1>
                <p className=" text-sm font-normal">For all oders over $120</p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <ServiceIcon2 />
              <div>
                <h1 className=" text-sm font-medium">Safe Payment</h1>
                <p className=" text-sm font-normal">100% secure payment</p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <ServiceIcon3 />
              <div>
                <h1 className=" text-sm font-medium">Shop With Confidence</h1>
                <p className=" text-sm font-normal">If goods have problems</p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <ServiceIcon4 />
              <div>
                <h1 className=" text-sm font-medium">24/7 Help Center</h1>
                <p className=" text-sm font-normal">Dedicated 24/7 support</p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <ServiceIcon5 />
              <div>
                <h1 className=" text-sm font-medium">Friendly Services</h1>
                <p className=" text-sm font-normal">
                  30 day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* aksiyacart :) */}
      <div className="container  pt-8">
        <DiscountBanner />
      </div>

      <div className=" container">
        <div className="pb-7 items-center gap-1 flex">
          <h1 className=" text-xl font-medium text-nowrap  ">
            Top categories
            <strong className=" text-nowrap text-xl font-normal">
              Of the month
            </strong>
          </h1>
          <span className=" h-[1px] max-w-[1060px] w-full bg-bordercolor  "></span>
        </div>
        <div className=" flex mb-10 justify-center">
          <div className=" grid lg:grid-cols-4  col-start-2 md:grid-cols-3 sm:grid-cols-2  ">
            {catygorydata.results.map((item) => (
              <CatygoryInfoCart {...item} />
            ))}
          </div>
        </div>
        <div className=" mb-16 xl2:grid gap-[25px] xl2:grid-cols-2 ">
          <ProductList />
          <SubCatygory />
        </div>
        <div className=" flex mb-14 justify-center  ">
          <DiscountBanner2 />
        </div>
        <Subbannerlist />
        {/* <Subbannerlist2 /> */}
        <Subbannerlist />
        <DiscountBanner3 />
        <div className=" pb-11">
          <BrandList />
        </div>
      </div>
    </div>
  );
}
