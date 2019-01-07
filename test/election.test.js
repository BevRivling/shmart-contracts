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

  it("it initiallises the candidates with the correct values", () => {
    return Election.deployed()
      .then(inst => {
        electionInstance = inst;
        return electionInstance.candidates(1);
      })
      .then(candidate => {
        assert.equal(candidate[0], 1, "contains the correct id");
        assert.equal(candidate[1], "Big John", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct votes count");
        return electionInstance.candidates(2);
      })
      .then(candidate => {
        assert.equal(candidate[0], 2, "contains the correct id");
        assert.equal(candidate[1], "Little Susan", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct votes count");
      });
  });
});
