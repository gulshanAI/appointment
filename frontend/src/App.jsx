import { useState } from "react";
import Calendar from "./components/Calendar";
import useFetch from "./hooks/useFetch";

function App() {
  const [filters, setFilters] = useState({});
  const { data, loading, error } = useFetch("appointment", filters);
  console.log(data, loading, error);
  return <Calendar data={data.data} />;
}

export default App;
