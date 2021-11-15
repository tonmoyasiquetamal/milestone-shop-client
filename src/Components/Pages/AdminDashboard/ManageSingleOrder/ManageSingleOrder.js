import axios from "axios";
import React, { useState } from "react";

const ManageSingleOrder = ({ order, handleDeleteOrder }) => {
  const { _id, email, date, quantity, status, address } = order;
  //   console.log(order);
  const [openInput, setSetOpenInput] = useState(false);
  const [inputStatus, setInputStatus] = useState(status);
  //   console.log(openInput);
  const statusStyle = (status) => {
    if (status === "pending") {
      return "text-red-600";
    } else if (status === "approved") {
      return " text-green-600";
    } else if (status === "shipped") {
      return "text-green-800";
    }
  };
  const handleInput = (e) => {
    setInputStatus(e.target.value);
  };
  const handleCheck = () => {
    setSetOpenInput(false);
    const modifiedData = { ...order };
    modifiedData.status = inputStatus;
    axios
      .put(
        `https://murmuring-stream-81479.herokuapp.com/orders`,
        modifiedData
      )
      .then((res) => {
        // console.log(res);
      });
  };

  return (
    <>
      <tr className="h-12">
        <td>{email}</td>
        <td>{order?.orderItem?.name}</td>
        <td>{quantity}</td>
        <td>{date}</td>
        <td>{address}</td>
        <td className={`${statusStyle(status)} font-medium w-32`}>
          {openInput ? (
            <select
              onBlur={handleInput}
              defaultValue={status}
              className="border-2 border-red-500 outline-none"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="shipped">Shipped</option>
            </select>
          ) : (
            <h2>{inputStatus}</h2>
          )}
        </td>
        <td className="text-center">
          {openInput ? (
            <button onClick={() => handleCheck(_id)} className="text-red-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setSetOpenInput(true);
              }}
              className="text-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          )}

          <button
            onClick={() => handleDeleteOrder(_id)}
            className="bg-red-300 text-red-800 ml-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageSingleOrder;
