import React from "react";
import "../post/jsLearning.scss";
import arrSpliceImg from "../images/arrSplices.png";
import deleteRepeatImg from "../images/deleteRepeat.png";
import sortUsageImg from "../images/sortUsage.png";
import stringUsageImg from "../images/stringUsage.png";
import substringUsageImg from "../images/stringUsage.png";
import splitUsageImg from "../images/splitUsage.png";
import scopeUsageImg from "../images/scopeUsage.png";
import argumentsUsageImg from "../images/argumentsUsage.png";
import cloneUsageImg from "../images/clone.png";
import araryOperationImg from "../images/arrayOperations.png";
import undefinedNullImg from "../images/undefinedNull.png";
import objectReferencesImg from "../images/objectReferences.png";
import CodeFigure from "../components/CodeFigure";
const ReactMarkdown = require("react-markdown");

// var arrSpliceImg = require('../images/arrSplice.png');

const arrSplice = `
arrayObject.splice(start, num)
var arr = [[ 1, 2, 3 ]];

// delete
var temp;
temp = arr.splice(0,1); // temp = 1, arr = [[2, 3]]

// replace
temp = arr.splice(0, 1, 5); // arr = [[5, 2, 3]]

// add
temp = arr.splice(1, 0, 100); // arr = [[1, 100, 2, 3]]
`;

const arrDeleteRepeat = `
var arr = [[1, 2, 3, 3, 3, 5, 6, 8]];
for (var i = 0; i< arr.length; i++) {
    for (var j = i + 1; j< arr.length; j++) {
        if (arr[i] == arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
    console.log(arr);
}
`;

const sortUsage = `

var arr = [[ 2, 3, 13, 45, 56, 1 ]];
var arr2 = [[ '1px', '2px', '4px', '3px' ]];

1. var temp = arr.sort(); by default, compare based on string

2. arr.sort(function (a, b){
    return a - b; // from small to big
    return b - a; // from big to small
});

3. arr2.sort(function (a, b){
    return parseInt(a) - parseInt(b);
    return parseInt(b) - parseInt(a);
});

4. arr.sort(function () {
    return Math.random() - 0.5;
})

`;

const stringUsage = `

var str = 'Hello';

// get length
var temp = arr.length; // 5

// get character
var temp = str[1]; // e

// get character method 2
var temp = str.charAt(1); // e

// find element position
var searchVal = 'o';
for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == searchVal) {
        return i;
    }
}

// find element position (using indexof)
// indexOf(searchVal, fromIndex)
// searchVal is a must, fromIndex is optional
var str2 = 'Hello World';
var temp = str2.indexOf('o'); // 4
var temp2 = str2.indexOf('o', 5); // 7

// find element appear times
var str = 'Hello World';
var searchVal = 'o';
var index = 0;
var sum = 0;

index here stand for at which position to start the search
while(str.indexOf(searchVal, index) != -1) {
    index = str.indexOf(searchVal, index);
    alert(index);
    index += searchVal.length;
    sum++;
}

alert(sum); // 2

`;

const substringUsage = `
    const myString = '01234';
    // substring(start, stop) from start till stop-1
    alert(myString.substring(1,3)); //12
`;

const splitUsage = `
    // split (sep, length)
    var str = '12345'
    var arr = str.split(''); // [1, 2, 3, 4, 5]
    var arr2 = str.split('', 2); // [1 ,2]

    Example (reverse string)
    var str = '123456';
    var ans = str.split('').reverse().join(''); // 654321
`;

class JSLearning extends React.Component {
  render() {
    console.log(arrSpliceImg);

    return (
      <div className="JSLearning">
        <p>JS Basics</p>
        <img src="/images/clone.png" alt="weikee" />
        <CodeFigure title="Array Splice" file="js" imgsrc={arrSpliceImg} />
        <CodeFigure title="Delete Repeat" file="js" imgsrc={deleteRepeatImg} />
        <CodeFigure title="Sort Usage" file="js" imgsrc={sortUsageImg} />
        <CodeFigure title="String Usage" file="js" imgsrc={stringUsageImg} />
        <CodeFigure
          title="Substring Usage"
          file="js"
          imgsrc={substringUsageImg}
        />
        <CodeFigure title="Split Usage" file="js" imgsrc={splitUsageImg} />
        <CodeFigure title="Scope Usage" file="js" imgsrc={scopeUsageImg} />
        <CodeFigure
          title="Arguments Usage"
          file="js"
          imgsrc={argumentsUsageImg}
        />
        <CodeFigure title="Clone Usage" file="js" imgsrc={cloneUsageImg} />
        <CodeFigure title="Array Usage" file="js" imgsrc={araryOperationImg} />
        <CodeFigure
          title="Undefined Null"
          file="js"
          imgsrc={undefinedNullImg}
        />
        <CodeFigure
          title="Object References"
          file="js"
          imgsrc={objectReferencesImg}
        />
        {/* <img src={arrSpliceImg} alt="array splice" width="100%" /> */}
        {/* <img src={deleteRepeatImg} alt="delete repeat" width="100%" />
                <img src={sortUsageImg} alt="sort usage" width="100%" />
                <img src={stringUsageImg} alt="string usage" width="100%" />
                <img src={substringUsageImg} alt="substring usage" width="100%" />
                <img src={splitUsageImg} alt="split usage" width="100%" /> */}
        {/* <CodeFigure title="Array Splice" file="js" source={arrSplice} />
                <CodeFigure title="Delete Repeat" file="js" source={arrDeleteRepeat} />
                <CodeFigure title="Sort Usage" file="js" source={sortUsage} />
                <CodeFigure title="String Usage" file="js" source={stringUsage} />
                <CodeFigure title="Substring Usage" file="js" source={substringUsage} />
                <CodeFigure title="Split Usage" file="js" source={splitUsage}></CodeFigure> */}
      </div>
    );
  }
}

export default JSLearning;
