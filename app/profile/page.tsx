"use client";

import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function ProfilePage() {
  return (
    <div className="my-36 flex w-full px-6 lg:mx-0 lg:my-0 lg:min-h-screen">
      <div className="hidden w-1/2 items-center justify-center lg:flex">
        <Image
          src="/image/login.svg"
          height={200}
          width={200}
          alt="login"
          className="h-7/12 w-7/12"
        />
      </div>
      <div className="flex flex-col w-full scale-[90%] items-center justify-center lg:w-1/2">
        <h1 style={{ fontSize: 40, fontWeight: "bold" }} className="mb-[60px]">Pengiriman</h1>
        <div className="flex flex-col justify-between gap-3">
          <div>
          <Label style={{fontSize: 12, fontWeight: "bold"}}>Nama Lengkap</Label>
          <Input className="w-[576px] h-9" type="Nama" placeholder="Nama Lengkap" style={{ fontSize: '12px'}}/>
          </div>
          <div>
          <Label style={{fontSize: 12, fontWeight: "bold"}}>Nomor Telepon</Label>
          <Input className="w-[576px] h-9" type="Nama" placeholder="Nomor Telepon" style={{ fontSize: '12px'}}/>
          </div>
          <div>
          <Label style={{fontSize: 12, fontWeight: "bold"}}>Alamat</Label>
          <Input className="w-[576px] h-[106px]" type="Nama" placeholder="Please enter your address" style={{ fontSize: '12px'}}/>
          </div>    
        </div>   
        <div className="mt-4">
        <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
