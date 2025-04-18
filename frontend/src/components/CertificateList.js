import React, { useState } from "react";
import { getContract } from "../utils/getContract";

const CertificateViewer = () => {
  const [certID, setCertID] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");

  const fetchCertificate = async () => {
    try {
      const contract = await getContract();
      const certData = await contract.getCertificate(certID);

      setCertificate({
        studentName: certData[0],
        course: certData[1],
        completionDate: certData[2],
        certHash: certData[3],
        isValid: certData[4],
      });

      setError("");
    } catch (err) {
      console.error("Error fetching certificate:", err);
      setCertificate(null);
      setError("Certificate not found or invalid certificate ID.");
    }
  };

  return (
    <div className="h-screen flex items-start justify-center">
      <div className="bg-white shadow-2xl border border-blue-200 rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center tracking-wide">
          🎓 Verify Certificate
        </h2>

        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certID}
          onChange={(e) => setCertID(e.target.value)}
          className="w-full p-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
        />

        <div className="flex justify-center">
          <button
            onClick={fetchCertificate}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            🔍 View Certificate
          </button>
        </div>

        {error && (
          <p className="text-red-600 mt-4 text-center font-medium">
            {error}
          </p>
        )}

        {certificate && (
          <div className="mt-6 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-5 shadow-inner">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
              📄 Certificate Details
            </h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium text-purple-700">👤 Student Name:</span> {certificate.studentName}</p>
              <p><span className="font-medium text-purple-700">📚 Course:</span> {certificate.course}</p>
              <p><span className="font-medium text-purple-700">📅 Completion Date:</span> {certificate.completionDate}</p>
              <p><span className="font-medium text-purple-700">🔐 Certificate Hash:</span> {certificate.certHash}</p>
              <p>
                <span className="font-medium text-purple-700">✅ Valid:</span>{" "}
                <span className={certificate.isValid ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {certificate.isValid ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateViewer;
