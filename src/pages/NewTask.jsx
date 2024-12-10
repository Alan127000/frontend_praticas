import React, { useState } from "react"
import { MediumButton } from "../components/buttons/NormalButton"
import { TextField } from "../components/inputs/TextField"
import { Column } from "../components/layout/Column"
import { useNavigate } from "react-router-dom"
import { createTask } from "../http/api"
import { taskCreatedAlert, accountErrorAlert } from "../libs/alert"
import { Toast } from "../components/Toast/Toast"
import { Navbar } from "../components/navbar/Navbar"

export const NewTaskPage = () => {
    const [taskName, setTaskName] = useState('')
    const [done, setDone] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const insertTask = async () => {
        setIsLoading(true)

        if (taskName.length === 0) {
            accountErrorAlert('Erro ao criar tarefa', 'O campo não pode estar vazio')
            setIsLoading(false)
            return false
        }

        const requestPayload = {
            name: taskName,
            done
        }

        const { user_id, token } = JSON.parse(localStorage.getItem('user'))

        const response = await createTask(user_id, requestPayload, token)

        if (response.success === false) {
            accountErrorAlert('Erro ao criar tarefa', 'Houve um problema ao criar a tarefa, tente novamente!')
            setIsLoading(false)

            return false
        }

        setIsLoading(false)

        await taskCreatedAlert('Tarefa criada', 'A tarefa foi criada com sucesso')
        navigate('/tasks')
    }

    return (
       <>
        <Navbar />
        <Column>
                <h1 style={{ fontSize: '25px', fontWeight: 'bolder'}}>Criar nova tarefa</h1>
                <div style={{ width: 500, flex: 1, flexDirection: 'column', textAlign: "center" }}>
                    <div style={{width: '100%'}}>
                        <TextField inputColor="is-link" inputSize="is-medium" placeholder="Digite o nome da tarefa" changeCallback={setTaskName} value={taskName} />
                    </div>
                    <div style={{marginTop: '10px', width: '100%'}} className="select is-medium">
                        <select style={{width: '100%'}} onChange={e => setDone(Boolean(e.target.value))} defaultValue='fakse'>
                            <option value='true'>Pendente</option>
                            <option value='false'>Concluída</option>
                        </select>
                    </div>
                    <div style={{width: '100%'}}>
                        {isLoading === false ? <MediumButton marginTop={20} buttonColor='is-link' buttonSize='is-medium' design='is-outlined' text='Criar tarefa' eventClick={insertTask} /> : <div style={{ width: 50, height: 50, margin: "auto", marginTop: 10 }}>Carregando</div>}
                        <Toast />
                    </div>
                </div>
            </Column>
       </>
    )
}
