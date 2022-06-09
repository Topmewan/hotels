import UiButton from '../../components/Ui/UiButton';
import { Amount } from './Amount/Amount';
import styles from './Hotel.module.scss';
import { Slider } from './Slider/Slider';
import { useSlider } from './useSlider';

const photos = [
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
  },
];

export const Hotel = () => {
  const { isOpen, handleClose, handleOpen, handleMove, sliderIndex } =
    useSlider();

  return (
    <div className={styles.hotel}>
      <Slider
        isOpen={isOpen}
        onClose={handleClose}
        handleMove={handleMove}
        index={sliderIndex}
        photos={photos}
      />

      <section className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Tower Street Apartments</h1>
          <p className={styles.address}>5 OldTown Street,33/3</p>
          <h3 className={styles.distance}>
            Excellent Location - 500m from center
          </h3>
          <h3 className={styles.text}>
            Book a stay over $114 at this property and get a free airport taxi
          </h3>
        </div>
        <UiButton variant="primary">Reserve or Book Now!</UiButton>
      </section>

      <section className={styles.gallery}>
        {photos.map((photo, idx) => (
          <div
            className={styles.item}
            key={idx}
            onClick={() => handleOpen(idx)}
          >
            <img src={photo.src} alt="gallery-item" />
          </div>
        ))}
      </section>

      <section className={styles.footer}>
        <div className={styles.desc}>
          <h1 className={styles.title}>Stay in the heart of Krakow</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            illo provident fugit ducimus, dolorum similique non natus at nisi
            deserunt, eum earum quidem. Harum, libero voluptatem obcaecati
            officia quos voluptatum fugit vel dolor possimus facilis atque
            soluta perferendis suscipit quia asperiores, sed voluptatibus
            quisquam blanditiis! Alias reprehenderit in explicabo consectetur
            unde laborum commodi autem exercitationem reiciendis, fuga pariatur
            optio tempora, eligendi, saepe facilis maxime culpa omnis
            dignissimos! Dolorum non unde eaque officiis maiores beatae dolores
            repellat provident accusantium possimus. Dicta, expedita at in
            dolorum culpa ab iste minima corrupti modi. Consectetur numquam
            minima quasi aliquid ducimus. Maxime iusto a debitis!
          </p>
        </div>
        <Amount />
      </section>
    </div>
  );
};
