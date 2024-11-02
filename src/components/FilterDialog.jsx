import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Stack } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

const FilterDialog = ({ isOpen, onClose, dropdownOptions = [], multiSelectOptions = [] }) => {
  return (
    <div className="dialog">
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        PaperProps={{
          style: {
            marginTop: "5rem", // Adjust the distance from the top as needed
          },
        }}
        aria-describedby="alert-dialog-description">
        <DialogTitle>Filters</DialogTitle>
        <DialogActions>
          <IconButton onClick={onClose}>
            <MdClose />
          </IconButton>
        </DialogActions>
        <DialogContent>
          <Stack spacing={2} margin={2}></Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Apply Filters</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterDialog;
