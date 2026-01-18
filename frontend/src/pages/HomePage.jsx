import { useState, useEffect } from "react";
import { api } from "../api/client";
import styles from "../styles/HomePge.module.css";
import {
  Car,
  Bike,
  Smartphone,
  Armchair,
  Dumbbell,
  Leaf,
  Book,
  Music,
  Shirt,
} from "lucide-react";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCategories();
        // Prístup k poľu cez response.data (podľa tvojho logu)
        setData(response.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // for icons
  const iconMap = {
    Car,
    Bike,
    Smartphone,
    Armchair,
    Dumbbell,
    Leaf,
    Book,
    Music,
    Shirt,
  };
  const IconComponent = iconMap[data.icon];

  return (
    <main>
      <div className={styles.container}>
        {data.map((category) => {
          // This is NOT a return statement - it's the arrow function body
          const IconComponent = iconMap[category.icon];

          // THIS is the return statement for the map function
          return (
            <div className={styles.categoryCard} key={category.id}>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              {IconComponent && <IconComponent size={84} strokeWidth={0.75} />}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
