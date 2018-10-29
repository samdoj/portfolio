export const temperatureConverter = (temperature, from, to) => {   //This code could be more compact, but at the expense of clarity.
    //You can pass either a number,
    // the temperature scale as a single character and the temperature scale to convert to
    //or you can call like this: temperatureConverter("32F","C"), which returns 0.
    // You can even type out the scale if you're so inclined!  That's why we have all the regexes.
    if (![...arguments].length) return;
    const tempAndScale = new RegExp(/^-?\d+(.\d+)?((?!(F.|C.|K.))([FCK]))|(FAHRENHEI|CELSIUS|KELVIN)+$/);
    const tempOnly = new RegExp(/^-?\d+(.\d+)?$/);
    const scaleOnly = new RegExp(/^((?!(F.|C.|K.))([FCK]))|(FAHRENHEI|CELSIUS|KELVIN)$/);
    const findScale = new RegExp(/((?!(F.|C.|K.))([FCK]))|(FAHRENHEI|CELSIUS|KELVIN)/);

    //We can use a mod operation to reduce to the correct function.
    const indexer = ['C', 'F', 'K', "CELSIUS", "FAHRENHEIT", "KELVIN"];

    //All our arrow functions.
    const fToC = (f) => (f - 32) * 5 / 9;
    const fToK = (f) => cToK(fToC(f));
    const cToF = (c) => 9 / 5 * c + 32;
    const cToK = (c) => c + 273.15;
    const kToC = (k) => k - 273.15;
    const kToF = (k) => cToF(k - 273.15);


    //Make sure we only throw the error we want to throw.  Let's consider them all strings for now.
    temperature = temperature.toString().toUpperCase();

    if (!to) to = '';
    if (!from) from = '';

    from = from.toString().toUpperCase();
    to = to.toString().toUpperCase();

    //Throw any errors.
    if (!temperature.match(tempAndScale) && !temperature.match(tempOnly)
        || (temperature.match(tempOnly) && !(to.match(scaleOnly) && from.match(scaleOnly))))
        throw new Error("You must pass a temperature in the form of a number," +
            " or include the scale, but nothing else.  If you pass just a number," +
            " you must pass to and from paramaters that contain just the scale.");
    if (!from) throw new Error('There is no temperature scale to convert to');

    if (to === from) return temperature; //We don't need to change anything.

    if (!to) {
        to = from;
        from = temperature.match(findScale)[0];
    }
    //It's certain to be here, so we don't need to look for falsiness.
    // If it's not present, we already threw an error.
    const toIndex = (indexer.indexOf(to) + 1) % 3;

    //Same with this one.  The n % 3 is so we can use a switch statement.
    //Since we set up the array to mirror single letters and names we can use this trick.
    const fromIndex = (indexer.indexOf(from) + 1) % 3;
    const temp = parseFloat(temperature);
    let t;


    switch (fromIndex) {
        case 0 : //Kelvin
        {
            if (temp < 0) throw new Error('Kelvin temperature is less than absolute 0');
            if (toIndex === 1) {
                t = kToC(temp);
                console.log('kToC')
            }
            else {
                t = kToF(temp);
                console.log('kToF')
            }
            console.log(t);

            return t;
        }
        //Usually, a break statement should go here, but something is returned in every case.
        case 1 : //Celsius
        {
            if (temp < -273.15) throw new Error('Celsius temperature is less than absolute 0');
            let t;
            if (toIndex === 0) {
                t = cToK(temp);

            }
            else {
                t = cToF(temp);

            }
            return (t)

        }
        case 2 : //Fahrenheit
        {
            if (temp < -459.6699999999) throw new Error('Fahrenheit temperature is less than absolute 0');

            let t;
            if (toIndex === 0) {
                t = fToK(temp);
            }
            else {
                t = fToC(temp);
            }
            return (t)
        }
    }
};

export const fizzBuzz = () => {
    //The FizzBuzz algorithm is as follows:  If a number is divisible by 3, print FIZZ.  If it's divisible
    //by 5, print BUZZ.  Else print the number.
    let i;
    for (i = 1; i < 101; i++) {
        let str = '';
        if (i % 3 === 0) str += 'FIZZ';
        if (i % 5 === 0) str += 'BUZZ';

        console.log(str ? str : i)
    }
};

export const consumeRestService = () => {
    //This shows a new random picture of a cat every 20 seconds.  It uses fetch and promises.
    //We route the request through a proxy server to allow CORS in the browser.  Loading can be a little slow.

    window.interval = setInterval(() => fetch('https://cors-anywhere.herokuapp.com/https://aws.random.cat/meow', {

            method: 'GET',
            headers:
                {
                    'Allow-Access-Control-Origin': '*',
                    Accept: 'text/html'
                }
        })
            .then(response => response.json().then((jsonResponse) => document.getElementById('modal').innerHTML = '<div style="margin: auto; height:100%; display: flex; justify-content: center; align-content:center">' +
                '<img src="' + jsonResponse.file + '" height= ' + window.innerHeight * .9 + '/></div>')).then((jsonResponse) => console.log(jsonResponse.file))
            .catch(e => alert(e.message))
        , 20000, 0)
};

export const quickSort = () => {
    let data = [];
    //Generate an array of 100 random numbers.  A bubble sort would work just fine for an array of this size.
    //This is usually unnecessary in practice as most languages with sort functions automatically apply the best
    //algorithm.  That said, the efficiency of quick sort is excellent.  It is O(n log n) as opposed to say O(n^2) for
    //bubble sort.  However, this data set is a species of data sets that represent the worst case scenario for this algorithm.
    for (let i = 0; i < 1000; i++) {
        data.push(Math.trunc(Math.random() * 100));
    }

    console.log('[' + data.toString() + ']');
    let iterations = 0;

    function quickSortRecursion(data) {
        if (data.length < 2) return data;
        const pivot = data.pop();
        let left = [];
        let right = [];
        let newArray = [];

        for (let i = 0; i < data.length; i++) {
            let datum = data[i];
            if (datum <= pivot) left.push(datum);
            else right.push(datum);
        }
        iterations++;
        newArray = newArray.concat(quickSortRecursion(left), pivot, quickSortRecursion(right));


        return newArray;


    }

    console.log('[' + quickSortRecursion(data).toString() + ']');
    console.log('Sorted in ' + iterations + ' iterations.')
};

export const binarySearch = (arr, target) => {
    target=parseInt(target);
    debugger;
    let low = 0;
    let high = arr.length - 1;
    let index = 0;
    while (low < high) {
        if(high-1===index) return -1;
        index = Math.trunc((low + high) / 2);
        if (arr[index] === target) return index;
        if (arr[index] > target) {
            high = index;
        }
        else low = index;
    }
    return -1
};
