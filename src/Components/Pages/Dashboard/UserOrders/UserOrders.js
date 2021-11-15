import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const UserOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://murmuring-stream-81479.herokuapp.com/orders?email=${user.email}`
      )
      .then((res) => setOrders(res.data));
  }, [user.email]);

  const statusStyle = (status) => {
    if (status === "pending") {
      return "bg-red-200 text-red-600";
    } else if (status === "approved") {
      return "bg-green-200 text-green-600";
    } else if (status === "shipped") {
      return "bg-green-400 text-green-800";
    }
  };
  //delete
  const handleCancel = (id) => {
    const cancelConfirm = window.confirm("Are you sure to cancel your Order?");
    cancelConfirm &&
      axios
        .delete(`https://murmuring-stream-81479.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount >= 0) {
            alert("successfully Canceled");
            const exist = orders.filter((order) => order._id !== id);
            setOrders(exist);
          }
        });
  };
  return (
    <div>
      <h2 className="text-3xl mb-5 font-medium">My Orders :</h2>
      {orders.length <= 0 ? (
        <h2 className="text-xl text-red-600">
          You didn't order anything yet !
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {orders.map((order) => (
            <div key={order._id} className="flex items-center border">
              <div className="border-r w-1/3">
                <img src={order?.orderItem?.img} alt="" />
              </div>
              <div className="w-2/3 space-y-2 p-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium">
                    {order?.orderItem?.name}
                  </h2>
                  <span className={`${statusStyle(order.status)} px-2 py-1`}>
                    {order.status}
                  </span>
                </div>
                <h2 className="text-md text-gray-600">
                  {order?.orderItem?.description}
                </h2>
                <div className="flex justify-between items-center font-medium">
                  <h2 className="text-md ">
                    Total Price : ${order?.quantity * order?.orderItem?.price}
                  </h2>
                  <h2 className="text-md ">Quantity : {order?.quantity}</h2>
                </div>
                <button
                  onClick={() => handleCancel(order._id)}
                  className="text-red-800 bg-red-300 px-5 py-2 font-medium hover:bg-white hover:text-red-800 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOrders;
