const Navbar = ({ profiles, handleClick }) => {
  return (
    <div>
      <nav>
        {profiles.map((profile, index) => (
          <button key={index} onClick={() => handleClick(profile.name)}>
            {profile.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
