import React, { useState } from "react";
import { getContract } from "../utils/getContract";

const AdminPanel = () => {
  const [form, setForm] = useState({
    name: "",
    course: "",
    date: "",
    certId: "",
  });
  const [txHash, setTxHash] = useState("");
  const [certHash, setCertHash] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateHash = async (text) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const handleIssue = async () => {
    try {
      const combinedText = `${form.certId}|${form.name}|${form.course}|${form.date}`;
      const hash = await generateHash(combinedText);
      setCertHash(hash);

      const contract = await getContract();
      const tx = await contract.issueCertificate(
        form.certId,
        form.name,
        form.course,
        form.date,
        hash
      );
      await tx.wait();
      setTxHash(tx.hash);
    } catch (err) {
      console.error(err);
      alert("Certificate issuing failed");
    }
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "12px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>Issue Certificate</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          name="certId"
          placeholder="Certificate ID"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="name"
          placeholder="Student Name"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="course"
          placeholder="Course"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="date"
          type="date"
          placeholder="Issue Date"
          onChange={handleChange}
          style={inputStyle}
        />
        <button
          onClick={handleIssue}
          style={{
            padding: "12px",
            background: "linear-gradient(90deg, #43B5BF, #979283)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s ease"
          }}
        >
          Issue Certificate
        </button>
      </div>

      {txHash && (
        <div style={{
          marginTop: "25px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          wordBreak: "break-word"
        }}>
          <p><strong>Transaction Hash:</strong><br /> {txHash}</p>
          <p><strong>Certificate SHA-256 Hash:</strong><br /> {certHash}</p>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  padding: "10px 14px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",
  transition: "border-color 0.3s ease",
};

export default AdminPanel;
