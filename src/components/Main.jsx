import React, {Component} from 'react'
// import Api from './Api'; import Distric from './Distric'
import {Link} from 'react-router-dom';
import logo from '../img/img.png';

export default class Main extends Component {
    render() {
        return (
            <div className="">
                <img src={logo} alt="" className="center-block"/>
                <div className="mt-5 pt-5 row container-fluid mx-0">
                    <div className=' text-center col col-lg-2 col-md-4 col-sm-12 mx-auto'>
                        <div
                            className="row card card-sm shadow-lg p-5"
                            style={{
                            borderBottom: "7px solid red"
                        }}>
                            <h2 className='text-capitalize col-12 card-title col'>get covid news updates:</h2>
                            

                            <Link to='/News' className='text-dark card-body col card-subtitle'>
                                <button className='btn btn-lg btn-primary'>
                                    CHECK
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="text-center col col-12 col-lg-2 col-md-3 col-sm-12 mx-auto">
                        <div
                            className='row card card-sm shadow-lg p-5'
                            style={{
                            borderBottom: "7px solid green"
                        }}>
                            <h2 className='text-center text-capitalize col-12 card-title col'>get State wise corona update:</h2>

                            <Link to='/Api' className='text-dark card-body col card-subtitle'>
                                <button className='btn btn-lg btn-primary'>
                                    CHECK
                                </button>
                            </Link>

                        </div>
                    </div>

                    <div className="text-center col col-12 col-lg-2 col-md-4 col-sm-12 mx-auto">
                        <div
                            className='row card card-sm shadow-lg p-5'
                            style={{
                            borderBottom: "7px solid blue"
                        }}>
                            <h2 className='text-center text-capitalize col-12 card-title col'>get State wise corona update:</h2>

                            <Link to='/Distric' className='text-dark card-body col card-subtitle'>
                                <button className='btn btn-lg btn-primary'>
                                    CHECK
                                </button>
                            </Link>

                        </div>
                    </div>

                    <div className="text-center col col-12 col-lg-2 col-md-4 col-sm-12 mx-auto">
                        <div
                            className='row card card-sm shadow-lg p-5'
                            style={{
                            borderBottom: "7px solid grey"
                        }}>
                            <h2 className='text-center text-capitalize col-12 card-title col'>resources and testing labs:</h2>

                            <Link to='/Reso' className='text-dark card-body col card-subtitle'>
                                <button className='btn btn-lg btn-primary'>
                                    CHECK
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
                <footer className="text-light mt-5 pt-5 text-center">
                    <span className="text-capitalize text-light">
                        <h3>made with </h3>
                    </span>
                    <svg
                        class="bi bi-heart sze"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </footer>
            </div>

        )
    }
}
