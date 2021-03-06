

// πππ Ternary Operator μΌν­ μ°μ°μ πππ

// case 1 => if...else...
{
// β Bad Code 
    function getResult(score){
        let result;
        if(score > 5){
            result = 'ππ»';
        } else if (score <= 5){
            result = 'ππ»';
        }
    
        return result
    }
    
    console.log(getResult(6));
}

// case 2 => Ternary Operator
{
    // β Good Code
    function getResult(score){
        return score >= 5 ? 'ππ»' : 'ππ»'
    }

    console.log(getResult(6));
}


// πππ Nullish Coalescing Operator πππ

// Case 1 => β Bad Code 
{
    function printMessager(text){
        let message = text;
        if(text === null || text === undefined){
            message = 'Nothing to display π'
        }
        console.log(message);
        return message
    }
    console.log(printMessager("Hello"));
}

// π¨ Case 2 -> λ§€κ°λ³μμ Defalut κ° ν λΉ
{
    function printMessager(text = 'Nothing to display π' ){
        console.log(text);
    }
    printMessager("Hello"); // Hello
    printMessager(undefined) // Nothing to display π
    printMessager(null) // null

    /*
    undfined μΈ κ²½μ°μλ§ λν΄νΈ κ°μ΄ ν λΉλλ€
    */
}


// π¨ Case 3 -> Nullish Coalescing Operator ??
{
    function printMessager(text){
        const message = text ?? 'Nothing to display π'
        console.log(message);
    }
    printMessager("Hello"); // Hello
    printMessager(undefined) // Nothing to display π
    printMessager(null) // Nothing to display π
}


// π¨ Case 4 -> Logical OR operator ||
{
    function printMessager(text){
        const message = text || 'Nothing to display π'
        console.log(message);
    }
    printMessager("Hello"); // Hello
    printMessager(undefined) // Nothing to display π
    printMessager(null) // Nothing to display π
    printMessager(0) // or -0 => Nothing to display π
    printMessager('') // or "",`` => Nothing to display π
    printMessager(NaN) // Nothing to display π
}

/*

μκ³  λμ΄κ°κΈ°

β Nullish Coalescing Operator ??

leftExpr ?? rightExpr

leftExpr(μΌμͺ½μ½λ) κ° null , undefined μΈ κ²½μ° rightExpr(μ€λ₯Έμͺ½μ½λ) μ€ν 

β Logical OR operator ||

leftExpr || rightExpr

leftExpr(μΌμͺ½μ½λ) κ° flasyμΈ κ²½μ° rightExpr(μ€λ₯Έμͺ½μ½λ) μ€ν 

π‘ what is falsy?

- Boolean : false
- Number : 0 , -0
- undefined
- null
- NaN
- "" , '' , `` (λΉ λ¬Έμμ΄)

*/

// π¨ Case 5 -> Nullish Coalescing Operator ??
{

    const result = getInitialState() ?? fetchFromServer();
    console.log(result); // "Hello World"
    
    function getInitialState(){
        return null;
    }

    function fetchFromServer(){
        return "Hello World"
    }
}

// πππ Object Destructuring πππ

// case 1 => Bad Code
{
    const person = {
        name: 'Julia',
        age: 20,
        phone: '01077777777'
    }

    function displayPerson(person){
        displayAvatar(person.name)
        displayName(person.name)
        displayProfile(person.name, person.age)
    }
}

// case 2 => Bad Code
{
    const person = {
        name: 'Julia',
        age: 20,
        phone: '01077777777'
    }
    
    function displayPerson(person){
        const name = person.name;
        const age = person.age;
        displayAvatar(name)
        displayName(name)
        displayProfile(name,age)
    }
}

// case 3 =>  Object Destructuring
{
    const person = {
        name: 'Julia',
        age: 20,
        phone: '01077777777'
    }
    
    function displayPerson(person){
        const {name, age} = person
        displayAvatar(name)
        displayName(name)
        displayProfile(name,age)
    }
}


// πππ Spread Syntax - Object πππ

