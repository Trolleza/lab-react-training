function IdCard(props) {
    return (
<div className="card mb-3" style={{ maxWidth: "95% "}}>
  <div className="row g-0">
    <div className="col-md-4"> <img src={props.picture} alt="..." /> </div>
    <div className="col-md-8">
      <div class="card-body">
        <h5 className="card-title"><span style={{ fontWeight: " 700 "}}>First Name: </span>{props.firstName}</h5>
        <h5 className="card-title"><span style={{ fontWeight: " 700 "}}>Last Name: </span>{props.lastName}</h5>
        <h5 className="card-title"><span style={{ fontWeight: " 700 "}}>Gender: </span>{props.gender}</h5>
        <h5 className="card-title"><span style={{ fontWeight: " 700 "}}>Height: </span>{props.height}m</h5>
        <h5 className="card-title"><span style={{ fontWeight: " 700 "}}>Birth: </span>{props.birth}</h5>
      </div>
    </div>
  </div>
</div>

    );
}

export default IdCard;