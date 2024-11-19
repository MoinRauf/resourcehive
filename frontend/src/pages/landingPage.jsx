import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <div className="flex gap-4">
        <Link to="/login">Log-In</Link>
        <Link to="/sign_up">Sign-Up</Link>
      </div>
    </>
  );
}
