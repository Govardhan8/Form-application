import React from "react";
import Container from "./container";
import Logo from "./logo";
import Details from "./details";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { deleteData, getDataById, mapFormData } from "../api";
import { useDispatch } from "react-redux";
import {
  setModalState,
  updateFirstFormData,
  updateId,
  updateSecondFormData,
} from "../../slices/formSlice";

function card(props) {
  const { data, updateData } = props;
  const buttonStyle = "border-0 py-2 px-4 rounded-md max-h-10";
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="flex gap-x-2">
        <Logo />
        <Details {...props} />
      </div>
      <div className="flex">
        <button
          className={buttonStyle}
          onClick={() => {
            getDataById(data.id).then((response) => {
              const { firstFormData, secondFormData } = mapFormData(response);
              dispatch(updateFirstFormData(firstFormData));
              dispatch(updateSecondFormData(secondFormData));
              dispatch(updateId(data.id));
              dispatch(setModalState(true));
            });
          }}
        >
          <PencilIcon className="h-6 w-6 text-primary-blue" />
        </button>
        <button
          className={buttonStyle}
          onClick={() => {
            deleteData(data.id).then(() => updateData());
          }}
        >
          <TrashIcon className="h-6 w-6 text-primary-red" />
        </button>
      </div>
    </Container>
  );
}

export default card;
