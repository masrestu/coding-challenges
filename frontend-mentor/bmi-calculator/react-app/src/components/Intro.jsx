import { createRef, useRef, useState } from "react"
import RadioButton from "./RadioButton"
import InputGroup from "./InputGroup"

export default function Intro() {
    const [currentUnit, setCurrentUnit] = useState("metric")
    const [bmi, setBmi] = useState(0)

    const inputRefs = useRef({})

    const getRef = (id) => {
        if (!inputRefs.current[id]) {
            inputRefs.current[id] = createRef()
        }

        return inputRefs.current[id]
    }

    const idealWeight = () => {
        const idealBmi = [18.5, 24.9]
        const minMaxWeight = []
        if (currentUnit === "metric") {
            idealBmi.forEach(value => {
                const { cm } = inputRefs.current
                const m = parseInt(cm.current.value) / 100
                minMaxWeight.push(`${formatNumber(value * (m ** 2))}kgs`)
            })
        } else if (currentUnit === "imperial") {
            idealBmi.forEach(value => {
                const { ft, in: inch } = inputRefs.current
                const total_inch = parseInt(ft.current.value) * 12 + parseInt(inch.current.value)
                const total_lbs = value * (total_inch ** 2) / 703
                const st = Math.floor(total_lbs / 14)
                const lbs = Math.floor(total_lbs % 14)
                minMaxWeight.push(`${st}st ${lbs}lbs`)
            })
        }

        return minMaxWeight.join(" - ")
    }

    const calculateBmi = () => {
        let result = 0
        if (currentUnit === "metric") {
            const { kg, cm } = inputRefs.current
            const m = parseInt(cm.current.value) / 100
            if (!m) result = 0
            result = parseInt(kg.current.value) / (m ** 2)
        } else if (currentUnit === "imperial") {
            const { st, lbs, ft, in: inch } = inputRefs.current
            const total_lbs = parseInt(st.current.value) * 14 + parseInt(lbs.current.value)
            const total_inch = parseInt(ft.current.value) * 12 + parseInt(inch.current.value)
            if (!total_inch) result = 0
            result = (total_lbs / (total_inch ** 2)) * 703
        }
        setBmi(formatNumber(result))
    }

    const formatNumber = (score) => {
        return Math.round(score * 10) / 10
    }

    const bmiClassification = () => {
        if (bmi < 18.5) {
            return "an underweight"
        } else if (bmi < 25) {
            return "a healthy weight"
        } else if (bmi < 30) {
            return "an overweight"
        } else {
            return "an obese"
        }
    }

    const measurementUnit = {
        "metric": {
            weight: ["kg"],
            height: ["cm"],
        },
        "imperial": {
            weight: ["st", "lbs"],
            height: ["ft", "in"],
        },
    }

    const handleUnitChange = (event) => {
        // reset form
        Object.keys(inputRefs.current).map(unit => {
            inputRefs.current[unit].current = 0
        })
        calculateBmi()

        setCurrentUnit(event.target.value)
    }

    const inputs = ["height", "weight"]

    return <section className="intro mx-6 space-y-8 md:mx-10 md:space-y-10 md:mb-22 lg:mx-35 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 lg:mb-34">
        <div className="intro__description space-y-6 text-center lg:text-start lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:space-y-0">
            <h1 className="text-blue-900 text-preset-2 lg:text-preset-1">Body Mass<br />Index Calculator</h1>
            <p className="text-preset-6 lg:pe-25">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
        </div>
        <form className={`space-y-6 p-6 md:p-8 bg-white rounded-2xl drop-shadow-(--custom-drop-shadow) lg:space-y-8 ${currentUnit} group/form`}>
            <h2 className="text-blue-900 text-preset-4">Enter your details below</h2>
            <h3 className="sr-only">Select Measurement Unit</h3>
            <div className="grid grid-cols-2 gap-x-6">
                {
                    Object.keys(measurementUnit).map(key => (
                        <RadioButton 
                            id={`mu-${key}`} 
                            isChecked={currentUnit === key}
                            value={key}
                            onChange={handleUnitChange}
                            name="measurement-unit"
                            key={key}
                        />
                    ))
                }
            </div>
            <div className={`grid group-[.metric]/form:md:grid-cols-2 gap-y-4 md:gap-6`}>
                {
                    inputs.map(input => (
                        <InputGroup
                            currentUnit={currentUnit}
                            getRef={getRef}
                            label={input}
                            measurementUnit={measurementUnit}
                            onChange={calculateBmi}
                            key={input}
                        />
                    ))
                }
            </div>
            <div className={`result flex flex-col bg-blue-500 text-white p-8 rounded-2xl gap-6 md:rounded-r-(--rounded-result-box) ${bmi ? "md:grid md:grid-cols-2 md:items-center lg:gap-x-6" : "lg:gap-4"}`}>
                {
                    bmi ?
                        <>
                            <div className="space-y-2">
                                <span className="block text-preset-6 font-semibold">Your BMI is...</span>
                                <span className="block text-preset-2 lg:text-preset-1" id="bmi-value">{bmi.toFixed(1)}</span>
                            </div>
                            <p className="text-preset-7">Your BMI suggests you’re {bmiClassification()}. Your ideal weight is between <span id="ideal-weight" className="font-bold">{idealWeight()}</span>.</p>
                        </> :
                        <>
                            <h3 className="text-preset-4">Welcome!</h3>
                            <p className="text-preset-7">Enter your height and weight and you'll see your BMI result here</p>
                        </>
                }
            </div>
        </form>
    </section>
}