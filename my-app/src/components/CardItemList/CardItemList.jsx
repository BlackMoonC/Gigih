import './CardItemList.css'

function CardItemList() {
  return (
    <>
      <div className="card-list-item">
        <img
          src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
          alt=""
        />
        <div className="card-body">
          <h3 className="title">Radio</h3>
          <p>Lana Del Ray</p>
        </div>
      </div>
    </>
  );
}

export default CardItemList;
