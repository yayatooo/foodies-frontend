import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useAddressStore from "../store/addressStore";
import loginStore from "../store/loginStore";
// import { useNavigate } from "react-router-dom";

const UserAddress = () => {
  const { user } = loginStore();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:3000/adress/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAddresses(response.data.adress);
      } catch (error) {
        console.error("Error fetching addresses:", error.message);
      }
    };

    if (user) {
      fetchAddresses();
    }
  }, [user]);

  console.log(addresses);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Your Adreess</h1>
        <Link className="bg-sky-500 rounded-md px-2 py-1" to="/addAdress">
          Add address
        </Link>
      </div>
      {addresses ? (
        addresses.map((data) => (
          <div
            className="w-full flex justify-between shadow-lg rounded-lg mt-4 p-6 space-y-3"
            key={data._id}
          >
            <div>
              <h1>Nama Penerima: {data.name}</h1>
              <h1>Kelurahan: {data.kelurahan}</h1>
              <h1>Kecamatan: {data.kecamatan} Kota</h1>
              <h1>Kabupaten: {data.kabupaten}</h1>
              <h1>Provinsi: {data.provinsi}</h1>
            </div>
            <div className="flex flex-col gap-y-4 justify-center">
              <button className="bg-yellow-500 rounded-md px-4 py-1">
                Edit
              </button>
              <button className="bg-red-500 rounded-md px-4 py-1">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No addresses available.</p>
      )}
    </>
  );
};

export default UserAddress;
