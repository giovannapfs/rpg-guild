import axios from "axios";

const requester = axios.create({
    baseURL: "http://localhost:8880",
});

export default requester;