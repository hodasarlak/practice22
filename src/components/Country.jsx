const Country = ({ name, desc, title, photo }) => {
  return (
    <li className="country-info">
      <img src={photo} alt={name} />
      <p className="txt-2">{name}</p>
      <p>
        {desc} {title}
      </p>
    </li>
  );
};
export default Country;