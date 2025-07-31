export default function ResultDescription() {
    return <section className="result-description space-y-12 md:grid md:grid-cols-[71fr_74fr] md:items-center md:gap-x-18 md:me-11 md:space-y-0 xl:mx-35 xl:gap-x-32.5 xl:items-end xl:grid-cols-[188fr_155fr] xl:mb-24">
        <img src="images/image-man-eating.webp" alt="Man eating" />
        <div className="result-description__content mx-6 space-y-8 md:mx-0 xl:pb-11">
            <svg className="hidden xl:block ms-auto me-6" xmlns="http://www.w3.org/2000/svg" width="85.831" height="200.501" viewBox="0 0 85.831 200.501"><path fill="none" stroke="#ACC1DE" d="M82.719.092c7.831 41.7 2.31 140.08-82.43 200" /></svg>
            <h2 className="text-preset-3 text-blue-900 xl:text-preset-2">What your BMI result means</h2>
            <p className="text-preset-6 text-gray-500">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
    </section>
}