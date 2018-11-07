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

#### _Play around_:
What happens if one forgets to add a "modifier"?

Try this out [0x111721921f5f8E4EEEDAbAbDdc647200B2c2DbBe](https://ropsten.etherscan.io/address/0x111721921f5f8e4eeedababddc647200b2c2dbbe#writeContract)

#### _Task_:
Please write similar code so that __the owner can remove a member__.