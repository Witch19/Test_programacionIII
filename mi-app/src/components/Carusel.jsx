import { Carousel } from 'antd';
import img1 from '../img/81COM-HvRvL._UF894,1000_QL80_.jpg';
import img2 from '../img/canva-mountain-landscape-MADaqpevv8c.jpg';
import img3 from '../img/paisaje-e1549600034372.jpg';
import img4 from '../img/premium_photo-1709579654090-3f3ca8f8416b.jpg';

const imagenes = [img1, img2, img3, img4];

export default function Carusel() {
  return (
    <Carousel autoplay arrows>
      {imagenes.map((src, idx) => (
        <div key={idx}>
          <img
            src={src}
            alt={`img-${idx}`}
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>
      ))}
    </Carousel>
  );
}
