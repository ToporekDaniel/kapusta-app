import Avatar from 'react-avatar';
import Modal from '../Modal/ModalClosePopup';
import styles from './UserLogOut.module.css';

const UserLogOut = () => {
return (
    <div className={styles.wrapper}>
      <Avatar
        name={name}
        size="32"
        color={Avatar.getRandomColor('sitebase', [
          'red',
          'green',
          'blue',
          'orange',
          'violete',
          'rose',
          'yellow',
        ])}
        className={styles.userIcon}
      />
      {viewPort.width >= 768 && (
        <>
          <p className={styles.userName}>{name}</p>
          <button type="button" onClick={toggleModal} className={styles.logOutBtn}>
            <p className={styles.logOutTextBtn}>{t('logout.exit')}</p>
          </button>
        </>
      )}
      {viewPort.width < 768 && (
        <>
          <div className={styles.logOutIcon}>
            <RiLogoutBoxRLine onClick={toggleModal} color={'#CBCCD0'} size={'16px'} />
          </div>
        </>
      )}
      {setModalOpen && (
        <Modal
        />
      )}
    </div>
  );
};

export default UserLogOut;