import { ethers } from 'ethers';
import React from 'react'

const BuyChai = ({state}) => {
    
    const handleChai=async(event)=>{
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const msg = document.querySelector("#message").value;
        const amount  = document.querySelector("#amount").value;
        const price  ={value: ethers.utils.parseEther(amount)};
        const {contract} = state;
        const transaction = await contract.buyChai(name,msg,price);
        await transaction.wait();
        alert("Payment Successful");
        window.location.reload();
        
    }
    return (

    <div>
        <form onSubmit={handleChai}>
            <label htmlFor="name">Name: </label>
            <input type='text' id='name'/> <br/>
            <label htmlFor="message">Messsage: </label>
            <input type='text' id='message'/> <br/>
            <label htmlFor="amount">Amount: </label>
            <input step="any" type='number' id='amount'/> <br/>
            <button type='submit'>Pay</button>
        </form>

    </div>
  )
}

export default BuyChai