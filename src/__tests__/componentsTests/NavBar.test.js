import React from "react";
import NavBar from "../../components/NavBar";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render NavBar component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders without logged in user", function () {
    wraperRender(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
      { initialState: {} }
    );
    expect(screen.queryByText("Login")).toBeInTheDocument()
  });

  it("Renders with logged in user", function () {
    wraperRender(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
      { initialState: {
        user: { username: "a"}
      } }
    );
    expect(screen.queryByText("My Posts")).toBeInTheDocument()
  });
})
