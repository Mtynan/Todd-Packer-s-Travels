import "./App.css";
import "semantic-ui-css/semantic.min.css";
import OutPutContainer from "./components/DisplayOutPutMessage";
import { Button, Checkbox, Container, Grid } from "semantic-ui-react";
import { useJsApiLoader, useLoadScript } from "@react-google-maps/api";
import Map from "./components/Map";
import DataTable from "./components/DataTable";
import { useData } from "./hooks/useData";
import { useChecked, CheckboxType } from "./hooks/useChecked";
import "@react-google-maps/api";
import { useState } from "react";
import CalculateOptions from "./components/CalculateOptions";

function App() {
  const [calculations, calculateData] = useData();
  const [checked, setChecked] = useChecked(false);
  const [isLoading, setIsLoading] = useState<boolean>();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY!,
  });

  const doStuff = async () => {
    setIsLoading(true);
    await calculateData(checked).then((res) => {
      setIsLoading(false);
    });
  };

  return (
    <div className="App">
      <div data-testid="actionGroup">
        <CalculateOptions
          isChecked={checked}
          calculate={doStuff}
          cbOnChange={setChecked}
        ></CalculateOptions>
      </div>

      {isLoading ? (
        <Container>
          <>Calculating..</>{" "}
        </Container>
      ) : (
        <Container>
          {calculations?.outPutString && (
            <>
              <OutPutContainer
                messages={calculations.outPutString}
              ></OutPutContainer>
              {calculations?.markers && (
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <div data-testid="grid">
                        <DataTable
                          data={calculations?.formattedData}
                        ></DataTable>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={16}>
                      <div data-testid="map">
                        <Map markers={calculations?.markers} />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )}
            </>
          )}
        </Container>
      )}
    </div>
  );
}

export default App;
