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

  const handelFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

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
            isTextArea={false}
            handelChange={(e) => handelFormFieldChange("name", e)}
          />
          <FormField
            labelName="Campaign Titel *"
            placeholder="write a titel"
            inputType="text"
            value={form.title}
            isTextArea={false}
            handelChange={(e) => handelFormFieldChange("title", e)}
          />
        </div>
        <FormField
          labelName="Story *"
          placeholder="write your story"
          value={form.description}
          isTextArea={true}
          handelChange={(e) => handelFormFieldChange("description", e)}
        />
        <div className="w-full flex justify-star items-center p-4 bg-[#8c6dfd] h-[80px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain"
          />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
            You will get 100% of the raised amount
          </h4>
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            isTextArea={false}
            handelChange={(e) => handelFormFieldChange("target", e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="Enad date"
            inputType="date"
            value={form.deadline}
            isTextArea={false}
            handelChange={(e) => handelFormFieldChange("deadline", e)}
          />
        </div>
        <FormField
          labelName="Campaign image *"
          placeholder="Place image url of your campaign"
          value={form.image}
          isTextArea={false}
          handelChange={(e) => handelFormFieldChange("image", e)}
        />
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
