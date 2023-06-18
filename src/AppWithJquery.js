import BookList from "./components/BookList";
import $ from "jquery"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    $("h1").text("AAA")
  })

  return (<>
    <h1>Hello</h1>
    <BookList />
  </>);
}

export default App;
