import React from "react";
import Avatar from "react-avatar";
//import Modal from '../Modal/ModalClosePopup';
import styles from "./UserLogOut.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogOut = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        alert('Not authenticated');
        return;
      }

      await axios.post(
        'https://kapusta-server.onrender.com/api/auth/logout',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      navigate('/signin');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Error during logout. Please try again.');
    }
  };

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
      <button className={styles.logOutBtn} onClick={handleLogout}>
        <p className={styles.logOutTextBtn}>{t('LogOut')}</p>
      </button>
    </div>
  );
};

export default UserLogOut;
