import React from "react";
import { toast, ToastContainer } from "react-toastify";

function Success() {
  console.log("render");
  toast.success("Successfully !", { theme: "colorgreen" });
  return <ToastContainer autoClose={6000} limit={1} />;
}

export default Success;
