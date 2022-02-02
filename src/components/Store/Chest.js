import useResources from "../../hooks/use-resources";
import Button from "../UI/Button";
import classes from './Chest.module.css';

const Chest = props => {
    
    const {canAfford} = useResources();

    const checkGold = async (event) => {
      event.preventDefault();
      if (canAfford(props.element.price)) {
        const res = await props.onSubmit(props.chances, props.element.quantity);
        if (res) {
          console.log('Ok');
        } else {
          console.log('Dupa');
        }
      } else {
        console.log('Sorry');
      }
    }

    return <div key={props.element.id} className={classes.chest}>
          <p>{props.element.name}</p>
          <p>Cost: {props.element.price === 0 ? 'Free' : props.element.price}</p>
          <form className={classes.chestForm} onSubmit={checkGold}>
            <Button 
              value='BUY'
              type='submit'
            />
          </form>
        </div>
};

export default Chest;