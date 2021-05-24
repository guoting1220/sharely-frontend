import React from "react";
import PostCard from "../../components/PostCard";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render PostCard component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <PostCard />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <PostCard />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders post detail card", function () {
    wraperRender(
      <MemoryRouter>
        <PostCard />
      </MemoryRouter>
    );
    expect(screen.queryByText("Category:")).toBeInTheDocument()
  });

  it("shows item name", function () {
    wraperRender(
      <MemoryRouter>
        <PostCard itemName="item1"/>
      </MemoryRouter>,
      {
        initialState: {
          user: {
            posts: [1],
            username: "a",
            sentInvites: [{ postId: 99, postOwner: "b" }],
            receivedInvites: [{ postId: 1, username: "b" }]
          }          
        }
      }
    );
    expect(screen.queryByText("item1")).toBeInTheDocument();
    expect(screen.queryByText("Invite")).toBeInTheDocument();
  });

  it("not show invite button with un-loggedin user", function () {
    wraperRender(
      <MemoryRouter>
        <PostCard itemName="item1" />
      </MemoryRouter>,
      {
        initialState: {
          user: { }
        }
      }
    );
    expect(screen.queryByText("item1")).toBeInTheDocument();
    expect(screen.queryByText("Invite")).not.toBeInTheDocument();
  });
})
