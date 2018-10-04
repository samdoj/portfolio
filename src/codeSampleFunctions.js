export const temperatureConverter = (temperature, from, to)=>
{   //This code could be more compact, but at the expense of clarity.
    //You can pass either a number,
    // the temperature scale as a single character and the temperature scale to convert to
    //or you can call like this: temperatureConverter("32F","C"), which returns 0.
    // You can even type out the scale if you're so inclined!  That's why we have all the regexes.
    if (![...arguments].length) return;
    const tempAndScale = new RegExp(/^\-?\d+(.\d+){0,1}[F,C,K, FAHRENHEIT,CELSIUS,KELVIN]+$/);
    const tempOnly =  new RegExp(/^-?\d+(.\d+){0,1}$/);
    const scaleOnly = new RegExp(/^[F,C,K, FAHRENHEIT,CELCIUS,KELVIN]$/);
    const findScale = new RegExp(/[F,C,K, FAHRENHEIT,CELCIUS,KELVIN]/);
    const findTemp = new RegExp(/-?\d+(.\d+)?/);
    const indexer = ['C','F','K',"CELSIUS","FAHRENHEIT","KELVIN"];

    //All our arrow functions.
    const fToC = (f)=> (f-32)*5/9;
    const fToK = (f)=>cToK(fToC(f));
    const cToF = (c)=>9/5*c+32;
    const cToK = (c)=>c+273.15;
    const kToC = (k)=>k-273.15;
    const kToF = (k)=>cToF(k-273.15);


    //Make sure we only throw the error we want to throw.  Let's consider them all strings for now.
    temperature=temperature.toString().toUpperCase();

    if(!to) to='';
    if(!from) from='';

    from=from.toString().toUpperCase();
    to=to.toString().toUpperCase();

    //Throw any errors.
    if(!temperature.match(tempAndScale) && !temperature.match(tempOnly)
        || (temperature.match(tempOnly) && !(to.match(scaleOnly) && from.match(scaleOnly))))
        throw new Error("You must pass a temperature in the form of a number," +
            " or include the scale, but nothing else.  If you pass just a number," +
            " you must pass to and from paramaters that contain just the scale.");
    if (!from) throw new Error('The from parameter is always needed, but it is absent.');

    if (to === from) return temperature; //We don't need to change anything.

    if (!to)
    {
        to = from;
        from = temperature.match(findScale)[0];
        temperature=temperature.match(findTemp)[0];
    }
    //It's certain to be here, so we don't need to look for falsiness.
    // If it's not present, we already threw an error.
    const toIndex = (indexer.indexOf(to)+1) % 3;

    //Same with this one.  The n % 3 is so we can use a switch statement.
    //Since we set up the array to mirror single letters and names we can use this trick.
    const fromIndex = (indexer.indexOf(from)+1) % 3;
    let t;

    switch (fromIndex) {
        case 0 : //Kelvin
        {
            if (toIndex===1)
            {
                t = kToC(temperature);
                console.log('kToC')
            }
            else
            {
                t = kToF(temperature);
                console.log('kToF')
            }
            console.log(t);

            return t;
        }
        //Usually, a break statement should go here, but something is returned in every case.
        case 1 : //Celsius
        {
            let t;
            if (toIndex===0)
            {
                t = cToK(temperature);

                console.log('cToK')
            }
            else
            {
                t = cToF(temperature);

                console.log('cToF')
            }
            console.log(t);
            return(t)

        }
        case 2 : //Fahrenheit
        {
            let t;
            if (toIndex===0)
            {
                t = fToK(temperature);
                console.log('fToK')
            }
            else
            {
                t = fToC(temperature);
                console.log('fToC');
            }
            console.log(t);
            return(t)
        }
    }
};

export const fizzBuzz = () =>
{
    //The FizzBuzz algorithm is as follows:  If a number is divisible by 3, print FIZZ.  If it's divisible
    //by 5, print BUZZ.  Else print the number.
    let i;
    for (i = 1; i < 101; i++)
    {let str = '';
        if(i%3 === 0) str +='FIZZ';
        if(i%5 === 0) str += 'BUZZ';

        console.log(str ? str : i)}
};

export const consumeRestService = () =>
{
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
            .then(response => response.json().
            then((jsonResponse) => document.getElementById('modal').innerHTML = '<div style="margin: auto; height:100%; display: flex; justify-content: center; align-content:center">' +
                '<img src="'+jsonResponse.file+'" height= '+ window.innerHeight*.9+'/></div>')).then((jsonResponse)=>console.log(jsonResponse.file))
            .catch(e => alert(e.message))
        , 20000,0)
};

