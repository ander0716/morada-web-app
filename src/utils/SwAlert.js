import swal from 'sweetalert';

export const SW_ICON = {
    SUCCES: 'succes',
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning'
};

export const showAlert = (title, text, icon, callback) => {
    swal({ title, text, icon }).then(callback);
};