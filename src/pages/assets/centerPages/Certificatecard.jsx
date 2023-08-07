const Certificatecard = (props) => {
  return (
    <div className="Certificatecard">
      <div class="crd crd--effect">
        <div class="crd-img">
          <img src={props.imgs} alt="a" className="crd-img-photo" />
        </div>
        <div class="crd-info">
          <p class="crd-heading">{props.title}</p>
          <p class="crd-text">{props.describtion}</p>
          <a href={props.links} class="crd-text">
            read more
          </a>
        </div>
      </div>
      <div className="certificateabout">{props.describtion}</div>
    </div>
  );
};

export default Certificatecard;
