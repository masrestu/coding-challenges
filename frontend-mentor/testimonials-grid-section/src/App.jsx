import './App.css'
import Header from './components/Header'
import TestimonialCard from './components/TestimonialCard'
import TestimonialData from './assets/data/TestimonialsData'
import Footer from './components/Footer'

function App() {
    const testimonials = TestimonialData.testimonials.map(testimonial => (
        <TestimonialCard data={testimonial} />
    ))
    console.log(TestimonialData)

    return (
        <>
            <Header />
            <main className="testimonials-grid">
                {testimonials}
            </main>
            <Footer />
        </>
    )
}

export default App
