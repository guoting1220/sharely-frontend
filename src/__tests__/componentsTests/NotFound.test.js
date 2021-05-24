import React from "react";
import NotFound from "../../components/NotFound";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render NotFound component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders not found message", function () {
    wraperRender(
      <MemoryRouter>
        <NotFound msg="no"/>
      </MemoryRouter>
    );
    expect(screen.queryByText("no")).toBeInTheDocument()
  });
})
