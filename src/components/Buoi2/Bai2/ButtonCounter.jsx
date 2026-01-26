import { useState } from "react"

export default function ButtonCounter(){
    const [count, setCount] = useState(0);

    const cong = () => {
        setCount(count + 1);
    }

    const tru = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div style={styles.container}>
            <h2>Counter:</h2>

            <div
                style={{
                    ...styles.number, 
                    color: count > 10 ? "red" : "White"
                }}>
                    {count}
            </div>
            
            <div style={styles.buttons}>
                <button onClick={cong}>+</button>
                <button onClick={tru}>-</button>
                <button onClick={reset}>Reset</button>

            </div>
        </div>
    );

    
}

const styles = {
        container: {
            textAlign: "center",
            marginTop: "20px"
        },

        number: {
            fontSize: "24px",
            margin: "20px 0",
            fontWeight: "bold"
        },

        buttons: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#282c34",
            padding: "10px",
            borderRadius: "8px"
        }
    };
