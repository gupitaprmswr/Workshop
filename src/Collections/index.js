import React, { Component } from 'react';
import axios from 'axios';


const loadingGif = require('../asset/loading1.gif');



export default class Collections extends Component {
  state = {
    data: [],
    place: [
      {
        name: "Bintaro",
        lat: "-6.284348",
        lon: "106.727839",
      },
      {
        name: "Jakarta",
        lat: "-6.190330",
        lon: "106.832642",
      },
      {
        name: "Bandung",
        lat: "-6.908557",
        lon: "107.609851",
      },
      {
        name: "Jogja",
        lat: "-7.811497",
        lon: "110.364545",
      },
      {
        name: "Bali",
        lat: "-8.509912",
        lon: "1115.249531",
      },
      {
        name: "Semarang",
        lat: "-6.986900",
        lon: "110.412598",
      }

    ]
  }
  componentDidMount(){
    // let {match} = this.props;
    // this.loadData(match.params.place,match.params.lat,match.params.lon);
  }
//component DidMount and componentWillReceive mengakibatkan API limit exceeds
  componentWillReceiveProps(nextProps){
    console.log("update");
    let oldData = this.props;
    let newData = nextProps;
    if (oldData.match.params.place !== newData.match.params.place){
      this.loadData(newData.match.params.place,newData.match.params.lat,newData.match.params.lon);
    }

  }

  loadData = (place,lat,lon) => {
    this.setState({
      data: []
    })
    axios.get('https://developers.zomato.com/api/v2.1/geocode',{
      params: {
        "lat": lat,
        "lon": lon
      },
      headers: {
        "Accept": "application/json",
        "user-key": "773be931338b9edc7ae1596df4d3db04"
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
    // console.log(this.props.match.params.place);
    //
    // // ^ this is destructuring the variable using {} in the let or const
    // if (this.state.data.length == 0){
    //   // this.loadData(match.params.place,match.params.lat,match.params.lon);
    // }
    return(
      <div className="App">


        <div className="container my-4">
          {/* <div className="mb-4">
            {
              this.state.place.map((item,i) =>{
                return(
                  <button onClick={() =>{
                    this.loadData(i)
                  }} type="button" className="btn btn-danger mx-2">{item.name}</button>
                );
              })
            }
          </div> */}
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
                      <p className="card-text">{item.restaurant.location.address.substr(0, 50)}</p>
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



      </div>
    )
  }
}
