import { Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, DialogContentText } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import ChapterApi from "../../../API/User/ChapterApi";

const UpdatePriceDialog = ({ onClose, chapter }) => {
    const [error, setError] = useState(false);
    const [price, setPrice] = useState(chapter.price);

    const handleUpdate = () => {
        if (price < 0) {
            setError(true);
            return;
        }
        chapter.price = price;
        chapter.book = chapter.bookId;
        ChapterApi.updateChapter(chapter, chapter.id)
            .then(() => {
                toast.success("Cập nhật giá thành công");
            });
        onClose();
    }
    return (
        <Dialog
            open
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Update price"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Cập nhật giá cho chương "${chapter.title}"`}
                </DialogContentText>
                <TextField
                    error={error}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Price"
                    type="number"
                    fullWidth
                    defaultValue={price}
                    onChange={(event) => {
                        setPrice(event.target.value);
                        setError("");
                    }}
                    helperText={error ? "Giá phải lớn hơn hoặc bằng 0" : ""}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleUpdate}>Update</Button>
            </DialogActions>
        </Dialog>
    );
}

export default UpdatePriceDialog;