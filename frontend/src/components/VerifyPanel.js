import React, { useState } from "react";
import { getContract } from "../utils/getContract"; // Utility to get the contract instance

const VerifyPanel = () => {
  const [certId, setCertId] = useState(""); // Certificate ID input
  const [certHash, setCertHash] = useState(""); // Certificate hash input for verification
  const [result, setResult] = useState(null); // Store verification result

  const handleVerify = async () => {
    try {
      const contract = await getContract();
      
      // Call the verifyCertificate function from the smart contract
      const isValid = await contract.verifyCertificate(certId, certHash);

      // Set result based on the verification status
      if (isValid) {
        setResult("Certificate is valid and hash matches.");
      } else {
        setResult("Certificate is invalid or hash mismatch.");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying certificate");
    }
  };

  return (
    <div>
      <h2>Verify Certificate</h2>
      <input
        value={certId}
        onChange={(e) => setCertId(e.target.value)}
        placeholder="Certificate ID"
      />
      <input
        value={certHash}
        onChange={(e) => setCertHash(e.target.value)}
        placeholder="Certificate Hash"
      />
      <button onClick={handleVerify}>Verify</button>
      {result && <p>{result}</p>} {/* Display verification result */}
    </div>
  );
};

export default VerifyPanel;
