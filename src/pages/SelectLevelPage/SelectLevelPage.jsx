import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { EnableDifficultLevel } from "../../components/enableDifficultLevel/enableDifficultLevel.jsx";
import { Button } from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentLevel, setLeaders } from "../../store/slices.jsx";
import { getLeaders } from "../../api.jsx";

export function SelectLevelPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [choosenLevel, setChoosenLevel] = useState(null);

  const handleButtonClick = () => {
    if (choosenLevel !== null) {
      dispatch(setCurrentLevel({ choosenLevel }));
      navigate(`/game/${choosenLevel}`);
    }
  };

  useEffect(() => {
    getLeaders().then(leaders => dispatch(setLeaders(leaders)));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={choosenLevel === 3 ? styles.choosenLevel : styles.level} onClick={() => setChoosenLevel(3)}>
            1
          </li>
          <li className={choosenLevel === 6 ? styles.choosenLevel : styles.level} onClick={() => setChoosenLevel(6)}>
            2
          </li>
          <li className={choosenLevel === 9 ? styles.choosenLevel : styles.level} onClick={() => setChoosenLevel(9)}>
            3
          </li>
        </ul>
        <EnableDifficultLevel />
        <Button children={"Играть"} onClick={handleButtonClick} />
        <Link className={styles.leaderboardLink} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
