import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Typography,
} from "@mui/material";

function ConfirmDelete({ open, onClose, onConfirm, userName }) {
    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogContent>
                <Typography>Deseja excluir o usuario:</Typography>
                <p>{userName}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>
                    CANCELAR
                </Button>
                <Button onClick={onConfirm}>
                    excluir
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ConfirmDelete;
