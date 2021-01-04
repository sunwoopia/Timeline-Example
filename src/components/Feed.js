import React from "react";

export function Feed(props) {
    return <div style={styles.feed}>
        <div style={styles.content}>작성자 : {props.name}</div>
        <div style={styles.content}>내용 : {props.body}</div>
    </div>
}

const styles = {
    feed: {
        boxShadow:"0 0 30px rgba(0,0,0,0.5)",
        padding: 15,
        margin: 15,
        width: 500,
    },
    content: {
        margin: 10,
    }
}
