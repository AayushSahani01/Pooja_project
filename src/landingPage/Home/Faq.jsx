import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of products do you offer at Pooja Designer Boutique?",
      answer:
        "We offer a wide range of ethnic wear, bridal outfits, and modern fusion designs tailored to your preferences.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly through our website by browsing collections, adding items to your cart, and checking out securely.",
    },
    {
      question: "Can I get a custom design made?",
      answer:
        "Yes, we specialize in custom designs. Share your requirements, and our team will bring your vision to life.",
    },
    {
      question: "Do you offer tailoring services?",
      answer:
        "Absolutely! We offer expert tailoring to ensure a perfect fit for every customer.",
    },
    {
      question: "How long does delivery usually take?",
      answer:
        "Standard delivery takes 5–7 business days, while custom orders may take 2–3 weeks depending on the complexity.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major debit/credit cards, UPI, net banking, and cash-on-delivery in selected regions.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#1d3557",  
        }}
        className="faq-heading" 
      >
        Frequently Asked Questions
      </h2>
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              style={{
                padding: isActive ? "20px" : "15px 20px", 
                margin: "15px 0", 
                border: isActive
                  ? "2px solid oklch(0.7 0.2 44.12)"
                  : "1px solid #444", 
                borderRadius: isActive ? "16px" : "12px", 
                background: isActive ? "#1e1e1e" : "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
                color: "#f0f0f0", 
                minHeight: "70px", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="faq-item" 
            >
              <div
                style={{
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "18px",
                  color: "#ffffff", 
                }}
                className="faq-question" 
              >
                <span>{faq.question}</span>
                <span
                  style={{
                    fontSize: "26px",
                    fontWeight: "bold",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {isActive ? "−" : "+"}
                </span>
              </div>
              {isActive && (
                <div
                  style={{
                    marginTop: "10px",
                    lineHeight: "1.5",
                    color: "#e0e0e0", 
                    fontWeight: "400",
                  }}
                  className="faq-answer" 
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Light and dark mode styles */}
      <style>{`
        :root:not(.dark) .faq-item {
          color: #1d3557 !important; 
          border-color: #ff8c42 !important; 
        }
        
        :root:not(.dark) .faq-question {
          color: #1d3557 !important; 
        }
        
        :root:not(.dark) .faq-answer {
          color: #333 !important; 
        }
        
        :root:not(.dark) .faq-item {
          background-color: #f1faee !important; 
        }
        :root:not(.dark) .faq-item.active {
          background-color: #ffffff !important; 
          border-color: #ff8c42 !important; 
          border-width: 2px !important;
        }
        .dark .faq-heading {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
};

export default Faq;