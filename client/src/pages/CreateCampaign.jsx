/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handelSubmit = () => {};

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col sm:p-10 p-4 rounded-[10px]">
      {isLoading && "Loading"}
      <div className="flex justify-center items-center sm:p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>
      <form
        onSubmit={handelSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            isTextArea = {false}
            handelChange={() => {}}
            
          />
          <FormField
            labelName="Campaign Titel *"
            placeholder="write a titel"
            inputType="text"
            value={form.title}
            isTextArea = {false}
            handelChange={() => {}}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
