import React from "react";
import CommentForm from "../../components/CommentForm";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Home component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <CommentForm postId={1}/>
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <CommentForm />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders comment form", function () {
    wraperRender(
      <MemoryRouter>
        <CommentForm />
      </MemoryRouter>,
    );
    expect(screen.queryByText("Add")).toBeInTheDocument()
  });

})