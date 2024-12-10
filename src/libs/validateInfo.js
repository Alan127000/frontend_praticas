export const validateUserCreation = (payload) => {
    if (['', ' '].includes(payload.username)) {
        return {
            success: false,
            message: 'O campo nome de usuário não pode estar vazio'
        }
    }
    if (['', ' '].includes(payload.email)) {
        return {
            success: false,
            message: 'O campo email não pode estar vazio'
        }
    }
    if (['', ' '].includes(payload.password)) {
        return {
            success: false,
            message: 'O campo senha senha não pode estar vazio'
        }
    }

    return {
        success: true
    }
}

export const validateUserLogin = (payload) => {
    if (['', ' '].includes(payload.email)) {
        return {
            success: false,
            message: 'O campo email não pode estar vazio'
        }
    }
    if (['', ' '].includes(payload.password)) {
        return {
            success: false,
            message: 'O campo senha senha não pode estar vazio'
        }
    }

    return {
        success: true
    }
}