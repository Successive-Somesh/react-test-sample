import { useEffect } from "react";
import Item from "./Item";
const ListItem = (props) => {

    return (
        <div>
            {props.items.map((item, index) => {
                return <Item key={item.id} item={item} role="list" data-testid={'list' + index} />
            }
            )}
        </div>);
}
export default ListItem;