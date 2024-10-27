import React from "react";
import TableItem from "./TableItem";

export default function TableList() {
  return (
    <div>
      {" "}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th width="5%">Sửa</th>

            <th width="5%">Xóa</th>
          </tr>
        </thead>
        <TableItem></TableItem>
      </table>
    </div>
  );
}
