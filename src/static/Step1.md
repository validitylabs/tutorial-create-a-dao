### Step 1 - String type and getter

Here we have the first task for our DAO, to give it a name. How would you like to name your association? Let's just call the organisation "ValidityLabs".

To store this piece of information on a smart contract, we need to create a variable, of type string, which is shown to the public: `string public daoName = "ValidityLabs";`

Just as javascript, Solidity encourages developer to use [camelCase](https://en.wikipedia.org/wiki/Camel_case) when naming variables.

```javascript
pragma solidity ^0.4.24;

contract MyDAO {
    string public daoName = "ValidityLabs";
}
```

Right now, **Compile** this smart contract (Remix does it automatically if you tick the "Auto compile"), then on the _Run_ tab, **Deploy** the contract. After the transaction is valid, there is a "deployed contract" appeared underneath the existing sections.

To check if our contract is working, we could click on the _daoName_ button. Solidity generates automatically a default **getter** function for public state variables. Here we can know what is the name of our organisation.

> Material prepared for Blockchain for Science Conference 2018 Berlin (#BFSCON18), by [ValidityLabs AG](https://validitylabs.org/)

> For any questions on content, please contact [Q](mailto:qianchen.yu@validitylabs.org)
