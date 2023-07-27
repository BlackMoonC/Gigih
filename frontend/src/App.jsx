import Avatar from "./components/Avatar/Avatar";
import "./App.css";
// import CardItemList from "./components/CardItemList/CardItemList";
// import Avatar from './components/Avatar/Avatar'
// import ListSongs from "./components/ListSongs/ListSongs";

function App() {
  const heroes = [
    {
      id: 1,
      name: "Hellen Keller",
      imgUrl:
        "https://images.unsplash.com/photo-1580034283351-073a1906f7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=733&q=80",
      gender: "female",
    },
    {
      id:2,
      name: "Marie Culler",
      imgUrl:
        "https://images.unsplash.com/photo-1580034283351-073a1906f7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=733&q=80",
        gender: "female",
    },
    {
      id:3,
      name: "Albert Einstein",
      imgUrl:
        "https://images.unsplash.com/photo-1580034283351-073a1906f7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=733&q=80",
        gender: "male",
      },
  ];

  return (
    <>
    {
      heroes.map((hero) => (
        <Avatar key={hero.id} name={hero.name} imgUrl= {hero.imgUrl} gender={hero.gender}/>
      ))
    }
    </>
  );
}

export default App;
