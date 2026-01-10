import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api/client.js";
import currencyFormatted from "./utils/currencyFormatter.js";

// simple example how we wil pul data

function App() {
  const [marketItems, setMarketItems] = useState([]);
  const [singleItem, setSingleItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // pull data from api
  useEffect(() => {
    api
      .getAllItems()
      .then((response) => {
        setMarketItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    api.getItemById(5).then((response) => {
      setSingleItem(response.data);
    });
  }, []);

  return (
    <>
      <h2>Hello Martin from frontend</h2>
      <p>here is list of our items in our Bazzar</p>
      <p>You are in: {singleItem.location}</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {marketItems.map((item) => (
            <div key={item.id} className="card-container">
              <li key={item.id}>
                <p>{item.title}</p>
                <img src={item.imageUrl} alt="item-picture" />
                <p>price: {currencyFormatted(item.price)}</p>
              </li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
