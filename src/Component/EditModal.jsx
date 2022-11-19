import React, { useState } from "react";
export default function EditModal(props) {
  const [Name, setName] = useState(props.user.name);
  const [UserName, setUserName] = useState(props.user.username);
  const [Phone, setPhone] = useState(props.user.phone);
  const [Email, setEmail] = useState(props.user.email);

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
          defaultValue={Name}
          onChange={(e) => setName(e.target.value)}
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
          defaultValue={UserName}
          onChange={(e) => setUserName(e.target.value)}
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
          defaultValue={Phone}
          onChange={(e) => setPhone(e.target.value)}
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
          defaultValue={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          onClick={() => props.onClose()}
          class="btn btn-primary me-md-2"
          type="button"
        >
          Cancel
        </button>
        <button
          class="btn btn-danger"
          type="button"
          onClick={() =>
            props.updateUser(props.user.id, Name, UserName, Phone, Email)
          }
        >
          Save
        </button>
      </div>
    </div>
  );
}
