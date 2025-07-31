import "./App.css"
import BmiLimitations from "./components/BmiLimitations"
import Header from "./components/Header"
import HealthTips from "./components/HealthTips"
import Intro from "./components/Intro"
import ResultDescription from "./components/ResultDescription"

function App() {
    return (
        <div className="w-full relative text-gray-500 pb-24 lg:max-w-360">
            <Header />
            <main className="space-y-16 md:space-y-24 lg:space-y-34">
                <Intro />
                <ResultDescription />
                <HealthTips />
                <BmiLimitations />
            </main>
        </div>
    )
}

export default App
