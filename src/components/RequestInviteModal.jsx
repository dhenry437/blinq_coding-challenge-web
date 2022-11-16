import React, { useState } from "react";

export default function RequestInviteModal() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    confirmEmail: "",
  });

  // Generic change handler
  const handleInputChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div
      class="modal fade"
      id="requestInviteModal"
      tabindex="-1"
      aria-labelledby="requestInviteModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4">
          <div className="d-flex justify-content-center">
            <h4 className="my-3">Request an Invite</h4>
          </div>
          <hr className="mb-5" />
          <div>
            <form className="d-flex flex-column">
              <div class="mb-3 mt-1">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Full name"
                  name="name"
                  value={fields.name}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  value={fields.email}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-5">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Confirm email"
                  name="confirmEmail"
                  value={fields.confirmEmail}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="mb-3 mt-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
