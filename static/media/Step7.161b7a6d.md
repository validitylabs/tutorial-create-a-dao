### Extra practices

After one member proposes something, how about letting others vote on-chain? How would you implement these functionalities using what we have learned so far?

1. Extend the _Proposal_ type with following code

```javascript
mapping(address=>bool) votes;
uint256 positiveVotes;
```

2. add _voteForProposal_ function

```javascript
// Members can vote for the proposal
function voteForProposal(uint256 _proposalNumber, bool _vote) public onlyMember returns (bool) {
    require(_proposalNumber <= currentProposalNumber);
    bool oldVote = proposalList[_proposalNumber].votes[msg.sender];
    if (oldVote != _vote) {
        proposalList[_proposalNumber].votes[msg.sender] = _vote;
        if (_vote == true) {
            proposalList[_proposalNumber].positiveVotes++;
        } else {
            proposalList[_proposalNumber].positiveVotes--;
        }
    }
}
```

3. add _getCurrentResultForProposal_ function to check the result of current voting.

```javascript
function getCurrentResultForProposal(uint256 _proposalNumber) public view returns (uint256) {
    return proposalList[_proposalNumber].positiveVotes;
}
```