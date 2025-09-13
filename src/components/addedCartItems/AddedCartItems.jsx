import styles from "./addedCartItems.module.css";
export default function AddedCartItems({ addedItems }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div>
          <img src={addedItems.image_link} alt="" />
        </div>
        <div>
          <div className={styles.title}>
            {addedItems.name} | {`${addedItems.description}`}{" "}
          </div>
          <div>
            <span>Colours: </span>
            {addedItems.product_colors.map((colors) =>
              //   <span> {`${colors.colour_name},`}</span>

              colors.colour_name === null ||
              colors.colour_name === undefined ? (
                <span>Medium Bronze</span>
              ) : (
                <span>{`${colors.colour_name}`}</span>
              )
            )}
          </div>
        </div>
        <div className={styles.price}>{`$${addedItems.price}`}</div>
      </div>
    </div>
  );
}
