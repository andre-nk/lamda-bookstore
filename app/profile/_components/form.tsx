"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { updateProfile } from "@/actions/profile";
import { toast } from "sonner";

type ProfileFormProps = {
  user: {
    id: string;
    fullname: string | null;
    address: string | null;
    phoneNumber: string | null;
    externalUserId: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

const ProfileForm = ({ user }: ProfileFormProps) => {
  const [namaLengkap, setNamaLengkap] = useState(user.fullname || "");
  const [noTel, setNoTel] = useState(user.phoneNumber || "");
  const [alamat, setAlamat] = useState(user.address || "");

  const [loading, startTransition] = useTransition();

  const handleSaveProfile = () => {
    startTransition(async () => {
      const data = await updateProfile(namaLengkap, alamat, noTel);

      if (data.success) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Failed to update profile");
      }
    });
  };

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
      <div className="flex w-full scale-[90%] flex-col items-center justify-center lg:w-1/2">
        <h1 style={{ fontSize: 40, fontWeight: "bold" }} className="mb-[60px]">
          Pengiriman
        </h1>
        <div className="flex flex-col justify-between gap-3">
          <div>
            <Label style={{ fontSize: 12, fontWeight: "bold" }}>
              Nama Lengkap
            </Label>
            <Input
              className="h-9 w-[576px]"
              type="Nama"
              placeholder="Nama Lengkap"
              style={{ fontSize: "12px" }}
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
            />
          </div>
          <div>
            <Label style={{ fontSize: 12, fontWeight: "bold" }}>
              Nomor Telepon
            </Label>
            <Input
              className="h-9 w-[576px]"
              type="Nama"
              placeholder="Nomor Telepon"
              style={{ fontSize: "12px" }}
              value={noTel}
              onChange={(e) => setNoTel(e.target.value)}
            />
          </div>
          <div>
            <Label style={{ fontSize: 12, fontWeight: "bold" }}>Alamat</Label>
            <Input
              className="h-[106px] w-[576px]"
              type="Nama"
              placeholder="Please enter your address"
              style={{ fontSize: "12px" }}
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <Button disabled={loading} onClick={handleSaveProfile}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
