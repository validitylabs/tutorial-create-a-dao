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

#### _Task_: 
We want members to be able to make proposals  __only__. How to do this?