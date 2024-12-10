import React, { useState } from "react"
import { MediumButton } from "../components/buttons/NormalButton"
import { TextField } from "../components/inputs/TextField"
import { Column } from "../components/layout/Column"
import { useNavigate } from "react-router-dom"
import Logo from "../images/logo.jpg"
import { createUser } from "../http/api"
import { accountCreatedAlert, accountErrorAlert } from "../libs/alert"
import { Toast } from "../components/Toast/Toast"

export const SignUpPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const validateSignUpInfo = () => {
        if (username.length === 0 || username.length < 5) {
            return {
                success: false,
                error: 'O campo nome de usuário precisa ter ao menos 5 caracteres'
            }
        }
        if (email.length === 0) {
            return {
                success: false,
                error: 'O campo email não pode estar vazio'
            }
        }
        if (!email.includes('@')) {
            return {
                success: false,
                error: 'Informe um email válido'
            }
        }
        if (password.length === 0) {
            return {
                success: false,
                error: 'O campo senha não pode estar vazio'
            }
        }
        if (password.length < 8) {
            return {
                success: false,
                error: 'Sua senha precisa ter ao menos 8 caracteres'
            }
        }

        return {
            success: true
        }
    }

    const signUp = async () => {
        setIsLoading(true)
        const validation = validateSignUpInfo()
        if (validation.success === false) {
            accountErrorAlert('Erro na criação da sua conta', validation.error)
            setIsLoading(false)
            return false
        }

        const requestPayload = {
            name: username,
            email,
            password: password
        }

        const response = await createUser(requestPayload)

        console.log('RESPONSE: ', response)
        if (response.success === false) {
            accountErrorAlert(response.error)
            setIsLoading(false)

            return false
        }

        setIsLoading(false)

        const now = new Date()
        const expiry = now.setHours(now.getHours() + 23)

        const toSet = {
            token: response.data.token,
            user_id: response.data.user_id,
            expiry: new Date(expiry)
        }
        localStorage.setItem('user', JSON.stringify(toSet))
        await accountCreatedAlert()
        navigate('/tasks')
    }

    return (
        <Column>
            <img style={{ width: '300px', height: '300px'}} src={Logo} alt='Logo'/>
            <div style={{ width: 500, flex: 1, flexDirection: 'column', textAlign: "center" }}>
                <TextField inputColor="is-link" inputSize="is-medium" placeholder="Digite seu username" changeCallback={setUsername} value={username} />
                <TextField inputColor="is-link" inputSize="is-medium" placeholder="Digite seu email" changeCallback={setEmail} value={email} />
                <TextField type='password' inputColor="is-link" inputSize="is-medium" placeholder="Digite sua senha" changeCallback={setPassword} value={password} />
                {isLoading === false ? <MediumButton marginTop={20} buttonColor='is-link' buttonSize='is-medium' design='is-outlined' text='Criar conta' eventClick={signUp} /> : <div style={{ width: 50, height: 50, margin: "auto", marginTop: 10 }}>Carregando</div>}
                <Toast />
            </div>
        </Column>
    )
}
