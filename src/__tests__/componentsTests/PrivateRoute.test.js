import React from "react";
import PrivateRoute from "../../components/PrivateRoute";
import { MemoryRouter } from "react-router";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render PrivateRoute component", () => {
  it("renders without crashing", function () {
    wraperRender(
      <MemoryRouter>
        <PrivateRoute />
      </MemoryRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <PrivateRoute  />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot without login", function () {
    const { asFragment } = wraperRender(
      <MemoryRouter>
        <PrivateRoute />
      </MemoryRouter>,
      {
        initialState: {
          user: {
             token:null
          }
        }
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
})