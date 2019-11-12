const MultiSig = artifacts.require("MultiSigWallet");
const MultiSigDaily = artifacts.require("MultiSigWalletWithDailyLimit");

module.exports = function (deployer) {
    deployer.deploy(MultiSig);
};

module.exports = function (deployer) {
    deployer.deploy(MultiSigDaily);
}
