import React from "react";
import SignupForm from "../../components/SignupForm";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render SignupForm component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders sign up form", function () {
    wraperRender(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );
    expect(screen.queryByText("Sign Up")).toBeInTheDocument();
    expect(screen.queryByText("Register")).toBeInTheDocument()

  });


})