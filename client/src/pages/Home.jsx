/** @format */

import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaign } = useStateContext();

  const fetchCampaign = async () => {
    setIsLoading(True);
    const data = await getCampaign();
    setCampaigns(data);
    setIsLoading(False);
  };

  useState(() => {
    if (contract) fetchCampaign();
  }, [address, contract]);
  return <div>Home</div>;
};

export default Home;
