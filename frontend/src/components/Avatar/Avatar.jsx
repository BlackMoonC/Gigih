import './style.css'

const user = {
  name: "Rakhel Cakra",
  imgUrl: "https://images.unsplash.com/photo-1580034283351-073a1906f7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=733&q=80",
  tagManipulation: <div>Cakra</div>
};

export default function Avatar() {
  return (
    <div className='card'>
      <div className='nama-tag'>{user.name}</div>
      <img src={user.imgUrl}  />
      {user.tagManipulation}
    </div>
  );
}
