import React from "react";
import MyPosts from "../../components/MyPosts";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Likes component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <MyPosts />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <MyPosts />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without posts", function () {
    wraperRender(
      <MemoryRouter>
        <MyPosts />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            username: "a",
            posts:[]
          }
        }
      }
    );
    expect(screen.queryByText("No posts yet!")).toBeInTheDocument();
    expect(screen.queryByText("My Posts:")).toBeInTheDocument();
  });

  it("renders with posts", function () {
    wraperRender(
      <MemoryRouter>
        <MyPosts />
      </MemoryRouter>,
      {
        initialState: {
          titles:[{
            id:1,
            itemName: "tt",
            ageGroup: "baby",
            city:"dd",
            category:"toy"
          }],
          user: {
            username: "a",
            posts: [1],
            sentInvites: [],
            likedPosts: [],
          }
        }
      }
    );
    expect(screen.queryByText("No posts yet!")).not.toBeInTheDocument();
    expect(screen.queryByText("My Posts:")).toBeInTheDocument();
  });
})