import React from "react";
import Html from "./Html";
import Spinner from "./Spinner";
import Error from "./Error";


const pathnameArrFiltered = window.location.pathname
  .split("/")
  .filter((item) => item !== "");

const slug = pathnameArrFiltered[pathnameArrFiltered.length - 1];



function App() {
  const [data, setData] = React.useState({ isLoading: true });
  const [status, setStatus] = React.useState({
    text: "",
    color: "",
    disabled: true
  })

  React.useEffect(() => {
    fetch(`https://wash.npc.com.ua/api/waher/${slug}/info`)
      .then(data => {
        if (data.status == 404) {
          console.log("%c404 error while receiving API", "color:white; background:red")
          return setData({ ...data, isLoading: false, is404: true })
        }
        else {
          console.log("%cAPI received succesfully", "color:white; background:green")
          return data.json();
        }
      })
      .then(data => setData(prev => ({ ...prev, ...data, isLoading: false })))
      .catch(data => setData(prev => ({ ...prev, ...data, isLoading: false, is404: true })))

    fetch(`https://wash.npc.com.ua/api/waher/${slug}/pay`)
      .then(data => data.json())
      .then(data => setData(prev => ({ ...prev, ...data })))
      .catch(data => setData(prev => ({ ...prev, ...data, isLoading: false, is404: true })));
  }, [])

  React.useEffect(() => {
    console.log(data)

    switch (data.status) {
      case 'available':
        setStatus(prev => ({
          ...prev,
          text: "Вільна",
          color: "green",
          disabled: false,
        }));
        break;

      case 'busy':
        setStatus(prev => ({
          ...prev,
          text: "Зайнята",
          color: "red",
        }));
        break;

      case 'unavailable':
        setStatus(prev => ({
          ...prev,
          text: "Не доступна",
          color: "red",
        }));
        break;

      default:
        setStatus(prev => ({
          ...prev,
          text: "Відключена",
          color: "gray",
        }));
    }

  }, [data]);

  // ---------------------

  if (data.isLoading === true) {
    return <Spinner />
  }

  if (data.is404 === true) {
    return <Error />
  }

  return <Html data={data} status={status} />
}

export default App;