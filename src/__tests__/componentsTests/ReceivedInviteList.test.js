import React from "react";
import ReceivedInviteList from "../../components/ReceivedInviteList";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'


describe("render ReceivedInviteList component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <ReceivedInviteList />
      </MemoryRouter>,
      {
        initialState: {
          titles: [
            { id: 1, itemName: "item1", imgUrl: null },
            { id: 99, itemName: "item99", imgUrl: null }
          ],
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
        <ReceivedInviteList  />
      </MemoryRouter>,
      {
        initialState: {
          titles: [
            { id: 1, itemName: "item1", imgUrl: null },
            { id: 99, itemName: "item99", imgUrl: null }
          ],
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

  it("Renders ReceivedInviteList", function () {
    wraperRender(
      <MemoryRouter>
        <ReceivedInviteList  />
      </MemoryRouter>,
      {
        initialState: {
          titles:[
            {id:1, itemName:"item1", imgUrl:null},
            { id: 99, itemName: "item99", imgUrl: null }
          ],
          user: {
            posts: [1],
            username: "a",
            sentInvites: [{ postId: 99, postOwner: "b" }],
            receivedInvites: [{ postId: 1, username: "b" }]
          }
        }
      }
    );
    expect(screen.queryByText("Click on the user's name tag to check the posts from the user and make a deal!")).toBeInTheDocument()
  });
})
