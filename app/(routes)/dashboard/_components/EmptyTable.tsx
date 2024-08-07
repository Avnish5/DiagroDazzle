import React from "react";
import Image from "next/image";

function EmptyTable() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white p-8 rounded-lg  text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No Files Available
        </h2>

        <p className="text-gray-600 mb-8">
          Currently, you have no files. Kindly create your first file by
          selecting "New File" in the sidebar.
        </p>
      </div>
    </div>
  );
}

export default EmptyTable;
