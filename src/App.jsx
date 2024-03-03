import React from "react";
import Html from "./Html";
import Spinner from "./Spinner";


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
      .then(data => data.json())
      .then(data => setData({ ...data, isLoading: false }));

    fetch(`https://wash.npc.com.ua/api/waher/${slug}/pay`)
      .then(data => data.json())
      .then(data => setData(prev => ({ ...prev, ...data })));
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

  return <>
    {data.isLoading === true
      ? <Spinner />
      : <Html data={data} status={status} />
    }
  </>
}

export default App;