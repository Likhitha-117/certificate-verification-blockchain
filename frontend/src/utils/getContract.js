import { BrowserProvider, Contract } from "ethers";
import { contractInfo } from '../contract/certificate'; // assuming it exports correctly

export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not installed");

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(contractInfo.address, contractInfo.abi, signer);

  return contract;
};
