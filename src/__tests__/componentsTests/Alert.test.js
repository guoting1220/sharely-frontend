import React from "react";
import Alert from "../../components/Alert";
import { wraperRender } from './testUtils';
import { screen } from '@testing-library/react'

describe("render Alert component", () => {
  it("renders without crashing", function () {
    wraperRender(<Alert />);
  });

  it("matches snapshot", function () {
    const { asFragment } = wraperRender(
        <Alert />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders the connected app with initialState", function () {
    wraperRender(<Alert />, { initialState: { errors: ['wrong'] } });
    expect(screen.getByText("wrong")).toBeInTheDocument()
  });
})