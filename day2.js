// প্রশ্ন: দুটি সংখ্যা 7 এবং 5, এদের গুণফল রিটার্ন করে এমন একটি ফাংশন লেখো এবং console.log() দিয়ে আউটপুট দেখাও।

// let a = 7
// let b = 5

// function into(){
//     return a * b 
// }

// console.log(into())


// প্রশ্ন: একটি সংখ্যা ১২, এটি ৩ দ্বারা বিভাজ্য কি না তা চেক করো এবং ফলাফল console.log() করো।

// let a = 10
// let b = 3

// if (a % b === 0) {
//     console.log(`${a} is divisible by ${b}`)
// }else{
//     console.log(`${a} is Not divisible by ${b}`)
// }


// প্রশ্ন: একটি ফাংশন লেখো যেটা একটি সংখ্যা ইনপুট হিসেবে নিবে,
// এবং সেই সংখ্যাটি জোড় (even) না বিজোড় (odd) তা রিটার্ন করবে।


// function check(n) {
//     if (n % 2 === 0) {
//         console.log(`This is Even Number: ${n}`)
//     }else{
//         console.log(`This is Odd Number: ${n}`)
//     }
// }

// check(5)



// প্রশ্ন: একটি অ্যারে রয়েছে: [3, 6, 9, 12, 15]
// একটি ফাংশন লেখো যেটি এই অ্যারের সব সংখ্যা যোগ করে মোট যোগফল রিটার্ন করবে।


// const number = [3, 6, 9, 12, 15,20]

// let total = 0;

// for(let i = 0; i < number.length; i++){
//     total = total + number[i]
// }

// console.log(total)


// প্রশ্ন:  অ্যারের সংখ্যাগুলোর যোগফল বের করার জন্য একটি Arrow Function লেখো,
// যেটি array ইনপুট হিসেবে নিবে এবং যোগফল রিটার্ন করবে।

// const number = [3, 6, 9, 12, 15, 20]

// const total = (n) => {
//     let totalSum = 0;

//     for(let i = 0; i < n.length; i++){
//        totalSum += n[i]
//     }

//     return totalSum
// }

// console.log(total(number))



// প্রশ্ন: একটি ফাংশন লেখো যেটা একটি স্ট্রিং ইনপুট নিবে,
// এবং সেই স্ট্রিং-এ কতটি শব্দ আছে তা রিটার্ন করবে।
// ইনপুট: "I am learning JavaScript"
// আউটপুট: 4


// const totalWord = (s) => {
//     const word = s.split(" ")
//    return console.log(word.length)
// }

// totalWord("I am learning JavaScript")



// প্রশ্ন: একটি স্ট্রিং ইনপুট নাও: "I am learning JavaScript"
// এবং এই স্ট্রিং-এ মোট কয়টি অক্ষর (character) আছে তা রিটার্ন করো।
// (স্পেস বাদ দিয়ে শুধু অক্ষর গণনা করতে হবে।)
// Output: 21


// const totalWord = (s) => {

//   const letter = s.replace(/\s/g, "")
//   console.log(letter.length)

// }

//  totalWord("hi i am")



// প্রশ্ন: একটি ফাংশন লেখো যেটা একটি স্ট্রিং ইনপুট হিসেবে নেবে,
// এবং সেটিকে রিভার্স (উল্টো) করে রিটার্ন করবে।
// ইনপুট: "hello"
// আউটপুট: "olleh"



// const name = "Rashedul Haque Rasel"

// function totalWord(name) {

//     let revarsed = ""

//     for (let i = name.length - 1; i >= 0; i--) {
//         revarsed += name[i]
//     }

//     return console.log(revarsed)
// }

// totalWord(name)

// const name = "Rashedul Haque Rasel"

// function totalWord(namn){
//     const revarsed = name.split("").reverse().join("")
//     console.log(revarsed)
// }

// totalWord(name)


// ✅ প্রশ্ন ৪:
// 🔸 একটি স্ট্রিং-এ কয়টি vowel আছে তা বের করো (for loop ব্যবহার করে)?


// const name = "Rashedul Haque Rasel"

// const voiwel = "aeiouAEIOU"
// let count = 0

// for (let i = 0; i < name.length; i++) {
//     // console.log(name[i])
//     const word = name[i]

//     if (voiwel.includes(word)) {
//         count++
//     }
// }

// console.log(count)