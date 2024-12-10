const sweetAlert = require('sweetalert2').default

exports.accountCreatedAlert = async () => {
    return sweetAlert.fire({
        title: "Conta criada com sucesso!",
        icon: 'success',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Continuar'
    })
}

exports.accountErrorAlert = async (title, body, buttonText) => {
    return sweetAlert.fire({
        title,
        icon: 'error',
        html: body,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: "#ff0000",
        cancelButtonText: buttonText || "Tentar novamente"
    })
}

exports.otherUserSuccesAlert = async (title, html) => {
    return sweetAlert.fire({
        title,
        icon: 'success',
        html,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Continuar'
    })
}

exports.taskRemovedAlert = async (title, body) => {
    return sweetAlert.fire({
        title,
        icon: 'success',
        html: body,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Continuar'
    })
}

exports.failRemoveTaskAlert = async (title, body) => {
    return sweetAlert.fire({
        title,
        icon: 'error',
        html: body,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'OK'
    })
}

exports.taskCreatedAlert = async (title, body) => {
    return sweetAlert.fire({
        title,
        icon: 'success',
        html: body,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'OK'
    })
}

