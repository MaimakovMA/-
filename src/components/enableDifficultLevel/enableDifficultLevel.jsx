import { useDispatch, useSelector } from "react-redux";
import { setIsActiveGameMode } from "../../store/slices.jsx";
import styles from "./enableDifficultLevel.module.css";

export const EnableDifficultLevel = () => {
  const dispatch = useDispatch();
  const handleCheckboxChange = event => {
    dispatch(setIsActiveGameMode(event.target.value));
  };

  const isActiveGameMode = useSelector(store => store.game.isActiveGameMode);

  return (
    <div className={styles.checkbox}>
      <label className={styles.heading}>Играть до 3 ошибок</label>
      <label htmlFor="activateMode">
        <input className={styles.input} type="checkbox" checked={isActiveGameMode} onChange={handleCheckboxChange} />
      </label>
    </div>
  );
};
