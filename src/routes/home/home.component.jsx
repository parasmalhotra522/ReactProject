import Categories from "../../components/catgeories/categories.component";

const Home = () => {
    let categories = [
        {
          id: 1,
          title:"Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        }, 
        {
          id: 2,
          title: "Shoes",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        
        },
        {
          id: 3,
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        
        },
        {
          id: 4,
          title: "Womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        
        },
        {
          id: 5,
          title: "Mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        
        }
      ]
      return (
        <div className="App">
          {/* passing props as categories to Categories component */}
          <Categories categories={categories}></Categories>
    
        </div>
      );
}

export default Home;