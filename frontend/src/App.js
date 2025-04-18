import React, { useState } from "react";
import AdminPanel from "./components/AdminPanel";
import VerifyPanel from "./components/VerifyPanel";
import WalletConnectButton from "./components/WalletConnectButton";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Render the current page content based on state
  const renderPage = () => {
    if (currentPage === "home") {
      return (
        <div
          style={{
            padding: "0px",
            borderRadius: "8px",
            marginTop: "0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap", // makes it responsive on smaller screens
          }}
        >
          {/* Left: Text Content */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h1
              style={{
                fontSize: "64px",
                color: "#333",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "bold",
                lineHeight: 1.2,
                marginTop: "-100px",  // Slightly moves the h1 upwards (adjust the value)
                marginBottom: "20px", // Adjust bottom margin if needed
              }}
            >
              <span
                style={{
                  backgroundImage: "linear-gradient(to right, #43B5BF, #B6BFC0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "transform 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                Blockchain
              </span>{" "}
              -Powered <br />
              Certificate Verification
            </h1>
    
            <p
              style={{
                fontSize: "24px",
                color: "#000000",
                marginBottom: "0px",
                marginTop: "0px",
              }}
            >
              Secure, tamper-proof digital credentials you can trust.
            </p>
    
            <div style={{ marginTop: "30px" }}>
            <button
          onClick={() => setCurrentPage("admin")}
                              style={{
                                padding: "12px 24px",
                                fontSize: "18px",
                                color: "#fff",
                                backgroundImage: "linear-gradient(to right, #43B5BF, #B6BFC0)", // Gradient applied
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease, transform 0.3s ease", // Adding transition to gradient
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = "scale(1.05)"; // Slight scaling on hover
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = "scale(1)"; // Reset scaling
                              }}
                            >
                              Go to Admin Panel
                            </button>

    
                            <button
  onClick={() => setCurrentPage("verify")}
  style={{
    padding: "12px 24px",
    fontSize: "18px",
    marginLeft: "20px",
    color: "#fff",
    backgroundImage: "linear-gradient(to right, #43B5BF, #B6BFC0)", // Gradient applied
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease", // Adding transition to gradient and scaling
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)"; // Slight scaling on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)"; // Reset scaling
  }}
>
  Verify Certificate
</button>

            </div>
          </div>
    
          {/* Right: Image */}
          <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
  <img
    src="/assets/bgpic.png" // 👈 Replace with actual image path (local or URL)
    alt="Blockchain illustration"
    style={{
      maxWidth: "80%",
      height: "80%",
      borderRadius: "10px",
      transform: "translateY(-50px)", // Moves the image up by 10px
    }}
  />
</div>

<div
  style={{
    display: "flex",
    flexDirection: "column", // Align the heading above the cards
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px", // Adjust the space between text and cards
  }}
>
  {/* Heading for the Cards */}
  <h1
    style={{
      margin: "0",
      fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
      fontSize: "38px",
      fontWeight: "bold",
      color: "#4AB6BF",
      textAlign: "center", // Center align the heading
    }}
  >
    Why Choose NeoVerify?
  </h1>

  {/* Cards Container */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "20px", // Adjust the space between the heading and cards
      flexWrap: "wrap", // Make the cards responsive
    }}
  >
    {/* Card 1 */}
    <div
      style={{
        background: "linear-gradient(90deg, rgba(67, 181, 191, 0.4), rgba(151, 146, 131, 0.4))",
        width: "25%", // Decreased width
        height: "300px", // Increased height
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Increased shadow
        textAlign: "center",
        marginBottom: "20px",
        transition: "box-shadow 0.3s ease-in-out", // Smooth transition for shadow on hover
      }}
    >
      <h3 style={{ fontSize: "28px" }}>Blockchain Integrity</h3>
      <p style={{ fontSize: "24px" }}>Certificates are permanently recorded on the blockchain, ensuring authenticity and preventing tampering.</p>
    </div>

    {/* Card 2 */}
    <div
      style={{
        background: "linear-gradient(90deg, rgba(67, 181, 191, 0.4), rgba(151, 146, 131, 0.4))",
        width: "25%", // Decreased width
        height: "300px", // Increased height
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Increased shadow
        textAlign: "center",
        marginBottom: "20px",
        transition: "box-shadow 0.3s ease-in-out", // Smooth transition for shadow on hover
      }}
    >
      <h3 style={{ fontSize: "28px" }}>Instant Verification</h3>
      <p style={{ fontSize: "24px" }}>Employers and institutions can verify credentials instantly with just a certificate ID.</p>
    </div>

    {/* Card 3 */}
    <div
      style={{
        background: "linear-gradient(90deg, rgba(67, 181, 191, 0.4), rgba(151, 146, 131, 0.4))",
        width: "25%", // Decreased width
        height: "300px", // Increased height
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Increased shadow
        textAlign: "center",
        marginBottom: "20px",
        transition: "box-shadow 0.3s ease-in-out", // Smooth transition for shadow on hover
      }}
    >
      <h3 style={{ fontSize: "28px" }}>Global Accessibility</h3>
      <p style={{ fontSize: "24px" }}>Accessible from anywhere in the world, making credential validation simple and secure.</p>
    </div>
  </div>
</div>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
    flexWrap: "wrap", // Make it responsive
  }}
>
  {/* Left side: Image */}
  <div
    style={{
      flex: 1,
      minWidth: "300px", // Ensures the image doesn't get too small
      textAlign: "center",
    }}
  >
    <img
      src="/assets/bgpic2.png" // Replace with the actual image path
      alt="Blockchain Illustration"
      style={{
        marginLeft:"-150px",
        maxWidth: "70%",
        height: "auto",
        borderRadius: "10px",
      }}
    />
  </div>

  {/* Right side: List with heading */}
  <div
    style={{
      flex: 1,
      maxWidth: "500px", // Ensures list items have a minimum width
      textAlign: "center",
      paddingLeft: "20px",
    }}
  >
    <h2
      style={{
        fontSize: "30px",
        color: "black",
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        marginBottom: "20px", // Space between heading and list items
        textAlign: "center",
      }}
    >
     🔐 How NeoVerify Works
    </h2>

    <ul style={{ listStyleType: "none", padding: "0", margin: "0", width: "800px", marginInline: "auto" }}>
  {[
    {
      title: "1. Admin Issues Certificate",
      desc: "Certificates are permanently recorded on the blockchain, ensuring authenticity and preventing tampering.",
    },
    {
      title: "2. Blockchain Hash Generation",
      desc: "The system instantly generates a unique hash of the certificate and stores it on the blockchain.",
    },
    {
      title: "3. Certificate ID & Hash Linked",
      desc: "Each certificate is assigned a Certificate ID, which is linked to its corresponding hash.",
    },
    {
      title: "4. Instant Verification",
      desc: "Anyone can enter the Certificate ID to verify the certificate’s authenticity against the blockchain hash.",
    },
  ].map((item, index) => (
    <li
      key={index}
      style={{
        backgroundColor: "#E5E5E5",
        padding: "10px 15px",
        borderRadius: "10px",
        marginBottom: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 5px" }}>{item.title}</p>
      <p style={{ fontSize: "16px", margin: "0" }}>{item.desc}</p>
    </li>
  ))}
</ul>

  </div>
</div>

     
        </div>
        
      );
    }
    
    // For other pages like admin, verify, about
   else if (currentPage === "admin") {
      return <AdminPanel />;
    } else if (currentPage === "verify") {
      return <VerifyPanel />;
    } else if (currentPage === "about") {
      return (
        <div style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
          <h2 style={{
            fontSize: "32px",
            color: "#333",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            marginBottom: "20px",
          }}>
            About Us
          </h2>
          <p style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.6",
          }}>
            NeoVerify is a platform designed to provide transparency, security, and immutability for certificates using blockchain technology. Our goal is to offer a trusted solution for verifying and issuing certificates in various domains.
          </p>
          <p style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.6",
          }}>
            With blockchain, we ensure that certificates cannot be altered, providing absolute trust for all parties involved.
          </p>
        </div>
      );
    }
    
  };

  return (
    <div>
      {/* Navbar - Visible on all pages */}
      <nav style={{
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  // backgroundColor: "#0066cc", // Custom background color
  color: "white",
  alignItems: "center",
  // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow for a sleek look
}}>
<div style={{
  display: "flex",
  alignItems: "center",
  margin: 0,
  fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
  fontSize: "25px",
  fontWeight: "bold",
  color: "#4AB6BF",
  
}}>
  <img
    src="/assets/logo.png"
    alt="Logo"
    style={{
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "10px"
    }}
  />
  <h2 style={{ margin: 0 ,
     textShadow: "0.5px 0.5px 0 rgba(0,0,0,0.4), -0.5px -0.5px 0 rgba(0,0,0,0.4), 0.5px -0.5px 0 rgba(0,0,0,0.4), -0.5px 0.5px 0 rgba(0,0,0,0.4)"
  }}>NeoVerify</h2>
</div>


  <div style={{ display: "flex", alignItems: "center" }}>
    <button 
      onClick={() => setCurrentPage("home")} 
      style={{

        padding: "10px 20px",
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        // backgroundColor: "#e6f2ff",
        backgroundColor: "transparent",
        fontWeight: "bold",
        border: "none",
        color: "Black",
        // borderRadius: "5px",
        fontSize: "24px",
        cursor: "pointer",
        // transition: "background-color 0.3s ease",
      }}
      // onMouseEnter={(e) => e.target.style.backgroundColor = "#e6f2ff"} // Hover effect
      // onMouseLeave={(e) => e.target.style.backgroundColor = "#fff"}
    >
      Home
    </button>
    <button 
      onClick={() => setCurrentPage("about")} 
      style={{
        // margin: "0 3px",
        padding: "10px 20px",
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        // backgroundColor: "#e6f2ff",
        backgroundColor: "transparent",
        fontWeight: "bold",
        border: "none",
        color: "Black",
        // borderRadius: "5px",
        fontSize: "24px",
        cursor: "pointer",
        // transition: "background-color 0.3s ease",
      }}
      // onMouseEnter={(e) => e.target.style.backgroundColor = "#e6f2ff"} // Hover effect
      // onMouseLeave={(e) => e.target.style.backgroundColor = "#fff"}
    >
      About Us
    </button>
    <button 
      onClick={() => setCurrentPage("verify")} 
      style={{
        // margin: "0 3px",
        padding: "10px 20px",
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        // backgroundColor: "#e6f2ff",
        backgroundColor: "transparent",
        fontWeight: "bold",
        border: "none",
        color: "Black",
        // borderRadius: "5px",
        fontSize: "24px",
        cursor: "pointer",
        // transition: "background-color 0.3s ease",
      }}
      // onMouseEnter={(e) => e.target.style.backgroundColor = "#e6f2ff"} // Hover effect
      // onMouseLeave={(e) => e.target.style.backgroundColor = "#fff"}
    >
    Verify Certificate
    </button>
    <button 
      onClick={() => setCurrentPage("verify")} 
      style={{
        // margin: "0 3px",
        padding: "10px 20px",
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        // backgroundColor: "#e6f2ff",
        backgroundColor: "transparent",
        fontWeight: "bold",
        border: "none",
        color: "Black",
        // borderRadius: "5px",
        fontSize: "24px",
        cursor: "pointer",
        // transition: "background-color 0.3s ease",
      }}
      // onMouseEnter={(e) => e.target.style.backgroundColor = "#e6f2ff"} // Hover effect
      // onMouseLeave={(e) => e.target.style.backgroundColor = "#fff"}
    >
   List Certificates
    </button>

    <WalletConnectButton />
  </div>
</nav>


      {/* Page Content - Dynamically renders different pages */}
      <div style={{ padding: "20px" }}>
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
