"use client";
import Link from "next/link";
import telIcon from "/public/icon-phone.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./tymeMode/mode-toggle";
import { useTheme } from "next-themes";
import Logo from "../../public/logo";
import { useState } from "react";
import Modalcarzinca from "./modalcarzinka/modalcarzinca";
import HeaderUserList from "./headerUserList/headerUserList";
import SearchInput from "./imputs/searchInput";

const Header = () => {
  const [active, setActive] = useState();

  return (
    <>
      <div className="py-5 hidden sm:block border-b-2 border-bordercolor">
        <div className="container">
          <div className=" md:flex md:items-center  text-center  md:justify-between ">
            <p className="  mb-4 md:mb-[-10px] text-linkcolor  text-sm">
              Welcome to Worldwide Electronics Store
            </p>
            <div className=" md:flex items-center md:gap-5">
              <ul className=" justify-center flex gap-4">
                <li className="border-r pr-4  hover:underline   text-base text-linkcolor  ">
                  <Link href="/account">My account</Link>
                </li>
                <li className=" border-r pr-4 hover:underline  text-base text-linkcolor ">
                  <Link href="/account">Checkout</Link>
                </li>
                <li className=" border-r pr-4 hover:underline text-base text-linkcolor  ">
                  <Link href="/account">Shop</Link>
                </li>
                <li className=" text-base hover:underline text-linkcolor ">
                  <Link href="/account">Wishlist</Link>
                </li>
              </ul>
              <div className="hidden md:block">
                <ModeToggle active={active} setActive={setActive} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Medium */}
      <div className="py-6 border-b-2 border-bordercolor ">
        <div className=" container">
          <div className=" flex items-center justify-between ">
            <Link href="/">
              <Logo color="#10214ca1" />
            </Link>
            <div className="  hidden xl:block   ">
              <div className=" flex gap-2 items-center ">
                <img src={telIcon.src} alt="icon" />
                <div className="max-w-[117px] ">
                  <p className=" mb-1  text-sm font-normal text-linkcolor">
                    Hotline Free:
                  </p>
                  <p className=" text-sm font-normal w-fulls">06-900-6789-00</p>
                </div>
              </div>
            </div>
            <div className=" lg:block hidden">
              <SearchInput />
            </div>
            <div className=" lg:block hidden">
              <div className=" flex gap-10 items-center ">
                <HeaderUserList />
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" md:hidden">
                <ModeToggle setActive={setActive} />
              </div>
              <div className=" lg:hidden">
                <Drawer direction="left">
                  <DrawerTrigger>
                    <GiHamburgerMenu className=" w-8 h-8 " />
                  </DrawerTrigger>
                  <DrawerContent className="   h-screen w-[80%]  sm:w-[70%] md:w-[50%]">
                    <div className=" relative">
                      <Input
                        className=" flex items-center   pl-5 py-6 border-primarycolor overflow-hidden border-2 w-full     text-[13px]"
                        placeholder="Search Products…"
                      />
                      <Button
                        variant="outline"
                        className="absolute  rounded-none flex items-center py-6    top-[1px] right-[1px]"
                      >
                        Search
                      </Button>
                    </div>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Home</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Shop</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Blog</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Portfolio</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
