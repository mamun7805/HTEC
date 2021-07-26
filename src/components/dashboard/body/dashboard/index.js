import React, {Component} from 'react';
import mqtt from 'mqtt';
import "./index.css";


const machine_data = [
    {
        "name" : "Machine 01",
        "machine_no": "1",
    },
    {
        "name" : "Machine 02",
        "machine_no": "2",
    },
    {
        "name" : "Machine 03",
        "machine_no": "3",
    },
    {
        "name" : "Machine 04",
        "machine_no": "4",
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
    },
    {
        "name" : "Machine 06",
        "machine_no": "6",
    },
    {
        "name" : "Machine 07",
        "machine_no": "7",
    },
    {
        "name" : "Machine 08",
        "machine_no": "8",
    },
    {
        "name" : "Machine 09",
        "machine_no": "9",
    },
    {
        "name" : "Machine 10",
        "machine_no": "10",
    },
    {
        "name" : "Machine 11",
        "machine_no": "11",
    }
]


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            machine : [],
            topic : [],
        }
    }

    componentDidMount() {
        console.log("did mount.......................")
        this.client = mqtt.connect('mqtt://127.0.0.1:8083');
        this.client.options.username = 'sammy';
        this.client.options.password = 'password';
        console.log("client: ", this.client)
        this.client.on("connect", () => {
          console.log("connected");
          this.client.subscribe("machine/+");
        });
        this.client.on('message', (topic, message) => {
          this.handleJsonMessage(topic, message.toString());
        })
      }

      handleJsonMessage = (topic, message) => {
        // const temperatures = this.state.temperatures || []
        // const humidities = this.state.humidities || []
        // const lights = this.state.lights || []
        // const pressures = this.state.pressures || []
        // const time = Date.now();
        // temperatures.push([time, json.temperature || 0])
        // humidities.push([time, json.humidity || 0])
        // lights.push([time, json.lux || 0])
        // pressures.push([time, json.pressure || 0])
        // this.setState({
        //   data: { ...json },
        //   temperatures,
        //   humidities,
        //   pressures,
        //   lights
        // })
    
        this.setState({
          machine: machine_data,
          topic : null
        })
      }

      componentWillUnmount() {
        if (this.client) {
          this.client.end()
        }
      }
    render(){
        return(
            <>
            <div className = "container machine-container">
                 {
                     machine_data.map(d => <div className="machine"> {d.name} </div>)
                 }
            </div>
                    
            </>
        )
    }
}


 export default Dashboard;