import {useState} from 'react'

const useDaRealForm = (initialValue) => {
    const[values, setValues] = useState(initialValue)

    let handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

return [values, handleChanges];

};

export default useDaRealForm

