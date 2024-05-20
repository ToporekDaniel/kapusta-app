import Avatar from "react-avatar";
//import Modal from '../Modal/ModalClosePopup';
import styles from "./UserLogOut.module.css";
import { useTranslation } from "react-i18next";

const UserLogOut = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Avatar
        size="32"
        color={Avatar.getRandomColor("sitebase", [
          "red",
          "green",
          "blue",
          "orange",
          "violete",
          "rose",
          "yellow",
        ])}
        className={styles.userIcon}
      />
      <p className={styles.userName}>Email</p>
      <button className={styles.logOutBtn}>
        <p className={styles.logOutTextBtn}>{t('LogOut')}</p>
      </button>
    </div>
  );
};

export default UserLogOut;
