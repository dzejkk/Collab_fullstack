import { useState, useEffect } from "react";
import { api } from "../api/client";
import styles from "../styles/HomePge.module.css";
import { Link } from "react-router";
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
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCategories();
        // Prístup k poľu cez response.data (podľa tvojho logu)
        setData(response.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
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

  if (loading) return <LoadingSpinner />;

  return (
    <main>
      <div className={styles.container}>
        {data.map((category) => {
          // This is NOT a return statement - it's the arrow function body
          const IconComponent = iconMap[category.icon];

          return (
            // get dynamic url from category object from db
            <Link to={`/category/${category.slug}`} key={category.id}>
              <div className={styles.categoryCard}>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                {IconComponent && (
                  <IconComponent size={84} strokeWidth={0.75} />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
