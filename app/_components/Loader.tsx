import React from 'react'

function Loader() {
  return (
    <div className="fixed  inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  </div>
  )
}

export default Loader