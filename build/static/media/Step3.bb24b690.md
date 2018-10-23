### Step 3 - Function and mapping

Great. The DAO now has a name and a responsible. Next thing we need is some members.

First we need to let them join the organisation. Second, if there are more than 100 of people want to join your cool organisation, we must think of a way to manage them.

Here we use _memberList_ variable to manage such list. The type `mapping` is just like pointer in C. `mapping(address=>bool) public memberList;`

```javascript
function addMember(address _newMember) public returns (bool) {
    if (memberList[_newMember] == true) {
        return false;
    } else {
        memberList[_newMember] = true;
        return true;
    }
}
```

Also, we want the owner to become a member automatically. `memberList[owner] = true;`

> Material prepared for Blockchain for Science Conference 2018 Berlin (#BFSCON18), by [ValidityLabs AG](https://validitylabs.org/)

> For any questions on content, please contact [Q](mailto:qianchen.yu@validitylabs.org)
