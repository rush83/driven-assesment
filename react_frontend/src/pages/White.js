import React, { Component } from 'react'

export default class White extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            arrayList: [],
            text: '',
            color: ''
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

    changeText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    changeColor(e) {
        this.setState({
            color: e.target.value
        })
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
                                    this.state.arrayList.map(col =>
                                        col % 2 === 0 ? <td align="center" style={{ padding: '10px', backgroundColor: 'white', height: '80px' }}>
                                            {item === 0 || item === 1 ?
                                                <h1 style={{ color: this.state.color === '' ? '#f00' : this.state.color }}>{this.state.text === '' ? 'red' : this.state.text}</h1>
                                                : (item === this.state.arrayList.length - 1 || item === this.state.arrayList.length - 2) ? <h1 style={{ color: this.state.color === '' ? '#000' : this.state.color }}>{this.state.text === '' ? 'black' : this.state.text}</h1> : ''}
                                        </td> :
                                            <td align="center" style={{ padding: '10px', backgroundColor: 'black', height: '80px' }}>
                                                {item === 0 || item === 1 ?
                                                    <h1 style={{ color: this.state.color === '' ? '#f00' : this.state.color }}>{this.state.text === '' ? 'red' : this.state.text}</h1>
                                                    : (item === this.state.arrayList.length - 1 || item === this.state.arrayList.length - 2) ? <h1 style={{ color: this.state.color === '' ? '#000' : this.state.color }}>{this.state.text === '' ? 'black' : this.state.text}</h1> : ''}
                                            </td>

                                    )
                                }
                            </tr>
                        )}
                    </tbody>
                </table>

                Text <input name="text_change" type="radio" value="Done" onChange={(event) => this.changeText(event)} /> Reset <input name="text_change" type="radio" value="" onChange={(event) => this.changeText(event)} />
                <br />
                Color <input name="color_change" type="radio" value="green" onChange={(event) => this.changeColor(event)} /> Reset <input name="color_change" type="radio" value="" onChange={(event) => this.changeColor(event)} />

            </div>
        )
    }
}
