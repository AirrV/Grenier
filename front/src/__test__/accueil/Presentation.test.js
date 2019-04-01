import React from 'react';
import Presentation from "../../components/accueil/Presentation.js";
import renderer from "react-test-renderer";

it("Renders the presentation sectio", () => {
  const tree = renderer
    .create(<Presentation />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})