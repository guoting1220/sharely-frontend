import React from "react";
import TitleList from "../../components/TitleList";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

const titles = [
  {
    id: 1,
    itemName: "item1",
    imgUrl: null,
    username: "a",
    postDate: "date",
    city: "city",
    category: "book",
    ageGroup: "kid",
    imgUrl:null
  }
]

describe("render TitleList component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <TitleList titles={ titles}/>
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <TitleList titles={titles}/>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("show item name", function () {
    wraperRender(
      <MemoryRouter>
        <TitleList titles={titles} />
      </MemoryRouter>
    );
    expect(screen.queryByText("item1")).toBeInTheDocument()
  });

})
