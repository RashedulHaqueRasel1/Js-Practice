
// কীভাবে একটা ভেরিয়েবল ডিক্লেয়ার করা হয়?

// const name = "Rasel"
// const age = 21 
// const profession = "student"

// console.log(name)
// console.log(age)
// console.log(profession)


// প্রশ্ন ৩: JavaScript এ কীভাবে একটি ফাংশন ডিক্লেয়ার করা হয়?

// function hello(){
//     console.log("hello programer!")
// }

// hello()


//  JavaScript এ অ্যারে কী?

// const friends = ["faruk", "Rifath", "Sagor", "naime"]
// console.log(friends)


// লুপ কীভাবে ব্যবহার করবেন?

// for(let i = 0; i >= -10; i--){
//     console.log(i)
// }


// প্রশ্ন ৭: কীভাবে একটা অবজেক্ট থেকে প্রপার্টি অ্যাক্সেস করবেন?

// const friends = {name: "Rasel", age: 21}
// console.log(friends.name)


// প্রশ্ন ৮: JavaScript এ null এবং undefined এর মধ্যে পার্থক্য কী?

//1. undefined হলো কোনো ভেরিয়েবল ডিক্লেয়ার হয়েছে কিন্তু মান নেই।
//2. null হলো স্পষ্টভাবে “মান নেই” সেট করা হয়েছে।


// প্রশ্ন ১০: JavaScript এ Arrow Function কী?

// const hello = ()=>{
//     console.log("this is hello !")
// }
// hello()


// প্রশ্ন ১: দুইটি সংখ্যা যোগফল বের করার কোড লিখো।

// let num1 = 10;
// let num2 = 5;

// const sum = num1 + num2 ;
// console.log(sum)


// প্রশ্ন: উপরের দুই সংখ্যার বিয়োগফল বের করার কোড লেখো।

// let num1 = 20;
// let num2 = 7;
// const total = num1 - num2 ;
// console.log(total)



// প্রশ্ন: একটি ফাংশন লেখো যেটা উপরের দুই সংখ্যার যোগফল রিটার্ন করে, এবং `console.log()` দিয়ে রেজাল্ট দেখাও।

// let a = 4;
// let b = 6;

// function sum(){
//     return console.log(a+b)
// }

// sum()

// function sum(){
//     return a + b 
// }

// console.log(sum())


// প্রশ্ন: ১ থেকে ৫ পর্যন্ত সংখ্যা প্রিন্ট করার জন্য `for` লুপ লেখো।

// for(let i = 1 ; i <= 5; i ++){
//     console.log(i)
// }



// প্রশ্ন:  অ্যারেটির সব সংখ্যার যোগফল বের করার কোড লেখো। *

// let numbers = [10, 20, 30, 40];

// let total = 0

// for(let i = 0; i <numbers.length ; i++){
//     total = total + numbers[i]
// }

// console.log(total)



// প্রশ্ন: name ভেরিয়েবলের মধ্যে কতটি অক্ষর (character) আছে তা বের করো। *

// let name = "Rasel";
// console.log(name.length)


// প্রশ্ন: একটি ফাংশন লেখো যেটা একটি নাম (name) প্যারামিটার হিসেবে নেবে এবং কনসোলে "Hello, <name>" প্রিন্ট করবে।

// উদাহরণ: যদি name হয় "Rasel", আউটপুট হবে: Hello, Rasel


// function test(name){
//     console.log(`Hello ${name}`)
// }
// test("Rasel")


// প্রশ্ন: fruits অ্যারের সব আইটেম console.log() দিয়ে প্রিন্ট করো use for loop ।

// let fruits = ["apple", "banana", "mango"];

// for(let i = 0; i < fruits.length; i ++){
//   console.log(fruits[i])
// }


// প্রশ্ন: num সংখ্যাটি জোড় (even) না বিজোড় (odd) তা চেক করে console.log() দিয়ে ফলাফল দেখাও।

// let num = 70;

// if(num % 2 === 0){
//  console.log("even")
// }else{
//     console.log("odd")
// }


// প্রশ্ন: একটি ফাংশন লেখো যেটা একটি সংখ্যার বর্গফল (square) রিটার্ন করবে।

// উদাহরণ: যদি ইনপুট হয় ৬, আউটপুট হবে ৩৬।

// function double(i){
//     return  i*i
// }

// console.log(double(7))


// // প্রশ্ন: while লুপ ব্যবহার করে ১ থেকে ৫ পর্যন্ত সংখ্যা প্রিন্ট করো।

// let i = 1;

// while (i <= 5) {
//     console.log(i)
//     i++
// }


// প্রশ্ন: একটি ফাংশন লেখো যেটা ১ থেকে N (N ইনপুট হিসেবে নেবে) পর্যন্ত সব জোড় সংখ্যার (even numbers) সংখ্যা গুণবে এবং রিটার্ন করবে।

// উদাহরণ: যদি N = 10 হয়, তাহলে ২, ৪, ৬, ৮, ১০ আছে মোট ৫ টা জোড় সংখ্যা। তাই ফাংশন রিটার্ন করবে ৫।

 

function countEvenNumbers(N) {

    let count = 0;
    for (let i = 1; i <= N; i++) {
         if(i % 2 === 0){
            console.log()
         }
    }
}

countEvenNumbers(10)