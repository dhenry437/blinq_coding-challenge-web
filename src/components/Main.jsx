import React from "react";

export default function Main() {
  return (
    <main className="d-flex flex-shrink-0 flex-grow-1 align-items-center">
      <div className="container p-2">
        <h1 className="m-3">
          A better way <br />
          to enjoy every day.
        </h1>
        <p className="mb-4">Be the first to know when we launch.</p>
        <button
          type="button"
          className="mb-3"
          data-bs-toggle="modal"
          data-bs-target="#requestInviteModal">
          Request an invite
        </button>
      </div>
    </main>
  );
}
