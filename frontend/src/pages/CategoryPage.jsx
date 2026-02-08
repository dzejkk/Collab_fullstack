import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { api } from "../api/client";
import LoadingSpinner from "../components/LoadingSpinner";
import styles from "../styles/CategoryPage.module.css";

export default function CategoryPage() {
  const { categorySlug } = useParams(); // this wil get us "category" from url
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data from api
  useEffect(() => {
    const fetchData = async () => {
      // DONT FORGET async/await
      try {
        const response = await api.getAllItems();
        const filteredCategory = response.data.filter(
          (item) => item.category === categorySlug, // we need just selected category
        );
        setItems(filteredCategory || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug]);

  //

  const numberOfOffering = items.length;

  console.log(items);

  if (loading) return <LoadingSpinner />;

  return (
    <div className={styles.container}>
      <div className={styles.filteringBar}>
        <div className={styles.barLabel}>
          Number of offerings: {numberOfOffering}{" "}
        </div>

        <div className={styles.priceTag}>Price</div>
        <div className={styles.locality}>Locality</div>
      </div>
      {items?.map((item) => (
        <div key={item.id} className={styles.itemCard}>
          <img src={item.imageUrl} alt={item.title} />
          <div className={styles.headerContainer}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <p className={styles.price}>{item.price}€</p>
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  );
}
