import React, { Component } from 'react';
import axios from 'axios';

const loadingGif = require('../asset/loading.gif');


export default class Home extends Component {
  state = {
    data: []
  }
  componentWillMount(){
    axios.get('https://developers.zomato.com/api/v2.1/geocode',{
      params: {
        "lat":"-6.191547",
        "lon":"106.820506"
      },
      headers: {
        "Accept": "application/json",
        "user-key": "628bf951b5a3b9627009353321fbc3dd"
      }
    }).then((dataSet) => {
      console.log(dataSet);
       this.setState({
        data: dataSet.data.nearby_restaurants
       })
    }).catch((error) => {
      console.log(error);
    });

  }


  render(){
    return(
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav> */}

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Hungry?</h1>
            <p className="lead">Find restaurants near you</p>
          </div>
        </div>

        <div className="container my-4">
          <div className="row">

          {
            this.state.data.length > 0 ?
              this.state.data.map((item,i) =>{
                return(
                  <div className="col-md-4 mb-5 col-sm-6" key={i}>
                    <div className="card card-view">
                      <img className="card-img-top" src={item.restaurant.featured_image} alt={item.restaurant.name}/>
                      <div className="card-body">
                        <h5 className="card-title">{item.restaurant.name}</h5>
                      <p className="card-text">{item.restaurant.location.address}</p>
                      </div>
                    </div>
                  </div>
                )
              })
              :
              <div className="col-12 text-center">
                <img alt="loading" src={loadingGif} />
              </div>
          }
          </div>
        </div>

        <footer className="footer">
          <div className="card">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>

        </footer>

      </div>
    )
  }
}

// data: [
//   {
//     imgUrl:"https://img.qraved.co/v2/image/data/Indonesia/Jakarta/Makasar/Bebek_Goreng_H__Slamet/bebek_goreng_sambak_korek-640x480.jpg",
//     title: "Bebek Goreng H. Slamet (Asli) Kartosuro",
//     description:"The original crispy duck in town.",
//   },
//   {
//     imgUrl:"http://www.giladiskon.com/sites/default/files/photos/photo%20-%201399171404.jpg",
//     title: "HokBen",
//     description:"Deep fried egg rolls all the way",
//   },
//   {
//     imgUrl:"https://b.zmtcdn.com/data/pictures/chains/6/7423096/8c09d2bd76d883854bef7821430ef560_featured_v2.jpg",
//     title: "Super Suki",
//     description:"Warm, sweet and comforting Japanese Suki.",
//   },
//   { imgUrl:"http://manual.co.id/wp-content/uploads/2015/11/Kopi-Manyar-Cafe_Bintaro-5.jpg",
//     title: "Kopi Manyar",
//     description: "A cool and edgy coffee place with amazing coffee selections."
//   },
//   {
//     imgUrl:"http://hargamenu.com/wp-content/uploads/2014/09/blenger-burger.jpg",
//     title: "Burger Blenger",
//     description:"Juicy and tender burger that will melt your taste buds.",
//   },
//   { imgUrl:"https://assets-a2.kompasiana.com/items/album/2016/10/04/bakmi-titut-jpg-57f346cfe122bde10a79456a.jpg?t=o&v=760",
//     title: "Bakmi Jogja Mba Titut",
//     description: "Tasty and delicious noodles that is out of this world."
//   }
// ]
