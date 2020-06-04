import React, {Component} from 'react';
import Distcard from './Distcard';

class Districdig extends Component {

    state = {
        dist: ''
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({dist: e.target.value})
    }

    render(props) {
        const {dist} = this.state
        if (this.props.dig) {}

        return (
            <div
                className="d-flex container-fluid justify-content-center  align-items-center">
                {this.props.dig
                    ? <div className="">
                            <div className="text-center">
                                <select
                                    name=""
                                    defaultValue={0}
                                    id=""
                                    onChange={this.change}
                                    className=""
                                    style={{
                                    borderBottom: "3px solid black",
                                    width: "260px"
                                }}>
                                    {this
                                        .props
                                        .dig
                                        .districtData
                                        .map((s, i) => <option key={i} value={i}>
                                            {s.district}
                                        </option>)}
                                </select>
                            </div>
                            <div className="">
                                <Distcard className="" data={this.props.dig.districtData[dist]}/>
                            </div>
                        </div>
                    : <div
                        className="row justify-content-md-center align-items-center container-fluid">

                        <div className="col-12 col-lg-4 col-md-4 col-sm-12 my-5 text-center">
                            <div
                                className="card card-sm shadow-lg p-3 mb-5 bg-white rounded "
                                style={{
                                borderBottom: "7px solid red"
                            }}>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        Active
                                    </h3>
                                    <hr/>
                                    <hr/>
                                    <h5 className="card-subtitle mb-2 text-muted text-capitalize">number of active cases of covid -19</h5>
                                    <h2 className="card-text">::</h2>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 col-md-4 col-sm-12 my-5">
                            <div
                                className="card deaths shadow-lg p-3 mb-5 bg-white rounded"
                                style={{
                                borderBottom: "7px solid grey"
                            }}>
                                <div className="card-body">
                                    <h3 className="card-title">Deaths
                                    </h3>
                                    <hr/>
                                    <hr/>
                                    <h5 className="card-subtitle my-3 text-muted text-capitalize">number of persons dead of covid -19</h5>

                                    <h2 className="card-text">::</h2>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 col-md-4 col-sm-12 my-5">
                            <div
                                className="card recovered shadow-lg p-3 mb-5 bg-white rounded "
                                style={{
                                borderBottom: "7px solid green"
                            }}>
                                <div className="card-body">
                                    <h3 className="card-title">Confirmed
                                    </h3>
                                    <hr/>
                                    <hr/>
                                    <h5 className="card-subtitle mb-2 text-muted text-capitalize">number of persons Confirmed of covid -19</h5>
                                    <h2 className="card-text">
                                        ::
                                    </h2>

                                </div>
                            </div>
                        </div>
                    </div>}

            </div>
        );
    }
}

export default Districdig;
