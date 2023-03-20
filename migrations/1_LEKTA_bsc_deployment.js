const LEKTA = artifacts.require("LEKTA_BEP20");
const {deployProxy, upgradeProxy} = require("@openzeppelin/truffle-upgrades");

module.exports = async function (deployer, network, accounts) {
    if(network === "bsctestnet" || network === "smartchain") {
        // deploying the lekta contract
        await deployProxy(LEKTA, ["LEKTA","LEKTA"], {deployer, kind: 'uups'});
    }
}