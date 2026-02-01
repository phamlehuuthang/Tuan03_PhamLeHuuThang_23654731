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
                onChange={(nameNew) => setName(nameNew.target.value)} 
            />
            <input 
                type="email"
                placeholder="Nhập email..."
                value={email}
                onChange={(emailNew) => setEmail(emailNew.target.value)} 
            />
            <div className="live-output">
                <h3>Giá trị nhập</h3>
                <p><strong>Tên:</strong> {name || "(chưa nhập)"}</p>
                <p><strong>Email:</strong> {email || "(chưa nhập)"}</p>
            </div>
        </div>
    )
}