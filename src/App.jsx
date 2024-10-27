import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormSearch from "./components/FormSearch";
import Sort from "./components/Sort";
import TableList from "./components/TableList";

import FormAdd from "./components/FormAdd";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function App() {
  return (
    <>
      <div className="container py-3">
        <h2>Danh sách người dùng</h2>
        {/* form search */}
        <FormSearch></FormSearch>
        {/* sort */}
        <Sort></Sort>
        {/* list */}
        <TableList></TableList>
        {/* item */}

        {/* form */}
        <FormAdd></FormAdd>
        <ToastContainer />
      </div>
    </>
  );
}
