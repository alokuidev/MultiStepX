import Form from "./Component/Form";
import Summary from "./Component/Summary";
import FormContextProvider from "./Context/FormContextProvider";

function App() {
  return (
    <FormContextProvider>
      <Form/>
      <Summary/>
    </FormContextProvider>
  );
}

export default App;
