import Button from "../UI/Button";

const Chest = props => {

    return <div key={props.element.id}>
          <p>{props.element.name}</p>
          <p>Cost: {props.element.price === 0 ? 'Free' : props.element.price}</p>
          <form onSubmit={(event) =>{
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