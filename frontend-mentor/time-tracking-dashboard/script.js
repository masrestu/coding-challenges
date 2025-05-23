const report = [
    {
        title: "Work",
        imageUrl: "./images/icon-work.svg",
        backgroundColor: "hsl(15, 100%, 70%)",
        timeframes: {
            daily: {
                current: 5,
                previous: 7
            },
            weekly: {
                current: 32,
                previous: 36
            },
            monthly: {
                current: 103,
                previous: 128
            }
        },
    },
    {
        title: "Play",
        imageUrl: "./images/icon-play.svg",
        backgroundColor: "hsl(195, 74%, 62%)",
        timeframes: {
            daily: {
                current: 1,
                previous: 2
            },
            weekly: {
                current: 10,
                previous: 8
            },
            monthly: {
                current: 23,
                previous: 29
            }
        },
    },
    {
        title: "Study",
        imageUrl: "./images/icon-study.svg",
        backgroundColor: "hsl(348, 100%, 68%)",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 7
            },
            monthly: {
                current: 13,
                previous: 19
            }
        },
    },
    {
        title: "Exercise",
        imageUrl: "./images/icon-exercise.svg",
        backgroundColor: "hsl(145, 58%, 55%)",
        timeframes: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 5
            },  
            monthly: {
                current: 11,
                previous: 18
            }
        },
    },
    {
        title: "Social",
        imageUrl: "./images/icon-social.svg",
        backgroundColor: "hsl(264, 64%, 52%)",
        timeframes: {
            daily: {
                current: 1,
                previous: 3
            },
            weekly: {
                current: 5,
                previous: 10
            },
            monthly: {
                current: 21,
                previous: 23
            }
        },
    },
    {
        title: "Self Care",
        imageUrl: "./images/icon-self-care.svg",
        backgroundColor: "hsl(43, 84%, 65%)",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 2,
                previous: 2
            },
            monthly: {
                current: 7,
                previous: 11
            }
        }
    }
]

const formatHours = (value) => value + (value > 1 || value === 0 ? 'hrs' : 'hr')

const timeLabel = {
    daily: 'Day',
    weekly: 'Week',
    monthly: 'Month'
}

let selectedTimeframes = 'monthly'

const cardComponent = ({ title, imageUrl, backgroundColor, timeframes }) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.backgroundColor = backgroundColor

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')
    cardHeader.style.backgroundImage = `url(${imageUrl})`

    const cardDetails = document.createElement('div')
    cardDetails.classList.add('card-details')

    const sectionHeader = document.createElement('div')
    sectionHeader.classList.add('section-header')
    const sectionTitle = document.createElement('span')
    sectionTitle.classList.add('section-title')
    sectionTitle.textContent = title
    const sectionOptions = document.createElement('img')
    sectionOptions.src = './images/icon-ellipsis.svg'
    sectionOptions.alt = 'Options'

    sectionHeader.append(sectionTitle, sectionOptions)
    cardHeader.append(sectionHeader)

    const sectionTimeframes = document.createElement('div')
    sectionTimeframes.classList.add('timeframe')

    const timeCurrent = document.createElement('span')
    timeCurrent.classList.add('current')
    timeCurrent.textContent = formatHours(timeframes[selectedTimeframes].current)

    const timePrevious = document.createElement('span')
    timePrevious.classList.add('previous')
    timePrevious.textContent = `Last ${timeLabel[selectedTimeframes]} - ${formatHours(timeframes[selectedTimeframes].previous)}`

    sectionTimeframes.append(timeCurrent, timePrevious)

    cardDetails.append(sectionHeader)
    cardDetails.append(sectionTimeframes)

    card.append(cardHeader)
    card.append(cardDetails)
    return card
}

const generateCards = (data) => {
    const main = document.querySelector('main')

    main.innerHTML = ''
    selectedTimeframes = document.querySelector('input[type="radio"]:checked').value
    data.forEach(card => {
        main.append(cardComponent(card))
    })
}

const periods = document.querySelectorAll('input[type="radio"]')

periods.forEach(period => {
    period.addEventListener('click', generateCards.bind(null, report))
})

generateCards(report)