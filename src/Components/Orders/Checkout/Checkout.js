import React, { Component } from 'react';
import {Button} from 'reactstrap';

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",
        }
    }


    goBack = () => {
        this.props.history.goBack("/");
    }

    inputChangerHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }
    render() {
        return (
            <div>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                }}>
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="যে ঠিকানায় আপনার পার্সেল যাবে সেটি লিখুন" onChange={(e)=> this.inputChangerHandler(e)}></textarea> <br/>
                    <input name="phone" className="form-control" value={this.state.values.phone} placeholder="ডেলিভারির সময় যে নম্বরে ফোন দিলে আপনাকে পাওয়া যাবে সেটি লিখুন" onChange={(e)=> this.inputChangerHandler(e)}/> <br />
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e)=> this.inputChangerHandler(e)}>
                        <option value="Cash On Delivery">হাতে হাতে</option>
                        <option value="Bkash">বিকাশে</option>
                    </select>
                    <br/>
                    <Button style={{backgroundColor: "#D70F64"}} className="mr-auto">ক্রয় করুন</Button>
                    <Button color="secondary" className="ml-1" onClick={this.goBack}>বাতিল করুন</Button>
                </form>
            </div> 
        )
    }
}

export default Checkout;