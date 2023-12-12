import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function SimpleDialog(props) {
  const { onClose, selectedValue, open, setClick } = props;

  const handleClose = () => {
    onClose();
  };
  const handleSelect = (value) => {
    onClose();
    selectedValue.selectClick = value;
    setClick(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>选择你的口味</DialogTitle>
      <List sx={{ pt: 0 }}>
        {selectedValue?.flavour.map((value, index) => (
          <ListItem key={value + index} onClick={() => handleSelect(value)}>
            {value}
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
export default SimpleDialog;
