### Step 0 - Pragma and contract structure

Let's create our contract by clicking on the plus sign on the upper left side of the Remix page. Name the contract as `"MyDAO.sol"`.

The first line in our contract is `pragma solidity ^0.4.24`. This version pragma tells the Solidity compiler which version to be used. Grammars and syntax are drastically different before ^0.4. The language itself is still under development, cf. [Solidity Documentation](https://solidity.readthedocs.io/en/v0.4.24). In our case, the Remix environment understands that a compiler of version 0.4.24 is needed.

Then enter `contract MyDAO {}` where "MyDAO" is the name of the contract.

Finally we have the backbone of our smart contract, few lines that you'll need in every `.sol` file.

```javascript
pragma solidity ^0.4.24;

contract MyDAO {

}
```

> Material prepared for Blockchain for Science Conference 2018 Berlin (#BFSCON18), by [ValidityLabs AG](https://validitylabs.org/)

> For any questions on content, please contact [Q](mailto:qianchen.yu@validitylabs.org)
