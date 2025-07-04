import QuizProvider from "../context/QuizContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return <QuizProvider>
        <Header />

        <main>
            <Outlet />
        </main>
    </QuizProvider>
}