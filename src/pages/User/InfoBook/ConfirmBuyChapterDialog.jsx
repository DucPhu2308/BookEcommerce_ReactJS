import { Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, DialogContentText } from "@mui/material";

const ConfirmBuyChapterDialog = ({ onClose, chapter }) => {
    const handleConfirmBuyChapter = () => {
        console.log("Buy chapter");
    }
    return (
        <Dialog
            open
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Xác nhận mua chương"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Bạn có chắc chắn muốn mua chương "${chapter.title}" với giá ${chapter.price} xu?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button onClick={handleConfirmBuyChapter}>Xác nhận</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmBuyChapterDialog;