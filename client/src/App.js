import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import {useState,UseEffect, useEffect} from "react"
import {ethers} from "ethers"
import FileUpload from "./components/FileUpload";
import Display from "./components/Display"
import Modal from "./components/Modal";
import './App.css';

function App() {
  const [account,setAccount]=useState("")
  const [contract,setContract]=useState(null)
  const [provider,setProvider]=useState(null)
  const [modalOpen,setmodalOpen]=useState(false)
  useEffect(()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum)
    const loadProvider= async ()=>{
      if(provider){
        await provider.send("eth_requestAccounts",[])
        const signer=provider.getSigner();
        const address=await signer.getAddress();
        setAccount(address)
        let contractAddress=" 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "
        const contract =new ethers.Contract(
          contractAddress,Upload.abi,signer
        )
        console.log(contract)
        setContract(contract)
        setProvider(provider)
      }
      else{
        alert("Metamask is not installed")
      }
    }
    provider && loadProvider()
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
