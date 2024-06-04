"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import usedebonse from "@/hook/usedebonse";
import Link from "next/link";

interface typeSearch {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    order: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: string;
  quantity: number;
}

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<typeSearch[]>([]);
  const [active, setActive] = useState<boolean>(true);
  const location = window.location.pathname;

  const debouncedSearch = usedebonse(search, 500);

  useEffect(() => {
    return () => {
      setValue("");
    };
  }, [location]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `http://135.181.108.207/product_variant/?search=${debouncedSearch}`,
          {
            next: { revalidate: 100 },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data.results);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    if (debouncedSearch.length > 1) {
      getData();
    }
  }, [debouncedSearch]);

  return (
    <div className="   max-w-[500px]   rounded-[30px]">
      <div className=" relative">
        <div className=" overflow-hidden">
          <Input
            onChange={(e) => {
              setValue(e.target.value);
              setSearch(e.target.value);
            }}
            value={value}
            className=" flex items-center pr-[250px]  pl-5 py-6 border-primarycolor overflow-hidden border-2 w-full   rounded-[30px]  text-[13px]"
            placeholder="Search Products…"
          />
          <Button className="absolute hover:bg-primarycolor rounded-r-[25px]  pl-5 pt-7 pb-6 pr-7 bg-primarycolor  top-[-1px] right-[1px]">
            Search
          </Button>
        </div>
        {value.length >= 2 && (
          <div className="  absolute  top-[50px] z-10 max-w-[500px]    py-[25px] px-[20px] border-[2px]  rounded-[30px]  bg-white">
            {value.length >= 2 ? (
              data.length > 0 ? (
                data.map((item) => (
                  <Link href={`/singelPage/${item.id}`}>
                    <div
                      key={item.id}
                      className="flex items-center gap-[50px] border-[1px] py-[20px] px-[25px] border-mainColor rounded-[10px] mb-[10px] "
                    >
                      <div>
                        <img
                          className="w-[80px] h-[80px]"
                          src={item.images[0].image}
                          alt="image"
                        />
                      </div>
                      <div>
                        <Link href={`/singelPage/${item.id}`}>
                          <h2 className="text-[18px] font-semibold hover:underline hover:text-mainColor">
                            {item.title}
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-[18px] font-semibold text-mainColor text-center ">
                  No products found
                </p>
              )
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
