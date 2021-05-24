import React from "react";
import Post from "../../components/Post";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Post component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <Post />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <Post />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

  });

})
