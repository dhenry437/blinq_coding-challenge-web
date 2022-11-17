import React, { useState } from "react";
import { requestInvite } from "../data/repository";

export default function RequestInviteModal() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    confirmEmail: "",
  });
  const [error, setError] = useState(null);

  // Generic change handler
  const handleInputChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const validateInput = (score, condition, input) => {
    // Apply styles to relavant inputs based on condition
    if (condition) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");

      // Return score + 1 for a true condition
      return ++score;
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");

      return score;
    }
  };

  const validateForm = () => {
    let validationScore = 0;
    let requiredScore = 0;

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const confirmEmailInput = document.getElementById("confirmEmailInput");

    // Validate name is not blank
    requiredScore++;
    validationScore = validateInput(
      validationScore,
      fields.name.trim() !== "",
      nameInput
    );

    // Validate email is valid
    requiredScore++;
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    validationScore = validateInput(
      validationScore,
      emailRegex.test(fields.email),
      emailInput
    );

    // Validate confirm email matches email
    requiredScore++;
    validationScore = validateInput(
      validationScore,
      fields.email.trim() === fields.confirmEmail.trim() &&
        fields.confirmEmail.trim() !== "",
      confirmEmailInput
    );

    // Return true if scores match
    return validationScore === requiredScore;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // Clear errors
    setError(null);

    // Return if form is invalid
    if (!validateForm()) return;

    // Destructure fields
    const { name, email } = fields;

    // Send request
    const response = await requestInvite(name, email);

    console.log(response);

    if (response.status === 200) {
      // Success
    } else {
      // Error
      // Display messsage from server
      setError(response?.data?.errorMessage || "Error, try again later."); // Display error or a fallback message
    }
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
            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit}
              noValidate>
              <div class="mb-3 mt-1">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full name"
                  id="nameInput"
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
                  id="emailInput"
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
                  id="confirmEmailInput"
                  name="confirmEmail"
                  value={fields.confirmEmail}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="mb-3 mt-1">
                Submit
              </button>
            </form>
            {error && (
              <div className="w-100 text-center mt-2">
                <span>
                  <i>{error}</i>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
