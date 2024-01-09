import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
// import profileStore from "../store/profileStore";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-6xl font-poppins py-10">
        <h1 className="font-semibold text-3xl">Profile Page</h1>
        <ProfileCard />
        <div className="my-8">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Your Adreess</h1>
            <button className="bg-sky-500 rounded-md px-2 py-1">
              Add address
            </button>
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
              <button className="bg-yellow-500 rounded-md px-4 py-1">
                Edit
              </button>
              <button className="bg-red-500 rounded-md px-4 py-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
