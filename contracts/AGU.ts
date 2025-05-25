import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import AGUToken from '../abi/AGUToken.json';

const CONTRACT_ADDRESS = "0x..."; // Fill after deploy

export function useBalance(address: string) {
  return useContractRead({
    address: CONTRACT_ADDRESS,
    abi: AGUToken,
    functionName: 'balanceOf',
    args: [address],
  });
}
