import React, { useState } from "react";
import { FaFileMedical, FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";

const MedicalRecords = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      date: "2024-12-01",
      type: "Blood Test",
      description: "Routine blood check-up.",
    },
    {
      id: 2,
      date: "2024-11-20",
      type: "X-Ray",
      description: "Chest X-Ray for cough evaluation.",
    },
  ]);

  const [newRecord, setNewRecord] = useState({
    type: "",
    description: "",
    date: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdateRecord = () => {
    if (!newRecord.type || !newRecord.description || !newRecord.date) return;

    if (editingId !== null) {
      // Update existing record
      setRecords((prev) =>
        prev.map((record) =>
          record.id === editingId ? { ...record, ...newRecord } : record
        )
      );
      setEditingId(null);
    } else {
      // Add new record
      const id = records.length ? records[records.length - 1].id + 1 : 1;
      setRecords([...records, { id, ...newRecord }]);
    }

    setNewRecord({ type: "", description: "", date: "" });
  };

  const handleEdit = (record) => {
    setNewRecord({
      type: record.type,
      description: record.description,
      date: record.date,
    });
    setEditingId(record.id);
  };

  const handleDelete = (id) => {
    setRecords(records.filter((r) => r.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setNewRecord({ type: "", description: "", date: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e0e7ec] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-[#174e6c] mb-4 leading-tight flex justify-center items-center gap-2">
          <FaFileMedical className="text-[#174e6c]" />
          Medical Records
        </h2>
        <p className="text-lg text-gray-700">
          Securely view and manage your health history.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <ul className="space-y-6">
          {records.map((record) => (
            <li
              key={record.id}
              className="p-6 bg-[#f8fbfc] border border-[#d7e5ea] rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-[#174e6c]">
                    {record.type}
                  </h3>
                  <p className="text-gray-600 mt-1">{record.description}</p>
                  <p className="text-sm text-gray-500 mt-1">{record.date}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(record)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(record.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Add/Update Form */}
        <div className="mt-10 border-t pt-6">
          <h3 className="text-2xl font-bold text-[#174e6c] mb-4 flex items-center gap-2">
            <FaPlusCircle /> {editingId ? "Update Record" : "Add New Record"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Record Type"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#174e6c] focus:outline-none"
              value={newRecord.type}
              onChange={(e) =>
                setNewRecord({ ...newRecord, type: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#174e6c] focus:outline-none"
              value={newRecord.description}
              onChange={(e) =>
                setNewRecord({ ...newRecord, description: e.target.value })
              }
            />
            <input
              type="date"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#174e6c] focus:outline-none"
              value={newRecord.date}
              onChange={(e) =>
                setNewRecord({ ...newRecord, date: e.target.value })
              }
            />
          </div>
          <button
            className="mt-6 px-6 py-3 bg-[#174e6c] text-white rounded-full shadow-md hover:bg-[#123c50] transition-all"
            onClick={handleAddOrUpdateRecord}
          >
            {editingId ? "Update Record" : "Save Record"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
