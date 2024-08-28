import { useEffect, useState } from 'react'
import './App.css';
import contractAddr from "../../../scripts/ContractAddress.json";
import abi from "../contractJson/contractABI.json"
import { ethers } from 'ethers';
import Memo from './components/Memo';
import BuyChai from './components/BuyChai';
function App() {
  const[state,setState] = useState({
    provider:null,
    signer:null,
    contract:null
  });
  const[account,setAccount] = useState([]);
  
  useEffect(()=>{
    const contractAddress = contractAddr.CONTRACT_ADDRESS||" ";
    const contractABI = abi.abi;

    const gettingReady = async()=>{

      try {
        
        const{ethereum} = window;
        if(!ethereum)
        {
          alert('Install MetaMask');
          return;
        }
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        });
        window.ethereum.on("accountsChanged",()=>{
          window.location.reload()
        })
        console.log("Account Connected");
        setAccount(account[0]);
        //Connecting Contract
        const provider = new ethers.providers.Web3Provider(ethereum);

        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress,contractABI,signer);
        console.log(contract);
        setState({provider,signer,contract});
      } catch (error) {
        console.log(error);
      }

    }
    gettingReady();

  },[])
  return (
   <div>
    <h1>BUY ME A COFFEE</h1>
      <p>Connected Address:{account}</p>
    <BuyChai state={state}/>
    <Memo state={state}/>
   </div>
  )
}

export default App
