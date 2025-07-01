import styles from "./portifolio.module.css";

export default function Portifolio () {
    const portifolio = [
        { id: 1, title: "Conquer the cold weather in style", img: "/assets/vest.png", descr: "Don’t let low temperatures compromise your look. Our premium corporate wear jackets are designed to keep you warm while maintaining a polished, professional appearance. Whether you're heading to the office or meeting clients on the move, stay comfortable and stylish with jackets that blend functionality with corporate elegance." },
        { id: 2, title: "Comfort Meets Professional Style", img: "/assets/shirt.png", descr: "Our corporate wear round neck shirts are the perfect blend of simplicity, comfort, and brand-ready professionalism. Designed for everyday wear, they offer a clean, modern look that’s ideal for team branding, staff uniforms, or corporate events. Whether in the office or out in the field, make a lasting impression with quality shirts that speak for your brand." },
    ]
  return (
    <div className={styles.portifolio_container} id="portifolio">
      <h3 className={styles.portifolio_title}>Some of our best work</h3>
      <div>
        {portifolio.map(port => (
            <div key={port.id} className={styles.portifolio} style={{ direction: port.id%2 == 0 ? "rtl":"ltr" }}>
                <img src={port.img} alt={port.title} />
                <div className={styles.port_details}>
                    <h4>{port.title}</h4>
                    <p>{port.descr}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}