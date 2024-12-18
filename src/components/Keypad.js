// Code Keypad Component Here
const handleChange = () => console.log('Entering password...')
function Keypad (){
    return (
        <div>
            <input
            type="password"
            onChange={handleChange}/>
        </div>
    )
}

export default Keypad;