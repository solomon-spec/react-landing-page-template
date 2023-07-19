import './style.css'

function textsection({ title, text }) {
    return (
        <div className="dark-textsection">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default textsection