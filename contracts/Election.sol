pragma solidity ^0.5.0;

contract Election {

    // Model candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    
    // Store candidate


    // Fetch candidate
    mapping(uint => Candidate) public candidates;

    // Store candidate count
    uint public candidatesCount;
  
    // Constructor
    constructor () public {
        addCandidate("Big John");
        addCandidate("Little Susan");
    }

    function addCandidate (string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

}