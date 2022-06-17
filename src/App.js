import { useState, useEffect } from "react";
import Accountancy from "./artifacts/contracts/Accountancy.sol/Accountancy.json";
import { ethers } from "ethers";
import "./App.css";

function App() {
  const [list, setlist] = useState([]);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const loadProvider = async () => {
      let contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
      const url = "http://localhost:8545";
      const provider = new ethers.providers.JsonRpcProvider(url);
      const contract = new ethers.Contract(
        contractAddress,
        Accountancy.abi,
        provider
      );

      setContract(contract);
      setProvider(provider);
    };
    loadProvider();
  }, []);
  useEffect(() => {
    const getList = async () => {
      const list = await contract.getList();
      setlist(list);
    };
    contract && getList();
  }, [contract]);

  const addInList = async () => {
    const desc = document.querySelector("#val");
    const num = document.querySelector("#num");
    const signer = contract.connect(provider.getSigner());
    signer.addList(num.value, desc.value);

    setTimeout(function () {
      window.location.reload(1);
    }, 500);
    setTimeout();
  };

  const deleteItem =(index) => {
    const signer = contract.connect(provider.getSigner());
    signer.remove(index)
    setTimeout(function () {
      window.location.reload(1);
    }, 500);
    setTimeout();
  }

  let totalAmount = 0;
  let response = list.map((each, i) => {
  let amount = parseInt(each.amount._hex, 16);
  totalAmount = totalAmount += amount;
    return (
      <div id={each.uid} className="colomn">
        <div>{each.sender}</div>
        <div>{amount}</div>
        <button className="remove-button" onClick={() => deleteItem(i)}>
         X
        </button>
      </div>
    );
  });
  response.push(
    <div className="colomn">
      <div>Total Amount</div>
      <div>{totalAmount}</div>
      <button style={{backgroundColor: "black" , color: "white"}} className="remove-button"> Total
      </button>
    </div>
  );

  return (
    <div className="center">
      <div className="enterDetail">
      <input className="input" type="text" id="val" placeholder="Enter Description"></input>
      <input className="input" type="number" id="num" placeholder=" Enter Number"></input>
      <button className="button" onClick={addInList}>
        ADD
      </button>
      </div>
      <div className="list">{list.length > 0 ? response : null}</div>
    </div>
  );
}

export default App;
