import { Carousel } from 'react-carousel-minimal';
import { Link } from "react-router-dom";

export default function Holder() {
 const data = [

  {
    image: "https://cdn.pixabay.com/photo/2017/07/25/13/27/wing-2538035_960_720.jpg",
    caption: `<div>
                Tarjous
                <br/>
              </div>`
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/07/14/21/57/instrument-2505099_960_720.jpg",
    caption: "Viulu"
  },
  {
    image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: 
    <Link to="./inc/Discount">Linkki</Link>
  },

  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>Tarjoukset</h2>
        <p>Poiminnat</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            slideBackgroundColor="dark slategray"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
