// import Input from "../Input/Input"

// eslint-disable-next-line react/prop-types
const Form = ({onSubmit}) => {

    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }
    return (
        <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
            <input required type="text" className="alura-input" placeholder="Insira seu nome..." />
            <input required type="email" className="alura-input" placeholder="Insira seu email..." />
            <button type="submit" className="alura-button">Seguir</button>
        </form>
    )
}

export default Form