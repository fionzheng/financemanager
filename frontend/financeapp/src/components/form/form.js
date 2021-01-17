import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
            <form>
                <div>
                    <b>
                     <label>Product or Service Obtained:</label>
                     <input type="text" name="product" />
                     <span style={{paddingLeft: '10px'}}></span>
                     <label>Cost of Transaction: </label>
                     <input type="text" name="money" />
                    </b>
                </div>
            </form>
            </div>
        )
    }
}

export default Form