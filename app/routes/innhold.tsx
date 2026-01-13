import { Outlet, NavLink, useNavigate, useLocation } from "react-router";
import { useMemo } from "react";
import logo from "../content/media/ChatGPT Logo design Jan 12 2026.png";
export default function Innhold() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuSegments = useMemo(
    () => ["", "personlig", "profesjonelt", "bidrag", "motivasjon"],
    []
  );

  const { currentIndex } = useMemo(() => {
    const pathname = location.pathname || "/";
    const afterInnhold = pathname.startsWith("/innhold")
      ? pathname.replace(/^\/innhold\/?/, "")
      : "";
    const segment = afterInnhold.split("/")[0] || "";
    const index = menuSegments.indexOf(segment);
    return { currentIndex: index };
  }, [location.pathname, menuSegments]);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < menuSegments.length - 1;

  const handlePrev = () => {
    if (!hasPrev) return;
    const prevSegment = menuSegments[currentIndex - 1];
    const prevPath = prevSegment ? `/innhold/${prevSegment}` : "/innhold";
    navigate(prevPath);
  };

  const handleNext = () => {
    if (!hasNext) return;
    const nextSegment = menuSegments[currentIndex + 1];
    const nextPath = nextSegment ? `/innhold/${nextSegment}` : "/innhold";
    navigate(nextPath);
  };

  return (
    <div className="innholdsramme" style={{ paddingTop: 180 }}>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 180,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 16,
          padding: "0 16px",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            style={{
              padding: "10px 14px",
              opacity: hasPrev ? 1 : 0.5,
              cursor: hasPrev ? "pointer" : "not-allowed",
            }}
          >
            Forrige
          </button>
        </div>

        <NavLink
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <img
            alt="Logo"
            src={logo}
            width={256}
            height={128}
            style={{ borderRadius: 8 }}
          />
        </NavLink>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifySelf: "end",
          }}
        >
          <button
            onClick={handleNext}
            disabled={!hasNext}
            style={{
              padding: "10px 14px",
              opacity: hasNext ? 1 : 0.5,
              cursor: hasNext ? "pointer" : "not-allowed",
            }}
          >
            Neste
          </button>
          <NavLink to="/innhold" style={{ fontWeight: 600 }}>
            Meny
          </NavLink>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
