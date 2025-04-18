// src/components/AdminPanel.js
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

  // Function to generate SHA-256 hash using browser crypto API
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
        hash // passing the hash to the smart contract
      );
      await tx.wait();
      setTxHash(tx.hash);
    } catch (err) {
      console.error(err);
      alert("Certificate issuing failed");
    }
  };

  return (
    <div>
      <h2>Issue Certificate</h2>
      <input name="certId" placeholder="Certificate ID" onChange={handleChange} />
      <input name="name" placeholder="Student Name" onChange={handleChange} />
      <input name="course" placeholder="Course" onChange={handleChange} />
      <input name="date" placeholder="Issue Date" onChange={handleChange} />
      <button onClick={handleIssue}>Issue</button>
      {txHash && (
        <>
          <p><strong>Transaction Hash:</strong> {txHash}</p>
          <p><strong>Certificate SHA-256 Hash:</strong> {certHash}</p>
        </>
      )}
    </div>
  );
};

export default AdminPanel;
