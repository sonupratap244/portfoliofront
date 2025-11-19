import { useEffect, useState } from "react";
import API from "../utils/api"; // axios instance
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  const navigate = useNavigate();

  const fetchMessages = async () => {
    try {
      const { data } = await API.get("/messages"); // token protected
      setMessages(data);
    } catch (err) {
      console.error("Error fetching messages:", err);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/messages/${id}`);
      fetchMessages();
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  const handleEdit = (id, msg) => {
    setEditingId(id);
    setEditedMessage(msg);
  };

  const handleUpdate = async (id) => {
    try {
      await API.put(`/messages/${id}`, { message: editedMessage });
      setEditingId(null);
      setEditedMessage("");
      fetchMessages();
    } catch (err) {
      console.error("Error updating message:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isNewMessage = (createdAt) => {
    const msgDate = new Date(createdAt);
    const now = new Date();
    const diffHours = (now - msgDate) / (1000 * 60 * 60);
    return diffHours <= 24; // last 24 hours
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between mb-6 items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {messages.length === 0 ? (
        <p className="text-gray-600">No messages yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl table-auto">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Message</th>
                <th className="py-2 px-4 text-left">Meeting Date</th>
                <th className="py-2 px-4 text-left">Time</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 flex items-center gap-2">
                    {msg.name}
                    {isNewMessage(msg.createdAt) && (
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                        NEW
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">{msg.email}</td>
                  <td className="py-2 px-4">
                    {editingId === msg._id ? (
                      <input
                        value={editedMessage}
                        onChange={(e) => setEditedMessage(e.target.value)}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      msg.message
                    )}
                  </td>
                  <td className="py-2 px-4">{msg.meetingDate || "-"}</td>
                  <td className="py-2 px-4">{msg.meetingTime || "-"}</td>
                  <td className="py-2 px-4 flex gap-2">
                    {editingId === msg._id ? (
                      <button
                        onClick={() => handleUpdate(msg._id)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(msg._id, msg.message)}
                        className="text-blue-600"
                      >
                        <FaEdit />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(msg._id)}
                      className="text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
