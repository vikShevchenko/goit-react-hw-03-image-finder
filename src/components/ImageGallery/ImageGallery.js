import './ImageGallery.css'
export default function ImageGallery({ loadData: {data} }) {
  // console.log(data)
  
  return (
    <>
      <ul className='wrapper'>
        {data.hits.map(({id, webformatURL, tags}) => (
          <li key={id} className='gallery-item' >
            <img className='image' src={webformatURL} alt={tags}></img>
          </li>
        ))}
      </ul>
    </>
  );
}
