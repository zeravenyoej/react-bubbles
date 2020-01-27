import React, { useState } from 'react';
import api from '../utls/api';

const AddForm = (props) => {

    const initialColor = {
        color: "",
        code: { hex: "" },
        id: Date.now()
    };

    const [newColor, setNewColor] = useState(initialColor)
    

    const handleSubmit = e => {
        e.preventDefault()
        api().post('/api/colors', newColor)
        .then(res=>{
            console.log('added color: ', res.data)
            props.updateColors([...props.colors, newColor])
            setNewColor({
                color: "",
                code: { hex: "" }
            })
        })
        .catch(err=>{
            console.log(err)
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <legend>add color</legend>

                <label>
                color name:
                <input
                    onChange={e =>
                    setNewColor({ ...newColor, color: e.target.value })
                    }
                    value={newColor.color}
                />
                </label>

                <label>
                hex code:
                <input
                    onChange={e =>
                    setNewColor({
                        ...newColor,
                        code: { hex: e.target.value }
                    })
                    }
                    value={newColor.code.hex}
                />
                </label>

                <div className="button-row">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;