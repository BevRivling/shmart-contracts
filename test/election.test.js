const Election = artifacts.require("./Election.sol");

contract("Election", accounts => {
  it("initialises with two candidates", () => {
    return Election.deployed()
      .then(inst => {
        return inst.candidatesCount();
      })
      .then(count => {
        assert.equal(count, 2);
      });
  });
});
