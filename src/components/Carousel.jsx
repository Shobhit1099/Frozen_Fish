import { Button, Typography} from "@material-ui/core";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

export default function () {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <Button
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></Button>
        <Button
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></Button>
        <Button
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></Button>
        <Button
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></Button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100"
            style={{ maxHeight: 625 }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <Typography variant="h5" gutterBottom>Industry Experts</Typography>
            <Typography variant="subtitle1" gutterBottom>One of the leading Cold Storage company in the country</Typography>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            style={{ maxHeight: 625 }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <Typography variant="h5" gutterBottom>Gigantous</Typography>
            <Typography variant="subtitle1" gutterBottom>Bulk storage space of over 5000 MT</Typography>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            style={{ maxHeight: 625 }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <Typography variant="h5" gutterBottom>Services</Typography>
            <Typography variant="subtitle1" gutterBottom>All type of cold storages available 24/7</Typography>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img4}
            className="d-block w-100"
            style={{ maxHeight: 625 }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <Typography variant="h5" gutterBottom>Icy</Typography>
            <Typography variant="subtitle1" gutterBottom>15 Tonnes of ice and dry ice produced per day</Typography>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
