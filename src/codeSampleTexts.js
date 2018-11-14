//This file is necessary because the naive approach of function.toSource() only works in development mode.
//With a React build, the code is uglified and appears on the cards as the uglified code.
//This file is unreadable, but it needn't be readable.  It is just the escaped function text.

export const temperatureConverter = 'function temperatureConverter(temperature, from, to) => {   \/\/This code could be more compact, but at the expense of clarity.\r\n    \/\/You can pass either a number,\r\n    \/\/ the temperature scale as a single character and the temperature scale to convert to\r\n    \/\/or you can call like this: temperatureConverter(\"32F\",\"C\"), which returns 0.\r\n    \/\/ You can even type out the scale if you\'re so inclined!  That\'s why we have all the regexes.\r\n    if (![...arguments].length) return;\r\n    const tempAndScale = new RegExp(\/^-?\\d+(.\\d+)?((?!(F.|C.|K.))([FCK]))|(FAHRENHEI|CELSIUS|KELVIN)+$\/);\r\n    const tempOnly = new RegExp(\/^-?\\d+(.\\d+)?$\/);\r\n    const scaleOnly = new RegExp(\/^((?!(F.|C.|K.))([FCK]))|(FAHRENHEI|CELSIUS|KELVIN)$\/);\r\n    const findScale = new RegExp(\/((?!(F.|C.|K.))([FCK]))|(FAHRENHEI|CELSIUS|KELVIN)\/);\r\n\r\n    \/\/We can use a mod operation to reduce to the correct function.\r\n    const indexer = [\'C\', \'F\', \'K\', \"CELSIUS\", \"FAHRENHEIT\", \"KELVIN\"];\r\n\r\n    \/\/All our arrow functions.\r\n    const fToC = (f) => (f - 32) * 5 \/ 9;\r\n    const fToK = (f) => cToK(fToC(f));\r\n    const cToF = (c) => 9 \/ 5 * c + 32;\r\n    const cToK = (c) => c + 273.15;\r\n    const kToC = (k) => k - 273.15;\r\n    const kToF = (k) => cToF(k - 273.15);\r\n\r\n\r\n    \/\/Make sure we only throw the error we want to throw.  Let\'s consider them all strings for now.\r\n    temperature = temperature.toString().toUpperCase();\r\n\r\n    if (!to) to = \'\';\r\n    if (!from) from = \'\';\r\n\r\n    from = from.toString().toUpperCase();\r\n    to = to.toString().toUpperCase();\r\n\r\n    \/\/Throw any errors.\r\n    if (!temperature.match(tempAndScale) && !temperature.match(tempOnly)\r\n        || (temperature.match(tempOnly) && !(to.match(scaleOnly) && from.match(scaleOnly))))\r\n        throw new Error(\"You must pass a temperature in the form of a number,\" +\r\n            \" or include the scale, but nothing else.  If you pass just a number,\" +\r\n            \" you must pass to and from paramaters that contain just the scale.\");\r\n    if (!from) throw new Error(\'There is no temperature scale to convert to\');\r\n\r\n    if (to === from) return temperature; \/\/We don\'t need to change anything.\r\n\r\n    if (!to) {\r\n        to = from;\r\n        from = temperature.match(findScale)[0];\r\n    }\r\n    \/\/It\'s certain to be here, so we don\'t need to look for falsiness.\r\n    \/\/ If it\'s not present, we already threw an error.\r\n    const toIndex = (indexer.indexOf(to) + 1) % 3;\r\n\r\n    \/\/Same with this one.  The n % 3 is so we can use a switch statement.\r\n    \/\/Since we set up the array to mirror single letters and names we can use this trick.\r\n    const fromIndex = (indexer.indexOf(from) + 1) % 3;\r\n    const temp = parseFloat(temperature);\r\n    let t;\r\n\r\n\r\n    switch (fromIndex) {\r\n        case 0 : \/\/Kelvin\r\n        {\r\n            if (temp < 0) throw new Error(\'Kelvin temperature is less than absolute 0\');\r\n            if (toIndex === 1) {\r\n                t = kToC(temp);\r\n                console.log(\'kToC\')\r\n            }\r\n            else {\r\n                t = kToF(temp);\r\n                console.log(\'kToF\')\r\n            }\r\n            console.log(t);\r\n\r\n            return t;\r\n        }\r\n        \/\/Usually, a break statement should go here, but something is returned in every case.\r\n        case 1 : \/\/Celsius\r\n        {\r\n            if (temp < -273.15) throw new Error(\'Celsius temperature is less than absolute 0\');\r\n            let t;\r\n            if (toIndex === 0) {\r\n                t = cToK(temp);\r\n\r\n            }\r\n            else {\r\n                t = cToF(temp);\r\n\r\n            }\r\n            return (t)\r\n\r\n        }\r\n        case 2 : \/\/Fahrenheit\r\n        {\r\n            if (temp < -459.6699999999) throw new Error(\'Fahrenheit temperature is less than absolute 0\');\r\n\r\n            let t;\r\n            if (toIndex === 0) {\r\n                t = fToK(temp);\r\n            }\r\n            else {\r\n                t = fToC(temp);\r\n            }\r\n            return (t)\r\n        }\r\n    }\r\n}';
export const fizzBuzz = '{\n' +
    '    //The FizzBuzz algorithm is as follows:  If a number is divisible by 3, print FIZZ.  If it\'s divisible\n' +
    '    //by 5, print BUZZ.  Else print the number.\n' +
    '    let i;\n' +
    '    for (i = 1; i < 101; i++) {\n' +
    '        let str = \'\';\n' +
    '        if (i % 3 === 0) str += \'FIZZ\';\n' +
    '        if (i % 5 === 0) str += \'BUZZ\';\n' +
    '\n' +
    '        console.log(str ? str : i)\n' +
    '    }\n' +
    '}'
