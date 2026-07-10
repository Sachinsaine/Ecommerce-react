import { useContext } from "react";
// import "./index.css";
import styles from "./Homepage.module.css";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import toast from "react-hot-toast";

export const Homepage = () => {
  const { product, loading, dispatch, setWishlist, wishlist } =
    useContext(ProductContext);

  // const filterProducts = product.filter((food) => food.name.includes(input));

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
            {product.map((item) => {
              const isWishlisted = wishlist.some((wish) => wish.id === item.id);
              return (
                <article key={item.id} className={styles.card}>
                  <div className={styles.cardImageWrap}>
                    <Link to={`/productDetails/${item.id}`}>
                      <img
                        className={styles.cardImage}
                        src={item.images[0]}
                        alt={item.title}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <div className={styles.priceCont}>
                      <span className={`price ${styles.cardPrice}`}>
                        ${item.price}
                      </span>
                      <div>
                        {isWishlisted ? (
                          <IoIosHeart
                            className={`${styles.wish} ${styles.active}`}
                            onClick={() => {
                              setWishlist((prev) =>
                                prev.filter(
                                  (product) => product.id !== item.id,
                                ),
                              );
                              toast.info("Removed from wishlist");
                            }}
                          />
                        ) : (
                          <IoIosHeartEmpty
                            className={styles.wish}
                            onClick={() => {
                              setWishlist((prev) => [...prev, item]);
                              toast.success("Added to wishlist");
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <button
                      id="addToBtn"
                      onClick={() =>
                        dispatch(
                          { type: "add", payload: item },
                          toast.success("Item has added"),
                        )
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
