import React, { useEffect } from "react"
import { MediumButton } from "../components/buttons/NormalButton"
import { Column } from "../components/layout/Column"
import Logo from '../images/logo.jpg'
import { useNavigate } from "react-router-dom"
import { InLine } from "../components/layout/InLine"
//import { TextField } from "../components/inputs/TextField"

export const HomePage = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/users/signin')
    }
    const goToRegister = () => {
        navigate('/users/signup')
    }

    useEffect(() => {
        const now = new Date().getTime()

        const item = JSON.parse(localStorage.getItem('user'))

        if (!item) {
            localStorage.removeItem('user')
        } else {
            const expiry = new Date(item.expiry)
            expiry.setDate(expiry.getDate() + 1)
            console.log(now > expiry.getTime)
            if (now > expiry.getTime()) {
                localStorage.removeItem('user')
            } else {
                navigate('/tasks')
            }
        }
    }, [navigate])
    return (
        <Column>
            <img style={{ width: '300px', height: '300px'}} src={Logo} alt='Logo'/>
            {/**<div style={{width: 200}}>
                <TextField  placeholder='Digite seu email' inputSize='is-medium' inputColor='is-link'/>
            </div> */}
            <InLine>
                <MediumButton buttonColor='is-link' buttonSize='is-medium' design='is-outlined' text='Criar conta' eventClick={goToRegister} />
                <MediumButton buttonColor='is-primary' buttonSize='is-medium' design='is-outlined' text='Entrar' eventClick={goToLogin} />
            </InLine>
        </Column>
    )
}