// case1 => BadCase
{
    const item = {type: 'π', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    // β Bad Code
    item['price'] = detail.price;

    const newObject = new Object();
    newObject['type'] = item.type;
    newObject['size'] = item.size;
    newObject['priece'] = detail.price;
    newObject['made'] = detail.made;
    newObject['gender'] = detail.gender;
    console.log(newObject);
    // {type: "π", size: "M", priece: 20, made: "Korea", gender: "M"}
}

// case2 => BadCase
{
    const item = {type: 'π', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    // β Bad Code
    const newObject = {
        type: item.type,
        size: item.size,
        price: detail.price,
        made: detail.made,
        gender: detail.gender
    }
    console.log(newObject);
    // {type: "π", size: "M", priece: 20, made: "Korea", gender: "M"}
}

// case3 => Object.assign

{
    const item = {type: 'π', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    const shirt0 = Object.assign(item, detail);
    console.log(shirt0);
    // {type: "π", size: "M", priece: 20, made: "Korea", gender: "M"}
}

// case4 => Spread Syntax
{
    const item = {type: 'π', size: 'M'};
    const detail = {price: 20, made: 'Korea', gender: 'M'};

    const shirt0 = {...item, ...detail};
    console.log(shirt0);
    //{type: "π", size: "M", price: 20, made: "Korea", gender: "M"}

    const shirt1 = {...item, ...detail, price:40 , size:'L', type:"π"};
    console.log(shirt1);
    // {type: "π", size: "L", price: 40, made: "Korea", gender: "M"}

    // μΈμ λ€μ μλ‘μ΄ μνλ°μ΄ν°λ₯Ό μλ°μ΄νΈ ν¨μΌλ‘μ¨ μλ‘μ΄ Objectλ₯Ό λ§λ€ μ μλ€.
}

// case5 => Spread Syntax - Array
{
    let fruits = ['π', 'π', 'π'];

    fruits.push('π')
    console.log(fruits); // (4)Β ["π", "π", "π", "π"]

    //fruits.push('π')
    fruits = [...fruits, 'π']
    console.log(fruits); // Β ["π", "π", "π", "π", "π"]

    //fruits.unshift('π')
    fruits = ['π', ...fruits]
    console.log(fruits); // ["π", "π", "π", "π", "π", "π"]

    let People = ['π¨π»βπ¦±', 'π§π»', 'π§π»ββοΈ', 'π©π»']
}


// case6 => Spread Syntax λ°°μ΄ ν©μΉκΈ°
{
    let fruits = ['π', 'π', 'π', 'π'];
    let People = ['π¨π»βπ¦±', 'π§π»', 'π§π»ββοΈ', 'π©π»']

    // concat Case
    let combined = fruits.concat(People)
    console.log(combined);
    // (8)Β ["π", "π", "π", "π", "π¨π»βπ¦±", "π§π»", "π§π»ββοΈ", "π©π»"]

    // spread Case
    combined = [...fruits, ...People];
    console.log(combined);
    // (8)Β ["π", "π", "π", "π", "π¨π»βπ¦±", "π§π»", "π§π»ββοΈ", "π©π»"]
}



// πππ Optional Chaining πππ

// case 1
{
    const bob = {
        name:'julia',
        age: 20,
    };
    
    const anna = {
        name:'julia',
        age:20,
        job:{
            title:'software Engineer',
        },
    };


    function displayJobTitle(person){
        if(person.job && person.job.title){
            console.log(person.job.title)
        }
        else{
            return console.log('No Job Yet π');
        }
    }
    displayJobTitle(anna) // software Engineer
    displayJobTitle(bob) // No Job Yet π
}

// case 2 -> Optional Chaining
{
    const bob = {
        name:'julia',
        age: 20,
    };
    
    const anna = {
        name:'julia',
        age:20,
        job:{
            title:'software Engineer',
        },
    };
    function displayJobTitle(person){
        if(person.job?.title){
            console.log(person.job.title)
        }
        else{
            return console.log('No Job Yet π');
        }
    }
    displayJobTitle(anna) // software Engineer
    displayJobTitle(bob) // No Job Yet π
}

// case 3 -> Optional Chaining + Nullish Coalescing Operator ??
{
    const bob = {
        name:'julia',
        age: 20,
    };
    
    const anna = {
        name:'julia',
        age:20,
        job:{
            title:'software Engineer',
        },
    };

    function displayJobTitle(person){
        const title = person.job?.title ?? 'No Job Yet π';
        console.log(title);
    }
    displayJobTitle(anna) // software Engineer
    displayJobTitle(bob) // No Job Yet π
}

// πππ Template Literals (Template String) πππ

// Case 1 => Bad Case
{
    const Person = {
        name: 'Julia',
        score: 4,
    };

    // β Bad Case
    console.log(
        'Hello ' + Person.name + ', your currnt score is: ' + Person.score
    ); // Hello Julia, your currnt score is: 4
}

// Case 2 => good Case
{
    const Person = {
        name: 'Julia',
        score: 4,
    };
    console.log(`Hello ${Person.name}, your currnt score is: ${Person.score}`);
    // Hello Julia, your currnt score is: 4
}

// Case 3 => more good Case
{
    const Person = {
        name: 'Julia',
        score: 4,
    };
    const { name,score } = Person
    console.log(`Hello ${name}, your currnt score is: ${score}`);
    // Hello Julia, your currnt score is: 4
}

// Case 4 => more more good Case μ μ§ λ³΄μμ± ππ»
{
    const user1 = {
        name: 'jaeyoung',
        score: 10,
    };

    function greetings(person){
        const { name,score } = person
        return console.log(`Hello ${name}, your currnt score is: ${score}`);
        // Hello Julia, your currnt score is: 4
    }
    greetings(user1);
}



// πππ Loop πππ
    //λ°°μ΄ μμμ μ§μλ₯Ό μ ννμ
    //μ νν μ§μμ 4λ₯Ό κ³±νμ
    //κ³±ν΄μ§ κ°μ μ΄ν©μ κ΅¬νμ 

//λ°°μ΄ μμμ μ§μλ₯Ό μ ννμ case 1  Bad Case
{
    const items = [1,2,3,4,5,6];

    function getAllEvens(itmes){
        const result = [];
        for(let i=0; i<items.length; i++){
            if(items[i] % 2 === 0){
                result.push(items[i])
            }
        }
        return result
    }
    console.log(getAllEvens(items)); // [2, 4, 6]
}

//λ°°μ΄ μμμ μ§μλ₯Ό μ ννμ case 1 good Case - filter()
{
    const items = [1,2,3,4,5,6];

    function getAllEvens(itmes){
        return itmes.filter(num=> num % 2 ===0)
    }
    console.log(getAllEvens(items)); // [2, 4, 6]
}

//μ νν μ§μμ 4λ₯Ό κ³±νμ case 3 bad Case
{
    const items = [1,2,3,4,5,6];

    function multiplyByFour(items){
        const result = [];
        for(let i = 0; i<items.length; i++){
            result.push(items[i] * 4)
        }
        return result
    }
    console.log(multiplyByFour(items));
    //[4, 8, 12, 16, 20, 24]
}

//μ νν μ§μμ 4λ₯Ό κ³±νμ case 4 good Case map()
{
    const items = [1,2,3,4,5,6];

    function multiplyByFour(items){
        return items.map((num)=> num*4)
    }
    console.log(multiplyByFour(items));
    //[4, 8, 12, 16, 20, 24]
}

// κ°μ μ΄ν©μ κ΅¬νμ case 5 bad case
{
    const items = [1,2,3,4,5,6];

    function SumArray(items){
        let sum = 0;
        for(let i=0; i<items.length; i++){
            sum += items[i]
        }
        return sum;
    }
    console.log(SumArray(items)); // 21
}

// κ°μ μ΄ν©μ κ΅¬νμ case 6 good case reduce()
{
    const items = [1,2,3,4,5,6];

    function SumArray(items){
        return items.reduce((a,b)=>a+b,0)
    }
    console.log(SumArray(items)); // 21
} 

    //λ°°μ΄ μμμ μ§μλ₯Ό μ ννμ
    //μ νν μ§μμ 4λ₯Ό κ³±νμ
    //κ³±ν΄μ§ κ°μ μ΄ν©μ κ΅¬νμ 

    // case 7 good code
    {
        const items = [1,2,3,4,5,6]

        const evens = items.filter((num)=> num % 2 === 0);
        const multiple = evens.map((num) => num * 4);
        const sum = multiple.reduce((a,b)=> a+b,0);

        console.log(sum); // 48
    }

     // case 8 more good code
    {
        const items = [1,2,3,4,5,6]

        const result = items
        .filter((num)=> num % 2 === 0)
        .map((num) => num * 4)
        .reduce((a,b)=> a+b,0)

        console.log(result); // 48
    }


    // πππ Async . Await πππ

    // promise -> Async / await

    // case 1 -> Bad Code
{
    function displayUser(){
        fetchUser()
        .then((user)=>{
            fetchProfile(user)
            .then((profile) =>{
                updateUI(user, profile);
            })
        })
    }
}

// case 2 -> good Code
{
    async function displayUser(){
        const user = await fetchUser();
        const profile = await fetchProfile(user);
        updateUI(user, profile);
    }
}
console.clear();
// πππ Async . Await πππ

{
    const array = ['πΆ', 'π±', 'π', 'πΆ', 'π', 'π±',]
    console.log([...new Set(array)]);

    // Set λ©μλκ° λ¨Όμ  μ€νλμ΄ μ€λ³΅λλ μμλ€μ μ κ±°ν¨
    // μ κ° μ°μ°μλ‘ μΈνμ¬ μμλ€μ΄ μ κ±°λ λ°°μ΄λ€μ΄ λ§λ€μ΄μ§
    
}