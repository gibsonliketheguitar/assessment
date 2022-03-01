
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import erc20abi from './ERC20abi.json'

import { useSnackbar } from 'notistack'

// export class ERC721Lock extends BaseContract {
//   functions: {
//     balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
//   }
// }

declare let window: any;

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [tokenAddress, setTokenAddress] = useState<string>('')
  const [contractInfo, setContractInfo] = useState({
    address: '_',
    tokenSymbol: '_',
    totalSupply: '_',
    tokenName: '_',
  })

  function setRandNumber() {
    const randNum = Math.random()
    //setValue(randNum + '')
  }

  async function handleGetInfo() {
    try {
      if (!window.ethereum) throw new Error('window.entereum method does not exist on windows')
      if (tokenAddress.length === 0) throw new Error('token address cannot be empty')
      const provider = new ethers.providers.Web3Provider(window?.ethereum)
      const erc20 = new ethers.Contract(tokenAddress, erc20abi, provider);

      const tokenName = await erc20.name();
      console.log('what is tokenName', tokenName)
      const tokenSymbol = await erc20.symbol();
      const totalSupply = await erc20.totalSupply();


      setContractInfo({
        address: tokenAddress,
        tokenName,
        tokenSymbol,
        totalSupply
      })
    }
    catch (error: any) {
      enqueueSnackbar('error: ' + error.message, { variant: 'error' })
    }
  }

  useEffect(() => {
    console.log(contractInfo)
  }, [contractInfo])

  return (
    <div className="flex flex-col bg-gray-500 w-full h-screen items-center justify-center space-y-10">
      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-start sm:space-x-4">
        <Button title={'Get Token Info'} style="mt-4 sm:mt-0" onClick={() => handleGetInfo()} />
        <Input name="balanceOf" width={'sm-24 md:w-96'} value={tokenAddress} setValue={tokenAddress} />
      </div>

      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-start sm:space-x-4">
        <Button title={'Get Balance'} style="mt-4 sm:mt-0" onClick={() => setRandNumber()} />
        <Input name="getTokenOf" width={'sm-24 md:w-96'} value={contractInfo.tokenName} />
      </div>
    </div>
  );
}

export default App;
