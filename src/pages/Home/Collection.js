import { useContext } from "react/cjs/react.development";
import ResourcesContext from "../../store/resources-context";

const Collection = () => {
  const resourcesCtx = useContext(ResourcesContext);

  const characterList = resourcesCtx.characters.map(char => <p key={char.id}>{char.name}</p>);
  const itemsList = resourcesCtx.items.map(item => <p key={item.id}>{item.name}</p>)

  return <div>
    <p>Characters</p>
    {characterList}
    <p>Items</p>
    {itemsList}
  </div>;
};

export default Collection;
