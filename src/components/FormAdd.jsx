import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  formValue,
  resetForm,
  updateUser,
} from "../redux/slice/usersSlice";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function FormAdd() {
  const dispatch = useDispatch();
  const form = useSelector((state) => {
    return state.users.formUser;
  });
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    if (form.id) {
      const { id, ...data } = form;
      console.log(id, data);

      dispatch(updateUser({ id, data }));
      toast.success("Sửa thành công");
    } else {
      dispatch(addUser(form));
      toast.success("Thêm thành công");
    }
    dispatch(resetForm());
  };
  const onChangeInput = (e) => {
    const value =
      e.target.name === "age" ? parseInt(e.target.value) : e.target.value;
    dispatch(formValue({ name: e.target.name, value }));
  };
  return (
    <div>
      {" "}
      <form action="" className="form-update" onSubmit={onSubmitForm}>
        <h2>Thêm người dùng</h2>
        <div className="mb-3">
          <label>Tên</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tên..."
            required
            onChange={onChangeInput}
            value={form.name}
          />
        </div>
        <div className="mb-3">
          <label>Tuổi</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="age..."
            required
            onChange={onChangeInput}
            value={form.age}
          />
        </div>
        <div className="mb-3">
          <label>Giới tính</label>
          <select
            name="gender"
            onChange={onChangeInput}
            className="form-select"
            value={form.gender}
          >
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="address..."
            required
            onChange={onChangeInput}
            value={form.address}
          />
        </div>
        <button className="btn btn-primary">Lưu thay đổi</button>
      </form>
    </div>
  );
}
