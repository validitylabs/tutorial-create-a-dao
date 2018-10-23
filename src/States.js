const directoryPre = "";
// const directoryPre = "/BFSCon18";
const toc = [
  {
    title: "Preparation",
    directory: "prep",
    list: [
      {
        prefix: "Setup",
        name: "List of tools"
      }
    ]
  },
  {
    title: "Create a small DAO",
    directory: "DAO",
    list: [
      {
        prefix: 0,
        name: "Pragma and contract structures"
      },
      {
        prefix: 1,
        name: "String type and getter"
      },
      {
        prefix: 2,
        name: "Constructor and msg.sender"
      },
      {
        prefix: 3,
        name: "Function and mapping"
      },
      {
        prefix: 4,
        name: "Require and modifier"
      },
      {
        prefix: 5,
        name: "Payable"
      },
      {
        prefix: 6,
        name: "Struct"
      },
      {
        prefix: "Extra exercise",
        name: "Make a proposal and vote"
      }
    ]
  }
];

var structure = toc.map(item => ({
  title: item.title,
  //   directory: `${directoryPre}` + "/" + item.directory,
  directory: item.directory,
  list: item.list
}));

export { directoryPre, structure };
