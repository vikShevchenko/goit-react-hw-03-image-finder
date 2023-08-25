import './ImageGallery.css';
import ImageGalLeryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({ loadData }) {
  return (
    <ul className="ImageGallery">
      {loadData.map(({ id, webformatURL, tags }) => (
        <ImageGalLeryItem key={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </ul>
  );
}
