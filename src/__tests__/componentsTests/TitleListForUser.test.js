import React from "react";
import TitleListForUser from "../../components/TitleListForUser";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'


describe("render TitleListForUser component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <TitleListForUser/>
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <TitleListForUser />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // it("show post from tile", function () {
  //   wraperRender(
  //     <MemoryRouter>
  //       <TitleListForUser/>
  //     </MemoryRouter>
  //   );
  //   expect(screen.queryByText("Posts from ")).toBeInTheDocument()
  // });

})
