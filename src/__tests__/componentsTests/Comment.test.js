import React from "react";
import Comment from "../../components/Comment";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Comment component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <Comment />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <Comment />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });


  it("Renders without logged in user", function () {
    wraperRender(
      <MemoryRouter>
        <Comment />
      </MemoryRouter>,
      { initialState: { } }
    );
    expect(screen.queryByText("Comments")).not.toBeInTheDocument()
  });
})
