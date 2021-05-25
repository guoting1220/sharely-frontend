import React from "react";
import InviteBtn from "../../components/InviteBtn";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render InviteBtn component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <InviteBtn postId={1} postOwner={"b"}/>
      </MemoryRouter>,
      {
        initialState: {
          user: {
            username: "a",
            sentInvites: [{ postId: 99, postOwner: "b" }]
          }
        }
      }
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <InviteBtn postId={1} postOwner={"b"}/>
      </MemoryRouter>,
      {
        initialState: {
          user: {
            username: "a",
            sentInvites: [{ postId: 99, postOwner: "b" }]
          }
        }
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with invite button", function () {
    wraperRender(
      <MemoryRouter>
        <InviteBtn postId={1} postOwner={"b"} />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            username: "a",
            sentInvites: [{ postId: 99, postOwner: "b" }]
          }
        }
      }
    );
    expect(screen.queryByText("Invite")).toBeInTheDocument();
  });

  it("renders with invite sent button", function () {
    wraperRender(
      <MemoryRouter>
        <InviteBtn postId={99} postOwner={"b"} />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            username: "a",
            sentInvites: [{ postId: 99, postOwner: "b" }]
          }
        }
      }
    );
    expect(screen.queryByText("Invite Sent")).toBeInTheDocument()
  });

})