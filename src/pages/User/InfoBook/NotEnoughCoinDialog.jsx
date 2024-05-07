import { Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, DialogContentText } from "@mui/material";
import { useNavigate } from "react-router";

const NotEnoughCoinDialog = ({ onClose, coinNeeded }) => {
    const navigate = useNavigate();

    const handleChargeCoin = () => {
        navigate("/buy-coins");
        onClose();
    }
    return (
        <Dialog
            open
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Không đủ xu"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Bạn cần ${coinNeeded} xu nữa để mua chương này. Bạn có muốn nạp xu không?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button onClick={handleChargeCoin}>Nạp xu</Button>
            </DialogActions>
        </Dialog>
    );
}

export default NotEnoughCoinDialog;