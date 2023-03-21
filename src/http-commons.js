import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3001/security_movements",
    headers: {
        "Content-Type": "application/json"
    }
});