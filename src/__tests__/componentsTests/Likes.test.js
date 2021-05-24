import React from "react";
import Likes from "../../components/Likes";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Likes component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <Likes />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <Likes />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without liks", function () {
    wraperRender(
      <MemoryRouter>
        <Likes />
      </MemoryRouter>, 
      {
      initialState: {
        titles: [{
          id: 1,
        }],
        user: {
          username: "a",
          likedPosts: [],
          sentInvites: [],
          receivedInvites: []
        }
      }
    }
    );
    expect(screen.queryByText("Favorite Posts:")).toBeInTheDocument();
    expect(screen.queryByText("No favorite posts!")).toBeInTheDocument();
  });

  it("renders with likes", function () {
    wraperRender(
      <MemoryRouter>
        <Likes />
      </MemoryRouter>,
      {
        initialState: {
          titles: [{
            id: 1,
          }],
          user: {
            username: "a",
            likedPosts: [1],
            sentInvites:[],
            receivedInvites:[]
          }
        }
      }
    );
    expect(screen.queryByText("Favorite Posts:")).toBeInTheDocument();
    expect(screen.queryByText("No favorite posts!")).not.toBeInTheDocument();
  });
})