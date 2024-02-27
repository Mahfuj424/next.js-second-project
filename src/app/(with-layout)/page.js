"use client";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import "react-phone-input-2/lib/style.css";

export default function Home() {
  const [value, setValue] = useState();

  return (
    <main className="flex justify-center items-center mt-40">
      <div>
        <div>
          <PhoneInput
            className="border-2 p-3 border-red-500 rounded-md"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>
        <div>
          <p className="text-3xl mt-10">{value}</p>
        </div>
      </div>
    </main>
  );
}
