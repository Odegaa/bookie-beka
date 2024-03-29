import React from 'react';
import { IBookItem } from 'src/types/Types';
import styles from './BookCard.module.scss';
import prince from 'src/assets/images/no_photo.jpg';
import heart0 from 'src/assets/images/heart0.svg';
import heart1 from 'src/assets/images/heart1.svg';
import views from 'src/assets/images/views.svg';
import { StyledButton } from 'src/components/ui';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { userStore } from 'src/store/userStore';
import play from 'src/assets/images/play.svg';
import { formatPrice } from 'src/services/services';
import { message } from 'antd';
import { FaShoppingCart } from 'react-icons/fa';

const BookCard: React.FC<IBookItem> = (props) => {
  const { categoryId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { price, slug, title, author, image, quantity } = props;
  const { addToFavorite, favorites, removeFromFavorite, addToCart } = userStore();
  const isFav = favorites.some((item) => item.slug === slug);

  const buttonFilter = !categoryId && pathname !== '/my_books' && pathname !== '/favorites';
  const audioFilter = pathname === '/my_books';
  const priceFilter = categoryId || pathname === '/favorites';

  const handleClickFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToFavorite(props);
  };
  const handleRemoveFromFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeFromFavorite(slug);
  };

  const handleClickBook = () => {
    if (pathname !== '/my_books') {
      navigate(`/book/${slug}`);
    } else {
      navigate(`/audiobook/${slug}`);
    }
  };

  const handleClickCart = () => {
    addToCart(props);
    message.success('Sebetke qosıldı');
  };

  return (
    <div onClick={handleClickBook} className={styles.book_card}>
      <div className={styles.img}>
        <img src={image[0] ? image[0].image_url : prince} alt="image" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.text}>
            <h3>{title}</h3>
            <p>{author && author[0].name}</p>
          </div>
          <div className={styles.favorite}>
            {isFav ? (
              <img onClick={handleRemoveFromFavorite} src={heart1} alt="favorite" />
            ) : (
              <img onClick={handleClickFavorite} src={heart0} alt="favorite" />
            )}
          </div>
        </div>
        <div className={styles.waves}>
          {audioFilter && (
            <Link key={slug} to={`/audiobook/${slug}`}>
              <img className={styles.play} src={play} alt="play icon" />
            </Link>
          )}
          {priceFilter && <h4>{formatPrice(price)} som</h4>}
          <div>
            <img src={views} alt="wave" />
            <span>{quantity}</span>
          </div>
          {buttonFilter && (
            <StyledButton
              backgroundcolor="var(--additional-color-4)"
              color="var(--typography-light)"
              onClick={() => navigate(`/audiobook/${slug}`, { replace: true })}
            >
              Tıńlaw
            </StyledButton>
          )}
          <button className={styles.addToCartButton} onClick={handleClickCart}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export { BookCard };
