import Button from "../UI/Button";
import classes from './Chest.module.css';

const Chest = props => {

    return <div key={props.element.id} className={classes.chest}>
          <p>{props.element.name}</p>
          <p>Cost: {props.element.price === 0 ? 'Free' : props.element.price}</p>
          <form className={classes.chestForm}onSubmit={(event) =>{
            event.preventDefault();
            props.onSubmit(props.chances, props.element.quantity)}}>
            <Button 
              value='BUY'
              type='submit'
            />
          </form>
        </div>
};

export default Chest;