import React from "react";

export default function RequestInviteModal() {
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
                  id="exampleInputEmail1"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-5">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Confirm email"
                  id="exampleInputPassword1"
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
