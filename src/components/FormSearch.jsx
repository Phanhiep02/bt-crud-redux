import React from "react";

export default function FormSearch() {
  return (
    <div>
      {" "}
      <form action="" className="filter-form mb-3">
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              placeholder="Từ khóa tìm kiếm"
              name="keyword"
            />
          </div>
          <div className="col-2 d-grid">
            <button type="submit" className="btn btn-primary">
              Tìm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
