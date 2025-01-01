import React, { useEffect } from "react";

const MortgageCalculatorWidget = ({isModalOpen}) => {
  useEffect(() => {
    // Function to load the external script
    const loadScript = (src) => {
      
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      
    };

   
    // Define settings for the calculator widget
  
    const maoCalc = {};
    maoCalc.settings = {
      theme: "theme4",
      view: "vertical1",
      responsive: "mcw-wrap_250",
      font: "inherit",
      border: true,
      boxShadow: true,
      backgroundColor: "#f9f9f9",
      fieldColor: "#fff",
      textColor: "#334356",
      borderColor: "#49aae4",
      currency: "$",
      currencySide: "left",
      delimiters: ",.",
      popup: true,
      popupView: "doughnutPopup",
      style: true,
      widgetTotalInterest: false,
      widgetTotalPrincipal: false,
      monthlyPayment: "Monthly Payment",
      totalPrincipalPaid: "Total Principal",
      totalInterestPaid: "Total Interest",
      totalPayments: "Total Payments",
      years: "years",
      title: { enabled: true, color: "#334356", label: "Mortgage Calculator" },
      homePrice: { label: "Home Price", value: "350,000" },
      downPayment: { enabled: true, label: "Down Payment", value: "52,000" },
      interestRate: { label: "Interest Rate", value: "4.05" },
      mortgageTerm: { label: "Mortgage Term", value: "30" },
      pmi: { enabled: false, label: "PMI", value: false },
      taxes: { enabled: false, label: "Taxes", value: false },
      insurance: { enabled: false, label: "Insurance", value: false },
      hoa: { enabled: false, label: "HOA", value: false },
      extra: {
        enabled: true,
        labelAdd: "Add extra payments",
        labelRemove: "Remove extra payments",
        labelToMonthy: "To monthly",
        labelYearly: "Extra yearly",
      },
      startDate: { enabled: true, label: "Start Date" },
      monthsArr: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      button: { color: "#ffffff", bg: "#ffffff", label: "Calculate" },
      amortizationSchedule: "Amortization Schedule",
      popupLabels: {
        monthlyPrincipalInterest: "Monthly Principal & Interest",
        monthlyExtraPayment: "Monthly Extra Payment",
        monthlyPayment: "MONTHLY PAYMENT",
        downPayment: "Down payment",
        extraPayments: "Extra payments",
        totalPrincipalPaid: "Total principal paid",
        totalInterestPaid: "Total interest paid",
        totalOfAllPayments: "TOTAL OF ALL PAYMENTS",
        amortizationSchedule: "Amortization Schedule",
        tablePaymentDate: "Payment date",
        tablePayment: "Payment",
        tablePrincipal: "Principal",
        tableInterest: "Interest",
        tableTotalInterest: "Total Interest",
        tableBalance: "Balance",
        pmi: "PMI",
        taxes: "Taxes",
        insurance: "Insurance",
        shortInsurance: "Ins",
        hoa: "HOA",
        chartBalance: "Balance",
        chartPrincipal: "Principal",
        chartInterest: "Interest",
      },
      useTitleAsLink: false,
      titleLinkUrl: "",
      useFooterLink: false,
      footerLinkAnchor: "",
      footerLinkUrl: "",
    };

    // Attach the settings to the global scope
    window.maoCalc = maoCalc;

    // Load the widget script dynamically
    const encodedUrl = btoa(
      unescape(encodeURIComponent(window.location.href))
    );
    const scriptSrc = `https://mortgage-advice-online.org/widget/${encodedUrl}.js`;
    isModalOpen && (
      loadScript(scriptSrc)
    )
    

    return () => {
      // Cleanup: Remove the script when the component unmounts
      const existingScript = document.querySelector(
        `#mcw-wrap_250`
      );
      if (existingScript) {
        document.body.removeId(existingScript);
      }
    };
  }, []);

  return (  
        <div className="mcw-wrap_250" id="maoWrap" style={{ overflow: 'hidden'}}>
          <div id="mcwWidget" className="overflow-hidden"></div>
        </div>
  );
};

export default MortgageCalculatorWidget;
