import React, { useState } from "react"
import { MediumButton } from "../components/buttons/NormalButton"
import { TextField } from "../components/inputs/TextField"
import { Column } from "../components/layout/Column"
import Logo from '../images/logo.jpg'
import { useNavigate } from "react-router-dom"
import { signIn } from "../http/api"
import { accountErrorAlert } from "../libs/alert"

export const SignInPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const validateLoginInfo = async () => {
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

    const login = async () => {
        setIsLoading(true)
        const validation = await validateLoginInfo()

        if (validation.success === false) {
            console.log('Error')
            await accountErrorAlert('Erro no login', validation.error)
            setIsLoading(false)

            return false
        }
        const requestPayload = {
            email,
            password
        }

        const response = await signIn(requestPayload)

        setIsLoading(false)

        if (response.success === false) {
            accountErrorAlert('Erro no login', response.error)

            return false
        }

        const now = new Date()
        const expiry = now.setHours(now.getHours() + 23)

        const toSet = {
            token: response.data.token,
            user_id: response.data.user_id,
            expiry: new Date(expiry)
        }

        localStorage.setItem('user', JSON.stringify(toSet))
        navigate('/tasks')
    }
    return (
        <Column>
        <img style={{ width: '300px', height: '300px'}} src={Logo} alt='Logo'/>
        <div style={{width: 500, flex: 1, flexDirection: 'column', textAlign: "center"}}>
        <TextField inputColor="is-link" inputSize="is-medium" placeholder="Digite seu email" changeCallback={setEmail}/>
        <TextField inputColor="is-link" inputSize="is-medium" placeholder="Digite sua senha" type='password' changeCallback={setPassword}/>
        {isLoading === false ? <MediumButton marginTop={20} buttonColor='is-link' buttonSize='is-medium' design='is-outlined' text='Entrar' eventClick={login}/> : <div style={{width: 50, height: 50, margin: "auto", marginTop: 10}}>Carregando</div>}
        </div>
        </Column>
        )
    }
