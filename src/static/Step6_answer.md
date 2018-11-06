
```javascript
modifier onlyMember {
    require(memberList[msg.sender] == true);
    _;
}
```

```javascript
// Members can make a proposal
function proposeSomething(string _description) public onlyMember returns (uint256) {
    currentProposalNumber++;
    Proposal memory newProposal;
    newProposal.title = _description;
    newProposal.owner = msg.sender;
    proposalList[currentProposalNumber] = newProposal;
    return currentProposalNumber;
}
```