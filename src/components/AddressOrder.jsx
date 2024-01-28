import React from "react";
import loginStore from "../store/loginStore";

const AddressOrder = () => {
  const { user } = loginStore();

  console.log(user);

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
          <select name="Your Address" className="w-full">
            <option value="">
              Jln P Sabang Kelurahan Kayamanya Kabupaten Poso Provinsi Sulawesi
              Tengah
            </option>
            <option value="">
              Jln P Sabang Kelurahan Kayamanya Kabupaten Poso Provinsi Sulawesi
              Tengah
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddressOrder;
