import React from "react";
import PostForm from "../../components/PostForm";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render PostForm component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <PostForm />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <PostForm />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders post form", function () {
    wraperRender(
      <MemoryRouter>
        <PostForm />
      </MemoryRouter>
    );
    expect(screen.queryByText("Save")).toBeInTheDocument()
  });
})
