import React, { useEffect } from "react";
import useAddressStore from "../store/addressStore";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const UserAddress = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Your Adreess</h1>
        <Link className="bg-sky-500 rounded-md px-2 py-1" to="/addAdress">
          Add address
        </Link>
      </div>
      <div className="w-full flex justify-between shadow-lg rounded-lg mt-4 p-6 space-y-3">
        <div>
          <h1>Nama Penerima : Rahmat Hidayat</h1>
          <h1>Kelurahan : Kayamanya</h1>
          <h1>Kecamatan : Poso Kota</h1>
          <h1>Kabupaten : Poso</h1>
          <h1>Provinsi : Sulawesi Tengah</h1>
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <button className="bg-yellow-500 rounded-md px-4 py-1">Edit</button>
          <button className="bg-red-500 rounded-md px-4 py-1">Delete</button>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
