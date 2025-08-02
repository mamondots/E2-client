import SingUpForm from "@/form/SingUpForm";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/titasweb.png";
import Link from "next/link";
const page = () => {
  return (
    <div className=" bg-[#F5F5F5] w-full h-screen Container">
      <div className="md:pt-8 py-8">
        <Link href="/">
          <Image src={logo} alt="Logo" width={160} height={160} />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white lg:w-1/3  border border-primary/10">
          <h2 className="text-center font-medium text-xl py-4 mt-2 text-primary">
            Welcome to Titasweb
          </h2>

          <div className="px-4">
            <p className="text-lg font-medium">Sign Up</p>
            <p className="text-sm text-[#474646]">
              Enter the required information to create new account
            </p>

            <SingUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
