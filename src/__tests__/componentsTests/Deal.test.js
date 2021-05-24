import React from "react";
import Deal from "../../components/Deal";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Deal component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <Deal username={"a"} sentInvitePostIds={[]} receivedInvitePostIds={[]} />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <Deal username={"a"} sentInvitePostIds={[]} receivedInvitePostIds={[]} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with deal", function () {
    wraperRender(
      <MemoryRouter>
        <Deal username={"a"} sentInvitePostIds={[]} receivedInvitePostIds={[]} />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            posts:[1],
            username: "a",
            sentInvites: [{ postId: 99, postOwner: "b" }],
            receivedInvites: [{ postId: 1, username: "b"}]
          }
        }
      }
    );
    expect(screen.queryByText("You can make a deal with")).toBeInTheDocument();
    expect(screen.queryByText("Contact")).toBeInTheDocument();
  });
})