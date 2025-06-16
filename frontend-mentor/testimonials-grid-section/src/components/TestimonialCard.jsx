import styles from "./TestimonialCard.module.css"

export default function TestimonialCard({ data }) {
    return (
        <div className={`${styles['testimonial-card']} ${styles[data.colorTheme]}`}>
            <div className={styles['testimonial-header']}>
                <img src={data.avatar} alt="" className={styles['person-image']} />
                <div className={styles['person-info']}>
                    <h3 className={styles['person-name']}>{data.name}</h3>
                    <p className={styles['person-title']}>{data.title}</p>
                </div>
            </div>
            <p className={styles['testimonial-summary']}>
                <strong>{data.summary}</strong>
            </p>
            <p className={styles['testimonial-detail']}>
                {data.details}
            </p>
        </div>
    )
}