import { BsPin } from "react-icons/bs";
import { BsPinFill } from "react-icons/bs";
import { useToggler } from "../custom-hooks/useToggler";
export function PinBtn() {
  const { isToggle, toggleIt } = useToggler();
  return (
    <div>
      {isToggle ? (
        <button className="txt-m btn-icon btn-trash" onClick={toggleIt}>
          <BsPinFill />
        </button>
      ) : (
        <button className="txt-m btn-icon btn-trash" onClick={toggleIt}>
          <BsPin />
        </button>
      )}
    </div>
  );
}
