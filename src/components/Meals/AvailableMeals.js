import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchmeals = async () => {
      const response = await fetch(
        "https://reactmeals-d3d5f-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) throw new Error("Something is wrong!");
      const data = await response.json();

      let meals = [];
      for (const key in data) {
        meals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(meals);
      setIsLoading(false);
    };
    fetchmeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading)
    return (
      <section>
        <p className={classes.loading}>Loading......</p>
      </section>
    );

  if (httpError) {
    return (
      <section>
        <p className={classes.httpError}>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      id={meal.id}
    />
  ));

  return (
    <section className={classes["meals"]}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
