### Step 4 - Require and modifier

We could also make a function so that people can check if an account is a member.

```javascript
function checkMember(address _account) public view returns (bool) {
    return memberList[_account];
}
```

Here the `view` is one function modifier. Modifiers are used to check a condition prior to executing the function and change the behaviour of functions accordingly. Functions can be declared view in which case they promise not to modify the state.
One can also make customised modifiers. If we want to restrict the _addMember_ can only be performed by the owner, here we add

```javascript
modifier onlyOwner {
    require(owner == msg.sender);
    _;
}
```

with `function addMember(address _newMember) public onlyOwner returns (bool)`.
Before executing the _addMember_ function, it checks if the caller is the owner of the contract (i.e. our organisation). If no, the calling action gets reverted: the state does not change and the it returns the rest of gas back to the caller.
We could also simplify the code of _addMember_ into

```javascript
function addMember(address _newMember) public onlyOwner returns (bool) {
    require(memberList[_newMember] == false);
    memberList[_newMember] = true;
    return true;
}
```

- [ ] Please write similar code so that the owner can remove a member.

```javascript
pragma solidity ^0.4.24;

contract MyDAO {

    string public daoName;
    address public owner;
    mapping(address=>bool) public memberList;

    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }

    constructor(string name) public {
        daoName = name;
        owner = msg.sender;
        memberList[owner] = true;
    }

    // Add a member to the DAO
    function addMember(address _newMember) public onlyOwner returns (bool) {
        require(memberList[_newMember] == false);
        memberList[_newMember] = true;
        return true;
    }

    // Remove a member from the DAO
    function removeMember(address _member) public onlyOwner returns (bool) {
        if (memberList[_member] == true) {
            memberList[_member] = false;
            return true;
        } else {
            return false;
        }
        //or as below
        //require(memberList[_member] == true);
        //memberList[_member] = false;
        //return true;
    }

    function checkMember(address _account) public view returns (bool) {
        return memberList[_account];
    }
}
```

> Material prepared for Blockchain for Science Conference 2018 Berlin (#BFSCON18), by [ValidityLabs AG](https://validitylabs.org/)

> For any questions on content, please contact [Q](mailto:qianchen.yu@validitylabs.org)
