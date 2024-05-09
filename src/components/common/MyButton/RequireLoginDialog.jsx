import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const RequireLoginDialog = ({ open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle>Yêu cầu đăng nhập</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Bạn cần đăng nhập để thực hiện chức năng này
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Đóng</Button>
                <Button component={Link} to="/login">Đăng nhập</Button>
            </DialogActions>
        </Dialog>
    );
}

export default RequireLoginDialog;