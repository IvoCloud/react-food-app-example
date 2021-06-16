import DUMMY_DB from './dummy_db'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
  const mealsList = DUMMY_DB.map(element => <li>{element.name}</li>);
  return <section className={classes.meals}>
    <ul>
      {mealsList}
    </ul>
  </section>
};

export default AvailableMeals;