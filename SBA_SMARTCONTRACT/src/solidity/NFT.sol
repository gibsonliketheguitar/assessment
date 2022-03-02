/*
export class ERC721Lock extends BaseContract {
  functions: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };
}
*/

contract BaseContract {
    unit public balance

    function balanceOf public view returns(unit){
        return balance
    }
}

contract ERC71Lock is BaseContract {
    
}