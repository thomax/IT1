const users = [
  {
    name: 'Nina',
    groupMemberships: ['Anime', 'Mountainbike', 'HMRB']
  },
  // etc
]
const groups = [
  {
    name: 'Anime',
    members: ['Nina', 'Bob', 'Joe', 'Miri']
  },
  // etc
]


// Considere these two functions (renameVersion1 and renameVersion2), which work on the data structure above.
// Given these numbers:
  // Total number of users: 10000
  // Total number of groups: 500
  // Average number of groupMemberships per user: 6
// 1. Which function is most efficient?
// 2. How much more efficient is it?


function renameVersion1() {
  users.forEach(user => {
    user.groupMemberships.forEach(groupName => {
      const group = groups.find(aGroup => {
        return aGroup.name === groupName
      })
      // Update group name
      group.name = group.name.toLowerCase()
      // Update group membership name
      groupName = groupName.toLowerCase()
    })
  })
}

function renameVersion2() {
  groups.forEach(group => {
      // Update group name
      group.name = group.name.toLowerCase()
  })
  users.forEach(user => {
    user.groupMemberships.forEach(groupName => {
      // Update group membership name
      groupName = groupName.toLowerCase()
    })
  })
}
