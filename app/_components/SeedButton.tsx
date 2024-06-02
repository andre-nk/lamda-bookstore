"use client";

import { seedProductData } from "@/actions/actions";
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
