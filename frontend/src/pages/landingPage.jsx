import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/sign_up">Signup</Link>
      </div>
    </>
  );
}
