import { useState } from "react";
import "./LiveForm.css";

export default function LiveForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="container">
            <h2>Live Form</h2>

            <input 
                type="text"
                placeholder="Nhập tên..."
                value={name}
                onChange={(name2) => setName(name2.target.value)} 
            />
            <input 
                type="email"
                placeholder="Nhập email..."
                value={email}
                onChange={(email2) => setEmail(email2.target.value)} 
            />
            <div className="live-output">
                <h3>Giá trị nhập</h3>
                <p><strong>Tên:</strong> {name || "(chưa nhập)"}</p>
                <p><strong>Email:</strong> {email || "(chưa nhập)"}</p>
            </div>
        </div>
    )
}