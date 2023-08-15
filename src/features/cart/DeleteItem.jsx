import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./CartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  );
}
