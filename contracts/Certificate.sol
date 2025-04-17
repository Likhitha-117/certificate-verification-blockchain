// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certificate {
    address public admin;

    // Structure to hold certificate data
    struct CertData {
        string studentName;
        string course;
        string completionDate;
        string certHash;
        bool isValid;
    }

    // Mapping to store certificates using CertID
    mapping(string => CertData) public certificates;

    // Modifier to allow only admin to perform certain actions
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    // Constructor to set the admin address to the account that deploys the contract
    constructor() {
        admin = msg.sender;
    }

    // Issue a certificate by storing its hash and details on-chain
    function issueCertificate(
        string memory certID,
        string memory studentName,
        string memory course,
        string memory completionDate,
        string memory certHash
    ) public onlyAdmin {
        // Check if the certificate ID already exists
        require(certificates[certID].isValid == false, "Certificate ID already exists");

        // Store the certificate data in the mapping
        certificates[certID] = CertData({
            studentName: studentName,
            course: course,
            completionDate: completionDate,
            certHash: certHash,
            isValid: true
        });
    }

    // Verify the certificate by checking stored hash
    function verifyCertificate(string memory certID, string memory certHash) public view returns (bool) {
        // Fetch the certificate from the mapping
        CertData memory cert = certificates[certID];
        
        // Return true if certificate is valid and hashes match
        return cert.isValid && keccak256(abi.encodePacked(cert.certHash)) == keccak256(abi.encodePacked(certHash));
    }

    // Fetch certificate details (if needed in frontend)
    function getCertificate(string memory certID) public view returns (
        string memory studentName,
        string memory course,
        string memory completionDate,
        string memory certHash,
        bool isValid
    ) {
        // Fetch the certificate details from the mapping
        CertData memory cert = certificates[certID];
        
        return (
            cert.studentName,
            cert.course,
            cert.completionDate,
            cert.certHash,
            cert.isValid
        );
    }
}
