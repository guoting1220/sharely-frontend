import React from "react";
import Home from "../../components/Home";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Home component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders without user logged in", function () {
    wraperRender(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      { initialState: { user: {} } }
    );
    expect(screen.queryByText("Log in")).toBeInTheDocument()
  });

  it("Renders with logged in user", function () {
    wraperRender(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      { initialState: { user: {token: "token"} } }
    );
    expect(screen.queryByText("Log in")).not.toBeInTheDocument()
  });
})