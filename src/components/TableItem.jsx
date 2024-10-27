import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, setForm } from "../redux/slice/usersSlice";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Toast } from "bootstrap";
import { toast } from "react-toastify";
export default function TableItem() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.users.users;
  });
  const loading = useSelector((state) => {
    return state.users.loading;
  });
  const handleDeleteUser = (id) => {
    confirmAlert({
      title: "Bạn chắc chắn muốn xóa?",

      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteUser(id));
            toast.success("xóa thành công");
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const handleUpdateUser = (data) => {
    dispatch(setForm(data));
    // console.log(data);
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <tbody>
        {loading ? (
          <tr>
            <td>loading...</td>
          </tr>
        ) : (
          users.map(({ id, name, age, address, gender }, index) => {
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  <span
                    className={`${
                      gender === "male"
                        ? "badge bg-success"
                        : "badge bg-warning"
                    }`}
                  >
                    {gender === "male" ? "Nam" : "Nữ"}
                  </span>
                </td>
                <td>{address}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      handleUpdateUser({ id, name, age, address, gender })
                    }
                  >
                    Sửa
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </>
  );
}
