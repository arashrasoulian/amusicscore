export function Profile() {
  const profilePicture = false;
  return (
    <div>
      <div className="cover-picture-profile">
        <div className="user-avatar-profile">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile-image" />
          ) : (
            <img
              src="../../public/images/profile-image.png"
              alt="Default Avatar"
            />
          )}
        </div>
      </div>
      <div className="sets-container">
        <div className="mx-4">profile</div>
        <div className="mx-4">repertoire</div>
        <div className="mx-4">practicing</div>
        <div className="mx-4">orchestras</div>
      </div>
    </div>
  );
}
