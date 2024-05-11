import { Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, DialogContentText } from "@mui/material";
import {useContext} from 'react';
import {toast} from 'react-toastify';
import { UserContext } from '../../../providers/UserProvider';
import GenreApi from '../../../API/Admin/GenreApi';

const ConfirmDeleteGenre = ({genre, onClose}) => {
    const {updateGenre, setUpdateGenre} = useContext(UserContext);

    const handleDeleteGenre = async () => {
        try {
            await GenreApi.deleteGenre(genre.id);
            setUpdateGenre(!updateGenre);
            toast.success('Xóa thể loại thành công');
        } catch (error) {
            console.log(error);
            toast.error('Xóa thể loại thất bại');
        }
        onClose();
    }

    return (
        <Dialog
            open
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Xác nhận xóa thể loại"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Bạn có chắc chắn muốn xóa thể loại "${genre.name}"?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button onClick={handleDeleteGenre}>Xác nhận</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDeleteGenre;