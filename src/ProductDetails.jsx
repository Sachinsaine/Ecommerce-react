import { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";

export const ProductDetails = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();
  const [dialog, setDialog] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const item = product.find((data) => data.id === Number(id));
  if (!product) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  const handleOpen = (img) => {
    setSelectedImg(img);
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>product details</h1>
      <div className={styles.layout}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={item.images} alt="" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.price}>{`$${item.price}`}</div>
          <div
            className={styles.gallery}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {item.images.map((img, index) => (
              <div>
                <img
                  key={index}
                  src={img}
                  alt={item.title}
                  width="100"
                  height="100"
                  className={styles.thumb}
                  onClick={() => handleOpen(img)}
                />
                <Dialog open={dialog} onClose={handleClose} maxWidth="md">
                  <DialogContent>
                    <img
                      src={selectedImg}
                      alt={item.title}
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "400px",
                      }}
                    />
                  </DialogContent>

                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      variant="outlined"
                      color="error"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            ))}
          </div>
          <div className={styles.description}>
            Category: {item.category.name}
          </div>
          <div className={styles.description}>{item.description}</div>
        </div>
      </div>
    </div>
  );
};
