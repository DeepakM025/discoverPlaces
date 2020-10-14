import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Home from "../pages/home";
import Error from "../components/error";
import WeatherDay from "../components/weatherDay";

const renderApp = () => render(<Home/>);

test("Get weather report empty input", () => {
  const {
    queryByTestId
} = renderApp();
  expect(queryByTestId('city-input').nodeValue).toBeNull;
  fireEvent.click(queryByTestId('get-weather-report'));
  expect(Error);
})

test("Get weather report", () => {
  const {
    queryByTestId
} = renderApp();
  fireEvent.change(queryByTestId('city-input'), { target: { value: 'Bengaluru' } })
  fireEvent.click(queryByTestId('get-weather-report'));
  expect(WeatherDay)
})

test("Get weather report unknown input", () => {
  const {
    queryByTestId
} = renderApp();
  fireEvent.change(queryByTestId('city-input'), { target: { value: 'dsa' } });
  fireEvent.click(queryByTestId('get-weather-report'));
  expect(Error);
})