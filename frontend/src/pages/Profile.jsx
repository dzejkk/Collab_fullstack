import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { logout, user } = useAuth();
  return (
    <div>
      <p>here is your profile page {user.name}</p>
      <p>you can edit your preferences</p>

      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
