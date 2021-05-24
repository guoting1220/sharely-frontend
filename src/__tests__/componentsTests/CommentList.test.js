import React from "react";
import CommentList from "../../components/CommentList";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { fireEvent, screen } from '@testing-library/react'

describe("render CommentList component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <CommentList postId={1} comments={[]}/>
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <CommentList postId={1} comments={[]}/>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // it("Renders", function () {
  //   wraperRender(
  //     <MemoryRouter>
  //       <CommentList postId={1} comments={[]}/>
  //     </MemoryRouter>     
  //   );
  //   expect(screen.queryByText("Comments")).toBeInTheDocument();
  // });
})