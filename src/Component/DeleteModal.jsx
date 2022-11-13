import React from "react";

export default function DeleteModal(props) {
  return (
    <div className="Modal" style={{}}>
      <h2>Are you sure?</h2>
      <div class="">
        <button
          class="btn btn-primary me-md-2"
          type="button"
          style={{ width: "70px" }}
        >
          Cancel
        </button>
        <button
          onClick={() => props.deleteUser(props.showid)}
          class="btn btn-danger"
          type="button"
          style={{ width: "70px" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
