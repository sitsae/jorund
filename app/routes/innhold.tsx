import { Outlet, NavLink, useNavigate } from "react-router";
import { useState } from "react";
export default function Innhold() {
  const navigate = useNavigate();
  const [canGoForward, setCanGoForward] = useState(false);

  const handleBack = () => {
    navigate(-1);
    setCanGoForward(true);
  };

  const handleForward = () => {
    if (!canGoForward) return;
    navigate(1);
    setCanGoForward(false);
  };

  return (
    <div className="innholdsramme" style={{ paddingTop: 64 }}>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 16px",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          zIndex: 1000,
        }}
      >
        <NavLink
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <img
            alt="Logo"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=80&h=80&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGxvZ298ZW58MHx8fHwxNzA0OTc5NDg0"
            width={32}
            height={32}
            style={{ borderRadius: 6 }}
          />
        </NavLink>

        <button onClick={handleBack} style={{ padding: "8px 12px" }}>
          Tilbake
        </button>
        <button
          onClick={handleForward}
          disabled={!canGoForward}
          style={{
            padding: "8px 12px",
            opacity: canGoForward ? 1 : 0.5,
            cursor: canGoForward ? "pointer" : "not-allowed",
          }}
        >
          Frem
        </button>

        <NavLink to="/innhold" style={{ marginLeft: "auto", fontWeight: 600 }}>
          Meny
        </NavLink>
      </header>

      <Outlet />
    </div>
  );
}
