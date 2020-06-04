import React from 'react';
import CountUp from 'react-countup';

const Cards = (props) => {
    // console.log(props.info);
    if (props.info) {
        console.log(props.info.active);

    }

    return (
        <div className="container">
            {props.info
                ? <div
                        className="row mt-5 justify-content-md-center align-items-center container-fluid">

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
                                    <h2 className="card-text">{< CountUp start = {
                                            0
                                        }
                                        end = {
                                            props.info.active
                                        }
                                        duration = {
                                            1.5
                                        }
                                        separator = ',' />}</h2>

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

                                    <h2 className="card-text">{< CountUp start = {
                                            0
                                        }
                                        end = {
                                            props.info.deaths
                                        }
                                        duration = {
                                            1.5
                                        }
                                        separator = ',' />}</h2>

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
                                    <h5 className="card-subtitle mb-2 text-muted text-capitalize">number of persons Recovered of covid -19</h5>
                                    <h2 className="card-text">{< CountUp start = {
                                            0
                                        }
                                        end = {
                                            props.info.recovered
                                        }
                                        duration = {
                                            1.5
                                        }
                                        separator = ',' />}</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                : <div
                    className="row mt-5 justify-content-md-center align-items-center container-fluid">

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

export default Cards;
