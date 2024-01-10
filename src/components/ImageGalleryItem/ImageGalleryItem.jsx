import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ image, onImageClick }) => {
  const { id, tags, webformatURL, largeImageURL } = image;
  return (
    <li key={id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => onImageClick(largeImageURL, tags)}
      />
    </li>
  );
};


