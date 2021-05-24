import React from "react";
import SentInvites from "../../components/SentInvites";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render SentInvites component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <SentInvites />
      </MemoryRouter>,
      {
        initialState: {
          titles: [{ id: 1 }],
          user: {
            username: "a",
            likedPosts: [],
            sentInvites: [],
            receivedInvites: []
          }
        }
      }
    );
  });

  it("renders without invites", function () {
    wraperRender(
      <MemoryRouter>
        <SentInvites />
      </MemoryRouter>,
      {
        initialState: {
          titles: [{ id: 1 }],
          user: {
            username: "a",
            likedPosts: [],
            sentInvites: [],
            receivedInvites: []
          }
        }
      }
    );
    expect(screen.queryByText("Sent Invites:")).toBeInTheDocument();
    expect(screen.queryByText("No invite sent!")).toBeInTheDocument();
  });

  it("renders with invites", function () {
    wraperRender(
      <MemoryRouter>
        <SentInvites />
      </MemoryRouter>,
      {
        initialState: {
          titles: [{ id: 1 }],
          user: {
            username: "a",
            likedPosts: [],
            sentInvites: [{postId:1, postOwner:"b"}],
            receivedInvites: []
          }
        }
      }
    );
    expect(screen.queryByText("No invite sent!")).not.toBeInTheDocument();
  });
})