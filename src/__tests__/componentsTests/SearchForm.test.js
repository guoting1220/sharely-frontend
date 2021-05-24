import React from "react";
import SearchForm from "../../components/SearchForm";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render SearchForm component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

  });

})
