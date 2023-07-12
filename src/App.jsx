import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dataApi, setDataApi] = useState([]);
  const linkApi = '';

// Make a request for a user with a given ID
const getDataApi = async function(){
  await axios.get(linkApi)
    .then(function (response) {
      // handle success
      setDataApi(response.data)
      console.log(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

useEffect(() => {
  getDataApi();
},[])

  return (
    <h1 className="text-3xl font-bold">
      {dataApi.map((item)=>{
        return (
          <div key={item.id}>
            <img src={item.image} alt=""/>
            <p>{item.name}</p>
            <p>${item.Value}</p>
          </div>
        )
      })}
        <p>tes</p>
    </h1>
  )
}

export default App
