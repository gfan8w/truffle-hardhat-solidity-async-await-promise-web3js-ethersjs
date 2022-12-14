const Web3 = require('web3');
const web3 = new Web3('wss://wss.api.moonbase.moonbeam.network');


const resetEvent='Reset(address)'
const resetTopic =web3.utils.soliditySha3(resetEvent)
console.log("resetTopic:",resetTopic)
const resetTopic2 =web3.utils.sha3(web3.utils.toHex(resetEvent), {encoding:"hex"});
console.log("resetTopic:",resetTopic2)

// solidity 中等效的计算： keccak256('Reset(address)')

web3.eth.subscribe('logs', {
    address: '0x27d534718f4961ADD0a89896404Dc1833B018D83',
    topics: []
}, (error, result) => {
    if (error)
        console.error(error);
})
    .on("connected", function (subscriptionId) {
        console.log(subscriptionId);
    })
    .on("data", function (log) {
        console.log(log);
    });
