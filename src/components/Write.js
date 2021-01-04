import React, {useState} from "react";

export function Write(props){
    const [state, setState] = useState({
        writer: '',
        writeContent: '',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleClick = e => {
        props.writeFunc(state.writer, state.writeContent);
        setState({
            writer: '',
            writeContent: ''
        })
    }

    return <>
        <div style={styles.div}>
            <input style={styles.input} type = "text" placeholder = "작성자" value={state.writer} onChange={getValue}/>
            <textarea style={styles.textarea} placeholder = "내용" value={state.writeContent} onChange={getValue}/>
            <button style={styles.btn} onClick={handleClick}>작성</button>
        </div>
    </>

}
const styles = {
    div: {
        width:"1000px",
        height:"500px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        margin: 30,
        boxShadow:"0 0 30px rgba(0,0,0,0.5)",
        borderRadius:"20px",
    },
    input: {
        width: "500px",
        margin: "50px",
    },
    textarea: {
        width: "500px",
        height: "200px",
        resize: "none",
        border: "2px",
        boxShadow:"0 0 30px rgba(0,0,0,0.5)",
        margin: "30px",
    },
    btn: {
        width: "250px",
        height: "50px",
        border: "none",
        boxShadow:"0 0 30px rgba(0,0,0,0.5)",
    }
}
