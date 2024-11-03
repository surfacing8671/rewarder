const fs = require('fs');

// Load JSON files
const rewardedData = JSON.parse(fs.readFileSync('r3.json'));
const withdrawnData = JSON.parse(fs.readFileSync('t.json'));

// Create a map to track rewards and withdrawals for each user
const userBalances = {};

// Process reward data
rewardedData.R_RewardsCalculated.forEach(entry => {
  const user = entry.user.toLowerCase();
  const amount = BigInt(entry.amount);

  if (!userBalances[user]) {
    userBalances[user] = { rewarded: BigInt(0), withdrawn: BigInt(0) };
  }
  userBalances[user].rewarded += amount;
});

// Process withdrawal data
withdrawnData.R_Withdrawn.forEach(entry => {
  const user = entry.user.toLowerCase();
  const amount = BigInt(entry.amount);

  if (!userBalances[user]) {
    userBalances[user] = { rewarded: BigInt(0), withdrawn: BigInt(0) };
  }
  userBalances[user].withdrawn += amount;
});

// Calculate net balance for each user
const netBalances = [];

let g = 0n;
for (const user in userBalances) {
  const { rewarded, withdrawn } = userBalances[user];
  let a = ((rewarded) - (withdrawn))
  if(Number(a) !== 0){
  let h = {
    user: user,
    amount: a.toString()
  }
  netBalances.push(h)
  g += (a)
}

}

// Output net balances
for (const user in netBalances) {
  console.log(`User: ${user}, Net Balance: ${netBalances[user].toString()}`);
}


console.log(Number(g) /1e18)

// Optionally, write results to a file
fs.writeFileSync('net_balances.json', JSON.stringify(netBalances, null, 2));
