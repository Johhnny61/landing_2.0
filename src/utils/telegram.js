import axios from "axios";

export default async function sendTelegramOrder({ name, phone, details }) {
  return axios.post("/api/telegram", { name, phone, details });
} 