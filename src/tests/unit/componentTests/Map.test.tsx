import { screen, render } from "@testing-library/react";
import Map from "../../../components/Map";
import * as ReactGoogleMapsApi from "@react-google-maps/api";

describe("Map", () => {
  it("renders loading message", () => {
    jest
      .spyOn(ReactGoogleMapsApi, "useLoadScript")
      .mockReturnValue({
        isLoaded: false,
        loadError: undefined,
        url: ""
      });
      render(<Map />);
      expect(screen.getByText('Loading map..')).toBeInTheDocument();
  });

  // it("shows map", () => {
  //   global.google = { maps: { Map: jest.fn(), Marker: jest.fn() } } as unknown as typeof google;
  //   jest
  //     .spyOn(ReactGoogleMapsApi, "useJsApiLoader")
  //     .mockReturnValue({
  //       isLoaded: true,
  //       loadError: undefined,
     
  //     });
  //   render(<Map />);

  //   screen.debug();
  //   expect(screen.getByText('map')).toBeInTheDocument();
  //});
});

