import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [showErr, setShowErr] = useState("");
  const [users, setUsers] = useState([]);

  //get users
  useEffect(() => {
    axios
      .get("https://murmuring-stream-81479.herokuapp.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMakeAdmin = () => {
    setShowErr("");
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email)) {
      axios({
        method: "put", //you can set what request you want to be
        url: `https://murmuring-stream-81479.herokuapp.com/users/${email}`,
        data: "",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }).then((res) => {
        if (res.data.modifiedCount > 0) {
          alert("Making Admin Successfully ");
          setShowErr("");
        }
      });
    } else {
      setShowErr("Please Enter validate Email !");
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-medium">Enter Email For Make him Admin</h2>
      <div className="md:w-3/4 flex mt-5 ">
        <input
          type="email"
          onBlur={handleEmail}
          className="p-3 w-full outline-none bg-white "
          placeholder="Enter Email"
        />
        <button
          onClick={handleMakeAdmin}
          className="bg-gray-800 text-white  hover:bg-gray-300 hover:text-gray-900 w-56 py-3 transition-all"
        >
          Make Admin
        </button>
      </div>
      <h3 className="text-red-600 font-medium">{showErr}</h3>
      <div className="mt-5 border-t-2 border-gray-400 pt-5">
        <h3 className="text-2xl font-medium">Show All User :</h3>
        <div className="mt-4">
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="bg-gray-800 text-white h-10">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="h-9 text-medium">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role ? user.role : "Member"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;

// axios
//         .put(`https://murmuring-stream-81479.herokuapp.com/users/${email}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("idToken")}`,
//           },
//         })
