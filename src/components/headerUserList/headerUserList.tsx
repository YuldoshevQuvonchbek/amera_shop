"use client";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import Modalcarzinca from "../modalcarzinka/modalcarzinca";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeaderUserList = () => {
  const { likeCount } = useSelector((state: any) => state.like);
  const { data } = useSession();
  const GoogleSign = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {data && data.user ? (
        <div
          onClick={() => setOpen(true)}
          className=" flex  flex-col cursor-pointer items-center gap-[1]"
        >
          <img
            src={String(data?.user?.image)}
            className=" rounded-full w-8 h-8 "
          />

          <p>{data?.user?.name}</p>
        </div>
      ) : (
        <div
          onClick={GoogleSign}
          className=" flex cursor-pointer  flex-col items-center gap-[1]"
        >
          <FaRegUser color="linkcolor" className=" w-8 h-8 " />

          <p className=" text-linkcolor">User</p>
        </div>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className=" max-w-[500px]">
          <div>
            <div className="flex justify-center items-center  ">
              <img
                className="rounded-full mb-[35px] "
                src={String(data?.user?.image)}
                alt="image"
              />
            </div>
            <strong className="text-[20px] text-black block  ">
              Name:{" "}
              <span className="text-[18px] text-linkColor ">
                {data?.user?.name}
              </span>
            </strong>
            <strong className="text-[20px] text-black block  mb-[25px] ">
              Email:{" "}
              <span className="text-[18px] text-linkColor ">
                {data?.user?.email}
              </span>
            </strong>
            <div className="flex justify-center">
              <button
                className="py-[8px] px-[25px] font-semibold rounded-[8px]   bg-mainColor text-[18px] text-linkColor "
                onClick={() => signOut()}
              >
                Log Out
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Link
        href="/like"
        className=" flex  relative  flex-col items-center gap-[1]"
      >
        <FaRegStar className=" w-8 h-8 " />
        <p className=" text-linkcolor">Favorites</p>
        <p className=" w-5 h-5 bg-primarycolor absolute rounded-full text-white flex justify-center items-center top-[-10px] right-0">
          {likeCount}
        </p>
      </Link>
      {/* carzinka  uzgartiriladi */}
      <Modalcarzinca />
    </>
  );
};

export default HeaderUserList;
