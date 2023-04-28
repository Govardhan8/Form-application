import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../slices/formSlice";
import Modal from "./Modal";
import Button from "./formutils/Button";
import Cards from "./cards";
import axios from "axios";

const MainLayout = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://614b02a3e4cc2900179eae54.mockapi.io/job"
    );
    if (data.length) {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = () => {
    fetchData();
  };

  return (
    <div className="bg-primary-background min-h-screen min-w-screen flex flex-col gap-4 p-4">
      <Button onClick={() => dispatch(setModalState(true))}>Create Job</Button>
      <Modal updateData={updateData} />
      <Cards data={data} />
    </div>
  );
};

export default MainLayout;
