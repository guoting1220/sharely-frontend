import React from "react";
import ReceivedInvite from "../../components/ReceivedInvite";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'


describe("render ReceivedInvite component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <ReceivedInvite username={"a"} posts={[1]} />
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
        <ReceivedInvite username={"a"} posts={[1]}/>
      </MemoryRouter>,
      {
        initialState: {
          titles: [{ id: 1, itemName: "item1", imgUrl: null }]
        }
      }
    );
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders ReceivedInvite", function () {
    wraperRender(
      <MemoryRouter>
        <ReceivedInvite username={"a"} posts={[1]}/>
      </MemoryRouter>,
      {
        initialState: {
          titles: [{ id: 1, itemName: "item1", imgUrl: null }]
        }
      }
    );
    expect(screen.queryByText("is interested in your posts")).toBeInTheDocument()
  });
})
