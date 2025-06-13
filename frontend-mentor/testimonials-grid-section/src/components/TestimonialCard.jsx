import "./TestimonialCard.css"

export default function TestimonialCard({ data }) {
    return (
        <div className={`testimonial-card ${data.colorTheme}`}>
            <div className="testimonial-header">
                <img src={data.avatar} alt="" className="person-image" />
                <div className="person-info">
                    <h3 className="person-name">{data.name}</h3>
                    <p className="person-title">{data.title}</p>
                </div>
            </div>
            <p className="testimonial-summary">
                <strong>{data.summary}</strong>
            </p>
            <p className="testimonial-detail">
                {data.details}
            </p>
        </div>
    )
}