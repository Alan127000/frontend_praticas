import React, { useEffect, useState } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { getAllTasks, deleteTask, updateTask } from "../http/api"
import { taskRemovedAlert, failRemoveTaskAlert } from "../libs/alert"

export const TasksPage = () => {
    const [completedTasks, setCompletedTasks] = useState([])
    const [refresh, setRefresh] = useState([])
    const [pendingTasks, setPendingTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getTasks() {
            setIsLoading(true)
            const { user_id, token } = JSON.parse(localStorage.getItem('user'))
            const resp = await getAllTasks(user_id, token)

            const pending = resp.data.filter(i => !i.done)
            const completed = resp.data.filter(i => i.done)

            setPendingTasks(pending)
            setCompletedTasks(completed)
            setIsLoading(false)
        }

        getTasks()
    }, [refresh])

    const removeTask = async (task_id) => {
        const { token } = JSON.parse(localStorage.getItem('user'))
        const result = await deleteTask(task_id, token)

        if (result.success) {
            await taskRemovedAlert('Tarefa removida com sucesso', 'A tarefa foi excluída permanentemente')
        } else {
            await failRemoveTaskAlert('Falha ao remover a tarefa', 'Devido a um erro, não foi possível remover a tarefa')
        }

        setRefresh(!refresh)
    }

    const changeTaskStatus = async (task_id, status, taskName) => {
        const { token } = JSON.parse(localStorage.getItem('user'))
        const result = await updateTask(task_id, status, token)

        if (result.success) {
            await taskRemovedAlert('Tarefa atualizada com sucesso', `A tarefa ${taskName} foi atualizada para ${status ? 'Concluída' : 'Pendente'}`)
        } else {
            await failRemoveTaskAlert('Falha ao atualizar a tarefa', 'Devido a um erro, não foi possível atualizar a tarefa')
        }

        setRefresh(!refresh)
    }
    return (
        <>
            <Navbar />
            {isLoading === false &&
                <div>
                    <div style={{ padding: '5px' }}>
                        <h1 style={{ fontSize: 20, fontWeight: 'bolder' }}>Concluídas</h1>
                        {completedTasks.map((task, index) => {
                            return (
                                <div key={index} style={{ border: '1px solid gray', width: '50%', padding: '10px', borderRadius: '10px', marginBottom: '5px', boxShadow: '2px 2px 2px 2px gray', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <span>{task.name}</span>
                                    <div>
                                        <button className="button is-warning is-rounded" onClick={() => changeTaskStatus(task._id, false, task.name)}>Desconcluir</button>
                                        <button className="button is-danger is-rounded" style={{ marginLeft: '5px' }} onClick={() => removeTask(task._id)}>Remover</button>
                                    </div>
                                </div>
                            )
                        })}
                        {completedTasks.length === 0 && <h2>Você não tem tarefas concluídas</h2>}
                    </div>
                    <div style={{ padding: '5px' }}>
                        <h1 style={{ fontSize: 20, fontWeight: 'bolder' }}>Pendentes</h1>
                        {pendingTasks.map((task, index) => {
                            return (
                                <div key={index} style={{ border: '1px solid gray', width: '50%', padding: '10px', borderRadius: '10px', marginBottom: '5px', boxShadow: '2px 2px 2px 2px gray', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <span>{task.name}</span>
                                    <div>
                                        <button className="button is-success is-rounded" onClick={() => changeTaskStatus(task._id, true, task.name)}>Concluir</button>
                                        <button className="button is-danger is-rounded" style={{ marginLeft: '5px' }} onClick={() => removeTask(task._id)}>Remover</button>
                                    </div>
                                </div>
                            )
                        })}
                        {pendingTasks.length === 0 && <h2>Você não tem tarefas pendentes</h2>}
                    </div>
                </div>
            }
            {isLoading && <div style={{border: '1px solid red', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><progress class="progress is-small is-info" max="100"></progress></div>}
        </>
    )
}
