import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <p>Click to see user profile:</p>

      <Link to="/user/101">Go to User 101</Link>
    </div>
  );
}

export default Home;
