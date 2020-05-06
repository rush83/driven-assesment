import React, { Component } from 'react'

export default class White extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            arrayList: []
        }
    }

    setN = (e) => {
        if (isNaN(e.target.value) || e.target.value === '') {
        } else {
            this.setState({
                num: parseInt(e.target.value)
            })
            const list = []
            for (let i = 0; i < e.target.value; i++) {
                list.push(i)
            }
            this.setState({
                arrayList: list
            })
        }

    }




    render() {



        return (

            <div>
                <br />
                <input type="text" placeholder="Enter Number" className="form-control" onChange={(event) => this.setN(event)} />
                <table width="100%" border="1px">
                    <tbody>
                        {this.state.arrayList.map(item =>
                            <tr key={item}>
                                {
                                    this.state.arrayList.map(col => col % 2 == 0 ? <td style={{ padding: '10px', backgroundColor: 'white', height: '80px' }}></td> : <td style={{ padding: '10px', backgroundColor: 'black', height: '80px' }}></td>

                                    )
                                }
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}
