import { useState } from "react"

//Function that returns the form template
const WorkoutForm = () => {
    //Create a new Workout object
    //update state of the form
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    //Function to update the state of the form
    const handleSubmit = async (e) => {
        e.preventDefault()  // prevent default behavior when form is submitted

        const workout = {title, load, reps}

        //Fetch api response from server 
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log("New Workout Added")
        }
    }

    //REturning the template 
    return (

        <form className="create" onSubmit={handleSubmit}>
            <h3>New Note</h3>

            <label>Exersise Title:</label>
            <input
            type="text"
            onChange = {(e) => setTitle(e.target.value)} //calls setTitle on change
            value={title}
            />

        <label>Load (in KG):</label>
            <input
            type="number"
            onChange = {(e) => setLoad(e.target.value)}
            value={load}
            />

        <label>Reps:</label>
            <input
            type="number"
            onChange = {(e) => setReps(e.target.value)}
            value={reps}
            />

            <button> Add </button>
            {error && <div className="error">{error}</div>}

        </form>

    )
}
 
export default WorkoutForm;