import { useContext } from "react/cjs/react.development";
import useResources from "../../hooks/use-resources";
import ResourcesContext from "../../store/resources-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './Chest.module.css';

const Chest = props => {
    
    const {canAfford} = useResources();
    const resCtx = useContext(ResourcesContext);

    const checkGold = async (event) => {
      event.preventDefault();
      if (canAfford(props.element.price)) {
        resCtx.addGold(-parseInt(props.element.price));
        props.onSubmit(props.chances, props.element.quantity);
      }
    }

    return <Card>
      <div key={props.element.id} className={classes.chest}>
          <p>{props.element.name}</p>
          <p>Cost: {props.element.price === 0 ? 'Free' : props.element.price}</p>
          <form className={classes.chestForm} onSubmit={checkGold}>
            <Button 
              value='BUY'
              type='submit'
            />
          </form>
        </div>
    </Card>
};

export default Chest;