### Step 2 - Constructor and msg.sender

However, if we don't want to have the name predefined when we write code, but rather leave the option open until the deployment of the contract, we could do is to move the naming step into the constructor by adding

```javascript
constructor(string _name) public {
    daoName = _name;
}
```

If we deploy the contract right now, we could give it a different name and check the result with our getter.
Also, one thing important for the organisation is to have a legal representative or simply - an owner of the organisation. By default, we want the creator to be the owner. So we add `address public owner;` as well as `owner = msg.sender;` Here the `msg.sender` is the address of the sender of a message/transaction.
Now our contract looks like:

```javascript
pragma solidity ^0.4.24;

contract MyDAO {
    string public daoName;
    address public owner;

    constructor(string _name) public {
        daoName = _name;
        owner = msg.sender;
    }
}
```

