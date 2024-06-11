"use client";

import { seedProductData } from "@/actions/products";
import React from "react";

export default function SeedButton() {
  return (
    <button
      onClick={async () => {
        await seedProductData();
      }}
    >
      Seed Me
    </button>
  );
}
