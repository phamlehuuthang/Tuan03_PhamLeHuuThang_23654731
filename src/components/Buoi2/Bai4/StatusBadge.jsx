import { useState } from "react";
import "./StatusBadge.css";

export default function StatusBadge({status}) {
    const [currentStatus, setCurrentStatus] = useState(status);

    return (
        // inline style trong React dùng object {} thay vì chuỗi như CSS
        <div style={{ textAlign: "center", marginTop: "40px"}}>
            {/* class động (dynamic class) */}
            <div className={`badge ${currentStatus}`}>
                {currentStatus.toUpperCase()}
            </div>

            <div className="controls">
                <button onClick={() => setCurrentStatus("online")}>Online</button>
                <button onClick={() => setCurrentStatus("offline")}>Offline</button>
                <button onClick={() => setCurrentStatus("busy")}>Busy</button>
            </div>
        </div>
    )
}