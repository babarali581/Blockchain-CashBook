pragma solidity ^0.8.0;

contract Accountancy {
    uint256 counter;

    constructor() {
        counter = 0;
    }

    struct List {
        uint256 uid;
        uint256 amount;
        string sender;
    }
    List[] listArray;

    function addList(uint256 item, string memory detail) public {
        listArray.push(List(counter, item, detail));
        counter++;
    }

    function getList() public view returns (List[] memory) {
        return listArray;
    }

    function remove(uint256 index) public {
        listArray[index] = listArray[listArray.length - 1];
        listArray.pop();
    }
}

