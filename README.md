# Basic Sample Hardhat Project

Data in the table is added or subtracted in the blockchain using a smart contract. 
This is a Todo DApp for beginners. It is built on Hardhat (Javascript Framework For Blockchain). CRUD operations are performed in this app so it would be easy to understand for anyone how smart contracts work with the frontend. 

[DEMO HERE](https://www.youtube.com/watch?v=OmYIul5Au1U)


git clone https://github.com/babarali581/Accountancy.git
 
 # Install hardhat
 npm install --save-dev hardhat
 
# Open 3 terminals

Navigate to project in each of them


# First Terminal 

  npm start


# Second Terminal 

 npx hardhat node
 
 # Third Terminal 

npx hardhat run scripts/deploy.js --network localhost

It will give a string in your terminal  which is contractAddress. 

You should copy this string and paste in src/App.js as a value of contractAddress.


# Your app start Running ...


```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```



<video src='https://firebasestorage.googleapis.com/v0/b/easymoney-54522.appspot.com/o/real.mp4?alt=media&token=d84b5fbe-05e4-4321-9b9b-5eb6619db9cf' width=180/>
