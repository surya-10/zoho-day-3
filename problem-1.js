// Problem Description:
// You are given an integer array coins representing coins of different denominations and an integer
// amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money
// cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.



function coinChange(coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}
console.log(coinChange([1, 2, 5], 11));