export const consumeRestService = 'function consumeRestService(){ //This shows a new random picture of a cat every 20 seconds.  It uses fetch and promises. \n' +
    '    //We route the request through a proxy server to allow CORS in the browser.  Loading can be a little slow.\n' +
    '\\n' +
    '    window.interval = setInterval(() => fetch(\'https://cors-anywhere.herokuapp.com/https://aws.random.cat/meow\', {\n' +
    '\n' +
    '            method: \'GET\',\\n' +
    '            headers:/\n' +
    '                {\n' +
    '                    \'Allow-Access-Control-Origin\': \'*\',\n' +
    '                    Accept: \'text/html\'\n' +
    '                }\n' +
    '        })\n' +
    '            .then(response => response.json().then((jsonResponse) => document.getElementById(\'modal\').innerHTML = \'<div style="margin: auto; height:100%; display: flex; justify-content: center; align-content:center">\' +\n' +
    '                \'<img src="\' + jsonResponse.file + \'" height= \' + window.innerHeight * .9 + \'/></div>\')).then((jsonResponse) => console.log(jsonResponse.file))\n' +
    '            .catch(e => alert(e.message))\n' +
    '        , 20000, 0)\n' +
    '}';
export const quickSort ='function quickSort(){\n' +
    '    let data = [];\n' +
    '    //Generate an array of 100 random numbers.  A bubble sort would work just fine for an array of this size.\n' +
    '    //This is usually unnecessary in practice as most languages with sort functions automatically apply the best\n' +
    '    //algorithm.  That said, the efficiency of quick sort is excellent.  It is O(n log n) as opposed to say O(n^2) for\n' +
    '    //bubble sort.  However, this data set is a species of data sets that represent the worst case scenario for this algorithm.\n' +
    '    for (let i = 0; i < 1000; i++) {\n' +
    '        data.push(Math.trunc(Math.random() * 100));\n' +
    '    }\n' +
    '\n' +
    '    console.log(\'[\' + data.toString() + \']\');\n' +
    '    let iterations = 0;\n' +
    '\n' +
    '    function quickSortRecursion(data) {\n' +
    '        if (data.length < 2) return data;\n' +
    '        const pivot = data.pop();\n' +
    '        let left = [];\n' +
    '        let right = [];\n' +
    '        let newArray = [];\n' +
    '\n' +
    '        for (let i = 0; i < data.length; i++) {\n' +
    '            let datum = data[i];\n' +
    '            if (datum <= pivot) left.push(datum);\n' +
    '            else right.push(datum);\n' +
    '        }\n' +
    '        iterations++;\n' +
    '        newArray = newArray.concat(quickSortRecursion(left), pivot, quickSortRecursion(right));\n' +
    '\n' +
    '\n' +
    '        return newArray;\n' +
    '\n' +
    '\n' +
    '    }\n' +
    '\n' +
    '    console.log(\'[\' + quickSortRecursion(data).toString() + \']\');\n' +
    '    console.log(\'Sorted in \' + iterations + \' iterations.\')\n' +
    '}'
export const binarySearch = '{\n' +
    '    target=parseInt(target);\n' +
    '    debugger;\n' +
    '    let low = 0;\n' +
    '    let high = arr.length - 1;\n' +
    '    let index = 0;\n' +
    '    while (low < high) {\n' +
    '        if(high-1===index) return -1;\n' +
    '        index = Math.trunc((low + high) / 2);\n' +
    '        if (arr[index] === target) return index;\n' +
    '        if (arr[index] > target) {\n' +
    '            high = index;\n' +
    '        }\n' +
    '        else low = index;\n' +
    '    }\n' +
    '    return -1\n' +
    '}'