import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { api } from "../api/client";

export default function CategoryPage() {
  const { categorySlug } = useParams(); // this wil get us "category" from url
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data from db
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getAllItems();
        const filtered = response.data.filter(
          (item) => item.category === categorySlug,
        );
        setItems(filtered || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug]);

  console.log(items);

  if (loading) return <div>Loading ...</div>;

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.price}€</p>
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  );
}
