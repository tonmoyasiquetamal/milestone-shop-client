import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ManageSingleOrder from "../ManageSingleOrder/ManageSingleOrder";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("https://murmuring-stream-81479.herokuapp.com/orders")
      .then((res) => setOrders(res.data));
  }, []);

  //delete orders
  const handleDeleteOrder = (id) => {
    const deleteConfirm = window.confirm("Are you sure to delete this order ?");
    // console.log(id);
    deleteConfirm &&
      axios
        .delete(`https://murmuring-stream-81479.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount >= 0) {
            alert("Orders Deleted");
            const exist = orders.filter((order) => order._id !== id);
            setOrders(exist);
          }
        });
  };
  return (
    <div>
      <h1 className="text-3xl   font-medium mb-5">All Orders :</h1>
      <div className="overflow-x-scroll md:overflow-x-hidden">
        <table className=" table-auto bg-white w-full shadow-md ">
          <thead className="h-10">
            <tr className="bg-gray-800 text-white border-2 border-white ">
              <th className="border-2 border-white">Email</th>
              <th className="border-2 border-white">Item Name</th>
              <th className="border-2 border-white">Quantity</th>
              <th className="border-2 border-white">Date</th>
              <th className="border-2 border-white">Address</th>
              <th className="border-2 border-white">Status</th>
              <th className="border-2 border-white">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {orders.map((order) => (
              <ManageSingleOrder
                key={order._id}
                order={order}
                handleDeleteOrder={handleDeleteOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
