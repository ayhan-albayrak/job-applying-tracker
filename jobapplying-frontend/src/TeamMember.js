function TeamMember({
  name,
  description,
  image,
  codepenLink,
  codepenName,
  isCofunder,
}) {
  const founder = isCofunder ?"member co-funder":"member";
  return (
    //founder prop unun className e yaziyoruz.
   <li className={founder}>
      <div className="thumb">
        <img src={image} />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p>
          {description}
          <br />
          <a href={codepenLink}>{codepenName}</a>
        </p>
      </div>
    </li>
  );
}

export default TeamMember;
