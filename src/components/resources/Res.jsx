import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class Distric extends Component {
    state = {
        reso: [],
        slct: "",
        arry: {}
    }

    change = (e) => {
        console.log(e.target.value);

        this.setState({slct: e.target.value})
    }

    componentDidMount()
    {
        const apiurl = `https://api.covid19india.org/resources/resources.json`;

        fetch(apiurl)
            .then(response => response.json())
            .then((result) => {
                this.setState({reso: result.resources})

            }, (error) => {
                this.setState({error})
            })
    }

    render() {
        const {reso, slct} = this.state;
        console.log(slct);



        // if (reso) {
        //     reso.map((s, i) => {
        //         arry[i] = s.state
        //     })

        // }



        return (
            <div
                className="text-light table-responsive overflow-y:hidden overflow-x:hidden">
                <Table className="table table-sm table-bordered table-dark table-hover ml-0 mt-0">
                    <caption>List of users</caption>
                    <thead class="thead">
                        <tr className="text-uppercase">
                            <th scope="col">State</th>
                            <th scope="col">City</th>
                            <th scope="col">category</th>
                            <th scope="col">description</th>
                            <th scope="col">organisation name</th>
                            <th scope="col">contact</th>
                            <th scope="col">website</th>
                        </tr>
                    </thead>
                    {reso.map((s, i) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{s.state}</td>
                                    <td>{s.city}</td>
                                    <td>{s.category}</td>
                                    <td>{s.descriptionandorserviceprovided}</td>
                                    <td>{s.nameoftheorganisation}</td>
                                    <td>{s.phonenumber}</td>
                                    <td>{s.contact}</td>
                                </tr>
                            </tbody>

                        )
                    })}
                </Table>
            </div>
        )
    }
}
