import { render, screen, within } from "@testing-library/react";
import App from "./App";
import RequestInviteModal from "./components/RequestInviteModal";

test("renders home page", () => {
  render(<App />);
  // Expect navbar with text 'BROCOLLI & CO.'
  expect(
    within(screen.getByRole("navigation")).getByText(/BROCOLLI & CO./i)
  ).toBeInTheDocument();
  // Expect main hero message
  expect(
    within(screen.getByRole("main")).getByText(
      /A better way to enjoy every day./i
    )
  ).toBeInTheDocument();
  // Expect button
  expect(
    within(screen.getByRole("button")).getByText(/Request an invite/i)
  ).toBeInTheDocument();
  // Expect footer
  expect(
    within(screen.getByRole("contentinfo")).getByText(
      /Made with ♥ in Melbourne/i
    )
  ).toBeInTheDocument();
});

test("render modal", () => {
  const { container } = render(<RequestInviteModal />);

  // Expect name inupt
  expect(container.querySelector(`input[name="name"]`)).toBeInTheDocument();
  // Expect email inupt
  expect(container.querySelector(`input[name="email"]`)).toBeInTheDocument();
  // Expect confirm email inupt
  expect(
    container.querySelector(`input[name="confirmEmail"]`)
  ).toBeInTheDocument();
  // Expect button
  expect(container.querySelector(`button[type="submit"]`)).toBeInTheDocument();
});
