import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard(props) {
  const { onClose, open, setPurchase, purchase } = props;

  const handleClose = () => {
    onClose();
  };

  const computeResult = useMemo(() => {
    let count = 0;
    for (let i = 0; i < purchase.length; i++) {
      console.log();
      count += purchase[i].price * 1000;
    }
    return count / 1000;
  }, [purchase.length]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ minWidth: 400 }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                购物列表
              </Typography>
              {purchase.map((item, index) => {
                return (
                  <Typography
                    sx={{ fontSize: 14 }}
                    key={item.product_descriptio + index}
                  >
                    {item.product_description} --{item.selectClick}--
                    {item.price}元
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => {
                        const newPurchase = [...purchase];
                        newPurchase.splice(index, 1);
                        setPurchase(newPurchase);
                      }}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Typography>
                );
              })}
              <Typography sx={{ fontSize: 14 }}>
                合计---{computeResult}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </React.Fragment>
        </Card>
      </Box>
    </Dialog>
  );
}
