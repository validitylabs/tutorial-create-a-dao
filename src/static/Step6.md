### Step 6 - Struct

One thing we'd like to promote in the organisation is to speak up. So next functionality we'd introduce is to let your member make a proposal.

Solidity provides a way to define new types in the form of structs. Here we make a new type called _Proposal_. Also, we'd need a mapping that tracks all these proposals _proposalList_ as well as a number traces the total number of proposals.

```javascript
struct Proposal {
    string title;
    address owner;
}

mapping(uint256=>Proposal) public proposalList;
uint256 public currentProposalNumber;
```

- [ ] We only want members to be able to make proposals. How to do this?

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

> Material prepared for Blockchain for Science Conference 2018 Berlin (#BFSCON18), by [ValidityLabs AG](https://validitylabs.org/)

> For any questions on content, please contact [Q](mailto:qianchen.yu@validitylabs.org)
