import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h2>👤 User Profile</h2>
      <p>User ID from URL: <strong>{id}</strong></p>
    </div>
  );
}

export default UserProfile;
