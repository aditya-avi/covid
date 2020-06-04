import React, {Component} from 'react';
import Districdig from './Districdig';
import logo from '../img/img.png'

export default class Distric extends Component {
    state = {
        distric: [],
        slct: ''
    }

    change = (e) => {
        this.setState({slct: e.target.value})
        // console.log(e.target.value);

    }

    componentDidMount()
    {
        const apiurl = `https://api.covid19india.org/v2/state_district_wise.json`;

        fetch(apiurl)
            .then(response => response.json())
            .then((result) => {
                this.setState({distric: result})

            }, (error) => {
                this.setState({error})
            })
    }

    render() {
        const {distric, slct} = this.state;
        // console.log(slct); console.log(distric[slct]);

        if (distric[slct]) {
            // console.log(distric[slct].districtData); if (distric[slct].state) {
            // console.log(distric[slct].districtData); }

        }

        // distric.map((s,i) => {     console.log(s.state); }) console.log(distric);
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="">
                    <div className="col col-12 p-3">
                        <img src={logo} alt="" className="center-block"/>
                    </div>
                    <div className="">
                        {distric
                            ? <div className="">
                                    <div className="text-center">
                                        <select
                                            name=""
                                            defaultValue={0}
                                            id=""
                                            onChange={this.change}
                                            className="col-col-12"
                                            style={{
                                            borderBottom: "3px solid black"
                                        }}>
                                            {distric.map((s, i) => <option key={i} value={i}>
                                                {s.state}
                                            </option>)}
                                        </select>
                                    </div>
                                    <Districdig dig={distric[slct]}/>
                                </div>

                            : null}
                    </div>
                </div>

                {/* {distric ?<Districdig dig={distric[slct].districtData}/> :null} */}

            </div>
        )
    }
}
