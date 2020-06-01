import React, {Component} from 'react';

class Api extends Component {

    state = {
        error: null,
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

        var prnt = products.map((s, i) => {
            return (s.state)
        })

        const statewise = products[this.state.opt]
        if (statewise) {
            console.log("active : " + statewise.active + " recovered : " + statewise.recovered + " confirmed : " + statewise.confirmed + " death : " + statewise.deaths)
        }
        return (
            <div className="">
                 {products ? <div className="">
                    <select name="" id="" onChange={this.change}>
                        {prnt.map((s, i) => <option key={i} value={i}>
                            {s}
                        </option>)}
                    </select>
                </div>:<h1>avinash</h1>}
            </div>

        )

    }
}

export default Api;
