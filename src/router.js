import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { SignInPage } from "./pages/SignIn"
import { SignUpPage } from "./pages/SignUp"
import { TasksPage } from "./pages/Tasks"
import { NewTaskPage } from "./pages/NewTask"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/users/signup' element={<SignUpPage />} />
                <Route exact path='/users/signin' element={<SignInPage />} />
                <Route exact path='/tasks' element={<TasksPage />} />
                <Route exact path='/tasks/new' element={<NewTaskPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
