import React from "react";
import LikeTag from "../../components/LikeTag";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';

describe("render LikeTag component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <LikeTag />
      </MemoryRouter>
    );
  }); 

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <LikeTag />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
})