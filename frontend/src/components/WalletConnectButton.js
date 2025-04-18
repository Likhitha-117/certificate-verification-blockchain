import React, { useEffect, useState } from "react";

const WalletConnectButton = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Wallet connection error:", err);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };

    checkConnection();

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
        window.location.reload();
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }

    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener("accountsChanged", () => {});
        window.ethereum.removeListener("chainChanged", () => {});
      }
    };
  }, []);

  return (
    <button
      onClick={connectWallet}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "30px",
        border: "none",
        cursor: "pointer",
        backgroundImage: "linear-gradient(to right, #43B5BF, #B6BFC0)",
        color: "white",
        fontWeight: "bold",
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.05)";
        e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
      }}
    >
      {account
        ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
        : "Connect Wallet"}
    </button>
  );
};

export default WalletConnectButton;
