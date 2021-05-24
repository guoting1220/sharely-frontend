import React from "react";
import NewPost from "../../components/NewPost";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render NewPost component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <NewPost />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <NewPost />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders Add post form", function () {
    wraperRender(
      <MemoryRouter>
        <NewPost />
      </MemoryRouter>
    );
    expect(screen.queryByText("Add Post")).toBeInTheDocument()
  });
})
