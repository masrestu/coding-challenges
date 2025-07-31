export default function HealthTips() {
    const tips = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#F21E84" opacity=".15" /><path fill="#F21E84" d="M44 29.25h-1.279a10.75 10.75 0 0 0-21.442 0H20a.75.75 0 0 0-.75.75 12.794 12.794 0 0 0 7 11.383V42A1.75 1.75 0 0 0 28 43.75h8A1.75 1.75 0 0 0 37.75 42v-.617a12.793 12.793 0 0 0 7-11.383.75.75 0 0 0-.75-.75Zm-6.22-6.464c.363.29.703.608 1.019.95a10.737 10.737 0 0 0-6.444 5.514h-4.187A9.28 9.28 0 0 1 37 22.75c.26 0 .521.014.78.036Zm2.008 2.231a9.186 9.186 0 0 1 1.43 4.233H34.06a9.237 9.237 0 0 1 5.727-4.233ZM32 20.75a9.21 9.21 0 0 1 3.35.625 10.79 10.79 0 0 0-8.742 7.875h-3.826A9.261 9.261 0 0 1 32 20.75Zm4.688 19.48a.75.75 0 0 0-.438.683V42a.25.25 0 0 1-.25.25h-8a.25.25 0 0 1-.25-.25v-1.087a.75.75 0 0 0-.438-.683 11.294 11.294 0 0 1-6.537-9.48h22.45a11.294 11.294 0 0 1-6.538 9.48Z" /></svg>,
            summary: "Healthy eating",
            details: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#F69134" opacity=".15"/><path fill="#F69134" d="M47 31.25h-1.25V27A1.75 1.75 0 0 0 44 25.25h-2.25V24A1.75 1.75 0 0 0 40 22.25h-3A1.75 1.75 0 0 0 35.25 24v7.25h-6.5V24A1.75 1.75 0 0 0 27 22.25h-3A1.75 1.75 0 0 0 22.25 24v1.25H20A1.75 1.75 0 0 0 18.25 27v4.25H17a.75.75 0 1 0 0 1.5h1.25V37A1.75 1.75 0 0 0 20 38.75h2.25V40A1.75 1.75 0 0 0 24 41.75h3A1.75 1.75 0 0 0 28.75 40v-7.25h6.5V40A1.75 1.75 0 0 0 37 41.75h3A1.75 1.75 0 0 0 41.75 40v-1.25H44A1.75 1.75 0 0 0 45.75 37v-4.25H47a.75.75 0 1 0 0-1.5Zm-27 6a.25.25 0 0 1-.25-.25V27a.25.25 0 0 1 .25-.25h2.25v10.5H20ZM27.25 40a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm13 0a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm4-3a.25.25 0 0 1-.25.25h-2.25v-10.5H44a.25.25 0 0 1 .25.25v10Z"/></svg>,
            summary: "Regular exercise",
            details: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#22C1C1" opacity=".15"/><path fill="#22C1C1" d="M45.75 28a.75.75 0 0 1-.75.75h-2.25V31a.75.75 0 0 1-1.5 0v-2.25H39a.75.75 0 1 1 0-1.5h2.25V25a.75.75 0 1 1 1.5 0v2.25H45a.75.75 0 0 1 .75.75ZM34 22.75h1.25V24a.75.75 0 1 0 1.5 0v-1.25H38a.75.75 0 0 0 0-1.5h-1.25V20a.75.75 0 0 0-1.5 0v1.25H34a.75.75 0 1 0 0 1.5Zm8.906 12.535a.75.75 0 0 1 .134.75A11.751 11.751 0 1 1 27.97 20.96a.75.75 0 0 1 .992.849 11.262 11.262 0 0 0 13.23 13.229.75.75 0 0 1 .714.247Zm-1.796 1.418A12.765 12.765 0 0 1 27.297 22.89a10.248 10.248 0 0 0 1.526 18.849 10.25 10.25 0 0 0 12.287-5.036Z"/></svg>,
            summary: "Adequate sleep",
            details: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
        },
    ]
    return <section className="health-tips mx-6 py-14 md:bg-linear-(--color-gradient) md:mx-0 md:px-10 md:py-15 lg:rounded-(--rounded-tips-box) lg:mx-6 lg:px-29 lg:py-20.5">
        <h2 className="sr-only">Health Tips</h2>
        <div className="tips-card space-y-10 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-8">
            {
                tips.map((tip) => (
                    <div className="tip-card flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:flex-col lg:items-start lg:gap-12" key={tip.summary}>
                        {tip.icon}
                        <div className="tip-card__content space-y-6">
                            <h3 className="text-preset-4 text-blue-900">{tip.summary}</h3>
                            <p className="text-preset-6 text-gray-500">{tip.details}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
}