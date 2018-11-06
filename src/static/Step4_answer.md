
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