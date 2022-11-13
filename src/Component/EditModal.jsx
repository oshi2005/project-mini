import React from "react";

export default function EditModal(props) {
  return (
    <div className="Modal Edit">
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          value={props.user.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          UserName
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          defaultValue={props.user.username}
          onChange={(e) => props.setUserName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          defaultValue={props.user.phone}
          onChange={(e) => props.setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          defaultValue={props.user.email}
          onChange={(e) => props.setEmail(e.target.value)}
        />
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">
          Cancel
        </button>
        <button
          class="btn btn-danger"
          type="button"
          onClick={() => props.updateUser(props.user.id)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
