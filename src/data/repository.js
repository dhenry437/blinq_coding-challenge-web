import axios from "axios";

export async function requestInvite(name, email) {
  const bodyParameters = {
    name: name,
    email: email,
  };

  const response = await axios
    .post("/fakeAuth", bodyParameters)
    .catch(function (error) {
      return error.response;
    });

  return response;
}