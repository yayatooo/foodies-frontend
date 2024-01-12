import React from "react";

const AddAdress = () => {
  return (
    <div>
      <div className="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add address</h1>
        <p className="text-gray-600 mt-6">
          Silahkan Tambahkan Alamat Tujuan Anda
        </p>

        <form>
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Nama
              </label>
              <input
                type="text"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Penerima"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Kelurahan
              </label>
              <input
                type="text"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Kelurahan"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Kecamatan
              </label>
              <input
                type="text"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Kecamatan"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Kabupaten
              </label>
              <input
                type="text"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan nama Kabupaten"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Provinsi
              </label>
              <input
                type="text"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Masukan Nama Provinsi"
              />
            </div>
          </div>

          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="py-2 px-4 bg-primary text-white rounded hover:bg-yellow-600 "
            >
              Save
            </button>

            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdress;
