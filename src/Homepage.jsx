import { useContext } from "react";
import "./index.css";
import styles from "./Homepage.module.css";
import { ProductContext } from "./ProductContext";

export const Homepage = () => {
  const { product, loading, dispatch } = useContext(ProductContext);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.heroEyebrow}>New season, new finds</span>
          <h1 className={styles.heroTitle}>
            Welcome to Satisfy<span className={styles.heroDot}>.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Curated products across fashion, home, and tech — picked for people
            who like things done well.
          </p>
          <a href="#products" className={`btn btn-primary ${styles.heroCta}`}>
            Shop all products
          </a>
        </div>
      </section>

      <section id="products" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>All products</h2>
        </div>

        {loading ? (
          <div className={styles.grid}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonImage} />
                <div className={styles.skeletonLine} />
                <div className={styles.skeletonLineShort} />
              </div>
            ))}
          </div>
        ) : product.length === 0 ? (
          <p className={styles.empty}>No products to show right now.</p>
        ) : (
          <div className={styles.grid}>
            {product.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img
                    className={styles.cardImage}
                    src={item.images[0]}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={`price ${styles.cardPrice}`}>
                    ${item.price}
                  </span>
                  <div></div>
                  <button
                    onClick={() => dispatch({ type: "add", payload: item })}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
