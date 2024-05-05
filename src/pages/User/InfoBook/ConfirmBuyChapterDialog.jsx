import { Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, DialogContentText } from "@mui/material";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import UserApi from "../../../API/User/UserApi";

const ConfirmBuyChapterDialog = ({ onClose, chapter }) => {
    const navigate = useNavigate();

    const handleConfirmBuyChapter = () => {
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/login");
            return;
        }
        UserApi.buyChapter(chapter.id)
            .then((res) => {
                toast.success("Mua chương thành công");
                chapter.bought = true;

                // update balance
                const newBalance = res.data.data;
                const user = JSON.parse(localStorage.getItem("user"));
                user.coin = newBalance;
                localStorage.setItem("user", JSON.stringify(user));
                
                onClose();
            })
            .catch((error) => {
                toast.error("Mua chương thất bại");
                console.log("Failed to buy chapter: ", error);
            });
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