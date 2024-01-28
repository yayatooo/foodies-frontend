import React, { useState } from "react";
import loginStore from "../store/loginStore";
import useAddressStore from "../store/addressStore";
import axios from "axios";

const AddressOrder = ({ onAddressSubmit }) => {
  const { user } = loginStore();
  const { addresses } = useAddressStore();
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const addressId = selectedAddress; // Assuming selectedAddress is the address ID
      const response = await axios.post(
        "http://localhost:3000/orders",
        { addressId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Address posted successfully:", response.data);
    } catch (error) {
      console.error("Error during login or posting address:", error.message);
      // Handle login or posting address error
    }
  };
  return (
    <div className="bg-white rounded-lg mt-4">
      <h1 className="text-2xl font-bold px-10 py-4">Address 🏠</h1>
      <div className="flex items-center py-6 px-12 w-full gap-4 font-semibold ">
        <img
          src="./avatar.jpg"
          alt="cart"
          className="object-cover rounded-full w-20"
        />
        <div>
          {user ? <h1>{user.fullName}</h1> : <h1>Name</h1>}
          <select
            name="Your Address"
            className="w-full"
            onChange={handleAddressChange}
          >
            {addresses.map((data) => (
              <option key={data._id} value={data._id}>
                {`${data.kelurahan} - ${data.kecamatan} - ${data.kabupaten} - ${data.provinsi}`}
              </option>
            ))}
          </select>
          <button
            onClick={handleSubmit}
            className="bg-green-600 py-2 px-3 rounded-lg text-white mt-4"
          >
            Submit Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressOrder;
