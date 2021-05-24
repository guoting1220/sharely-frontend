import React from "react";
import PostDetail from "../../components/PostDetail";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

const post = {
  id: 1,
  itemName: "item1",
  ageGroup: "kid",
  category: "toy",
  imgUrl: null,
  description: null,
  postDate: "date",
  city: "city"
}

describe("render PostDetail component", () => {

  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <PostDetail id={1} post={post}/>
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
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <PostDetail id={1} post={post}/>
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
    expect(asFragment()).toMatchSnapshot();

  });

  it("Renders post detail", function () {
    wraperRender(
      <MemoryRouter>
        <PostDetail id={1} post={post} />
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
    expect(screen.queryByText("Location:")).toBeInTheDocument()
  });
})
