import React, {Component} from 'react';
import Card from './Card';
import '../../src/components/Style.css'
import logo from '../img/img.png'
import {Link} from 'react-router-dom';

class Api extends Component {

    state = {
        error: '',
        products: [],
        opt: ''
    }

    change = (e) => {
        this.setState({opt: e.target.value})
        console.log(e.target.value);
    }

    componentDidMount()
    {
        const apiurl = 'https://api.covid19india.org/data.json';

        fetch(apiurl)
            .then(response => response.json())
            .then((result) => {
                this.setState({products: result.statewise})

            }, (error) => {
                this.setState({error})
            })
    }

    render() {

        const {error, products, opt} = this.state;
        console.log(error);

        var prnt = products.map((s, i) => {
            return (s.state)
        })

        const statewise = products[opt]

        if (statewise) {
            // console.log("active : " + statewise.active+"\n" + " recovered : " +
            // statewise.recovered+"\n" + " confirmed : " + statewise.confirmed +"\n"+ "
            // death : " + statewise.deaths)
        }
        return (
            <div className="">
                <div className="col">
                    <img src={logo} alt="" className="center-block my-5"/>
                </div>
                <div className="">
                    <div className="text-center">
                        <select
                            name=""
                            defaultValue={0}
                            id=""
                            onChange={this.change}
                            className="col my-5"
                            style={{
                            border: "none",
                            borderBottom: "3px solid black",
                            width: "260px"
                        }}>
                            {prnt.map((s, i) => <option key={i} value={i}>
                                {s}
                            </option>)}
                        </select>
                    </div>
                    <Card info ={products[opt]}/>
                    <div className='row justify-content-center'>
                    <h1 className='text-center text-capitalize'>get District Wise corona update:</h1>
                    
                    <button className='btn btn-outline ml-3'>
                        <Link to='/' className='text-dark'>Click Here</Link>
                    </button>
                </div>

                </div>
                {/* {products ? <h1>{products[opt].active}</h1>:<h1>avinash</h1>} */}
            </div>

        )

    }
}

export default Api;
