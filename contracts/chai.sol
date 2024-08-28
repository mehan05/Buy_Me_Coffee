// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract chai{
    error AmountLessThanZero(uint256 amount);
    struct Memo{
        string name;
        string message;
        uint256 timeStamp;
        address from;
    }
    address payable  owner;
    constructor()
    {
        owner = payable(msg.sender);
    }
    Memo[] memos;

    function buyChai(string calldata name,string calldata message) external payable {
        if(msg.value<0)
        {
            revert AmountLessThanZero(msg.value);
        }
        (bool success,) = owner.call{value:msg.value}("");
        require(success,"Transaction Failed");
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }
    function getMemo() public view returns(Memo[] memory)
    {
        return memos;
    }

}