import { useContext } from "react/cjs/react.development";
import ItemList from "../../components/Collection/ItemList";
import ResourcesContext from "../../store/resources-context";

const Collection = () => {
  const resourcesCtx = useContext(ResourcesContext);
  
  return <div>
    <ItemList list={resourcesCtx.characters} title="CHARACTERS" />
    <ItemList list={resourcesCtx.items} title="ITEMS" />
  </div>;
};

export default Collection;
