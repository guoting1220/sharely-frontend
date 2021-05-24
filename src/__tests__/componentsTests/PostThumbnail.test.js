import React from "react";
import PostThumbnail from "../../components/PostThumbnail";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render PostThumbnail component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <PostThumbnail id={1}/>
      </MemoryRouter>,
      {
        initialState: {
          titles: [{ id: 1, itemName: "item1", imgUrl: null }]
        }
      }
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <PostThumbnail id={1}/>
      </MemoryRouter>,
      {
        initialState: {
          titles: [{ id: 1, itemName: "item1", imgUrl: null }]
        }
      }
    );
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders post thumbnail form", function () {
    wraperRender(
      <MemoryRouter>
        <PostThumbnail id={1}/>
      </MemoryRouter>,
      {
        initialState: {
          titles:[{id:1, itemName:"item1", imgUrl: null}]
        }
      }
    );
    expect(screen.queryByText("item1")).toBeInTheDocument()
  });
})
