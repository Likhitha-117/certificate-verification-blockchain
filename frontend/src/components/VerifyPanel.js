import React, { useState } from "react";
import { getContract } from "../utils/getContract";

const VerifyPanel = () => {
  const [certId, setCertId] = useState("");
  const [certHash, setCertHash] = useState("");
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    try {
      const contract = await getContract();
      const isValid = await contract.verifyCertificate(certId, certHash);
      setResult(isValid ? "✅ Certificate is valid and hash matches." : "❌ Certificate is invalid or hash mismatch.");
    } catch (err) {
      console.error(err);
      alert("Error verifying certificate");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#f4f4f4", // light gray
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Verify Certificate
      </h2>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
          Certificate ID:
        </label>
        <input
          type="text"
          value={certId}
          onChange={(e) => setCertId(e.target.value)}
          placeholder="Enter Certificate ID"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
          Certificate Hash:
        </label>
        <input
          type="text"
          value={certHash}
          onChange={(e) => setCertHash(e.target.value)}
          placeholder="Enter Certificate Hash"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      <button
          onClick={handleVerify}
          style={{
            display: "block", 
            margin: "20px auto", 
            padding: "12px",
            background: "linear-gradient(90deg, #43B5BF, #979283)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            
          }}
        >
         Verify Certificate
        </button>

      {result && (
        <p
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: result.includes("valid") ? "#d4edda" : "#f8d7da",
            color: result.includes("valid") ? "#155724" : "#721c24",
            borderRadius: "8px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {result}
        </p>
      )}
    </div>
  );
};

export default VerifyPanel;
