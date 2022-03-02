
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import erc721 from './solidity/json/ERC721.json'
import { useSnackbar } from 'notistack'
import { BigNumber } from 'bignumber.js'

declare let window: any;

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [tokenAddress, setTokenAddress] = useState<string>('')
  const [balanceInfo, setBalanceInfo] = useState('0')
  const [balanceValue, setBalanceValue] = useState('0')

  async function handleGetTokenInfo() {
    try {
      if (tokenAddress.length === 0) throw new Error('Need valid contract address')
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const contract = new ethers.Contract(tokenAddress, erc721, provider);

      console.log(contract)
      enqueueSnackbar('Token info retrieved', { variant: 'success' })
    }
    catch (error: any) {
      console.log(error)
      enqueueSnackbar('error: ' + error.message, { variant: 'error' })
    }
  }

  async function handleGetBalanceInfo() {
    try {
      if (!window.ethereum) throw new Error('window.entereum method does not exist on windows')
      if (tokenAddress.length === 0) throw new Error('token address cannot be empty')

      const provider = await new ethers.providers.Web3Provider(window?.ethereum)
      const contract = await new ethers.Contract(tokenAddress, erc721, provider);

      const balance = await contract.balanceOf()
      const number = (new BigNumber(balance._hex).toString())

      setBalanceInfo(number)

      enqueueSnackbar('Address found', { variant: 'success' })
    }
    catch (error: any) {
      console.log(error)
      enqueueSnackbar('error: ' + error.message, { variant: 'error' })
    }
  }

  async function setBalance() {
    try {
      if (!window.ethereum) throw new Error('window.entereum method does not exist on windows')
      if (tokenAddress.length === 0) throw new Error('token address cannot be empty')
      if (Number(balanceValue) === 0) throw 'New balance cannot be 0'

      const provider = await new ethers.providers.Web3Provider(window?.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = await new ethers.Contract(tokenAddress, erc721, signer);

      const newBalance = Number(balanceValue)
      await contract.set(newBalance);

      enqueueSnackbar(`Balance Set to ${balanceValue}`, { variant: 'success' })
    }
    catch (error: any) {
      console.log(error)
      enqueueSnackbar('error: ' + error.message, { variant: 'error' })
    }
  }

  return (
    <div className="flex flex-col bg-gray-500 w-full h-screen items-center justify-center space-y-10">
      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-start sm:space-x-4">
        <Button title={'Get Token Info'} style="mt-4 sm:mt-0" onClick={() => handleGetTokenInfo()} />
        <Input name="balanceOf" width={'sm-24 md:w-96'} value={tokenAddress} setValue={setTokenAddress} />
      </div>

      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-start sm:space-x-4">
        <Button title={'Get Balance'} style="mt-4 sm:mt-0" onClick={() => handleGetBalanceInfo()} />
        <Input name="getTokenOf" width={'sm-24 md:w-96'} value={balanceInfo} />
      </div>

      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-start sm:space-x-4">
        <Button title={'Set Balance'} style="mt-4 sm:mt-0" onClick={() => setBalance()} />
        <Input name="getTokenOf" width={'sm-24 md:w-96'} value={balanceValue} setValue={setBalanceValue} />
      </div>
    </div>

  );
}

export default App;
