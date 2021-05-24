import React from "react";
import LoginForm from "../../components/LoginForm";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render LoginForm component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders login form", function () {
    wraperRender(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(screen.queryByText("Username")).toBeInTheDocument();
    expect(screen.queryByText("Submit")).toBeInTheDocument()

  });

  
})