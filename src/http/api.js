const endpoint = 'http://ec2-13-58-177-120.us-east-2.compute.amazonaws.com:8080'

export const createUser = async (body) => {
    try {
        const payload = JSON.stringify(body)

        const response = await fetch(`${endpoint}/users`, {
            headers: {'Content-Type': 'application/json'},
            method: 'post',
            body: payload
        })

        const json = await response.json()

        return {
            success: true,
            data: json
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            error: error.response.data
        }
    }
}

export const signIn = async (body) => {
    try {
        const payload = JSON.stringify(body)

        const response = await fetch(`${endpoint}/users/login`, {
            headers: {'Content-Type': 'application/json'},
            method: 'post',
            body: payload
        })

        const json = await response.json()

        return {
            success: true,
            data: json
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            error: error.response.data
        }
    }
}

export const getAllTasks = async (user_id, token) => {
    const response = await fetch(`${endpoint}/users/${user_id}/tasks`, {
        method: 'get',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    })

    const json = await response.json()

    return {
        success: true,
        data: json
    }
}

export const deleteTask = async (task_id, token) => {
    try {
        await fetch(`${endpoint}/tasks/${task_id}`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        })

        return {
            success: true
        }
    } catch (error) {
        return {
            success: false
        }
    }
}

export const createTask = async (user_id, body, token) => {
    try {
        await fetch(`${endpoint}/users/${user_id}/tasks`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        })

        return {
            success: true
        }
    } catch (error) {
        return {
            success: false
        }
    }
}

export const updateTask = async (task_id, done, token) => {
    try {
        await fetch(`${endpoint}/tasks/${task_id}`, {
            method: 'put',
            body: JSON.stringify({ done }),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        })

        return {
            success: true
        }
    } catch (error) {
        console.log('ERRR: ', error)
        return {
            success: false
        }
    }
}

