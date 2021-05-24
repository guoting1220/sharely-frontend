import React from "react";
import UserNameTag from "../../components/UserNameTag";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'


describe("render UserNameTag component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <UserNameTag />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <UserNameTag />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("show user name", function () {
    wraperRender(
      <MemoryRouter>
        <UserNameTag username="a"/>
      </MemoryRouter>
    );
    expect(screen.queryByText("a")).toBeInTheDocument()
  });

})
