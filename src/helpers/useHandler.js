import { useState } from 'react';


const useHandler = () => {

    const [value, setValue] = useState({
        fullName: '',
        city: '',
        post: '',
        number: '+38'
    });

    const changeHandler = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    return [
        value,
        changeHandler
    ]
}

export default useHandler