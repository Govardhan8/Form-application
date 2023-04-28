import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setModalState } from "../slices/formSlice";
import Modal from "./Modal";
import Button from "./formutils/Button";
import Cards from "./cards";
import { fetchData } from "./api";

const MainLayout = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then((response) => setData(response));
  }, []);

  //Below function is needed since mock api is slow in updating the value and re render of updated data isn't possible due to that
  const updateData = () => {
    fetchData().then((response) => setData(response));
  };

  return (
    <div className="bg-primary-background min-h-screen min-w-screen flex flex-col gap-4 p-4">
      <Button onClick={() => dispatch(setModalState(true))}>Create Job</Button>
      <Modal updateData={updateData} />
      <Cards updateData={updateData} data={data} />
    </div>
  );
};

export default MainLayout;
