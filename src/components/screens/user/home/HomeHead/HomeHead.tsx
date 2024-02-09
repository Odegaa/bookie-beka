import React from 'react';
import { StyledButton } from 'src/components/ui';
import styles from './HomeHead.module.scss';
import girl from 'src/assets/images/girl.jpg';
import { Link, useNavigate } from 'react-router-dom';
import appleStore from 'src/assets/images/appleStoreDownload.jpg';
import googlePlay from 'src/assets/images/googlePlayLink.jpg';

const HomeHead: React.FC = () => {
  const navigate = useNavigate();

  const scrollToFrame = () => {
    navigate('/register', { replace: true });
  };

  return (
    <div className={styles.head}>
      <div className={styles.text}>
        <h1>«Bookie» — qaraqalpaq tilindegi audiokitaplar platformasına xosh kelipsiz!</h1>
        <p>
          Bul platformada qaraqalpaq tilinde basıp shıǵarılǵan jáhán, ózbek hám qaraqalpaq
          ádebiyatınıń dúrdana shıǵarmaları jáne qaraqalpaq awızeki dóretiwshiliginiń hasıl
          marjanlarınınıń audio variantların jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy
          dóretpeleri, sonday-aq qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń elektron
          variantların islep shıǵamız hám saytqa jaylastıramız.
        </p>
        <div className={styles.buttonsParent}>
          <StyledButton
            width="100%"
            backgroundcolor="var(--additional-color-4)"
            color="var(--typography-light)"
            onClick={scrollToFrame}
          >
            Baslaw
          </StyledButton>
          <div className={styles.buttons}>
            <Link to="/" className={styles.buttonLink}>
              <img src={googlePlay} alt="googlePlay" />
            </Link>
            <Link to="/" className={styles.buttonLink}>
              <img src={appleStore} alt="appleStore" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img loading="lazy" src={girl} alt="girl books" />
      </div>
    </div>
  );
};

export { HomeHead };
