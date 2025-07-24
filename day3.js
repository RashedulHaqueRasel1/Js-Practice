// ✅ প্রশ্ন ১ (forEach):
// 🔸 একটি অ্যারে রয়েছে:
// [10, 20, 30, 40]

// 🔸 প্রতিটি উপাদানকে 2 দিয়ে গুণ করে console.log() করো।


// const numbers = [10, 20, 30, 40];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i]
//     const into = number * 2
//     console.log(into)
// }

// numbers.forEach((number)=>{
//     const into = number * 2
//     console.log(into)

// })




// ✅ প্রশ্ন ২ (map):
// 🔸 একটি অ্যারে রয়েছে:
// [5, 10, 15]

// 🔸 প্রতিটি সংখ্যাকে দ্বিগুণ করে নতুন একটি অ্যারে তৈরি করো এবং সেটা console.log() করো।


// const numbers = [5, 10, 15]

// const result = numbers.map((number) => {
//     // console.log(number)
//     return number * 2

// })

// console.log(result)




// ✅ প্রশ্ন ৩ (filter):
// 🔸 একটি অ্যারে রয়েছে:
// [1, 2, 3, 4, 5, 6, 7, 8]

// 🔸 এই অ্যারে থেকে শুধু জোড় সংখ্যা (even numbers) গুলো বের করে নতুন একটি অ্যারে রিটার্ন করো।


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let i = 0; i <= numbers.length; i++) {

//     const number = numbers[i]

//     if (number % 2 === 0) {
//         console.log(number)
//     } 
// }


// const result = numbers.filter((item) => {
//   return item % 2 === 0
// });

// console.log(result)




// // ✅ প্রশ্ন ৪ (find):
// 🔸 একটি অ্যারে রয়েছে:
// [100, 200, 300, 400]

// 🔸 এই অ্যারে থেকে প্রথম যে সংখ্যা 250 এর চেয়ে বড়, সেটি খুঁজে বের করো এবং console.log() করো।

// const numbers = [100, 200, 300, 400]

// const result = numbers.find((number)=>{

//         return number >= 250
// })
// console.log(result)




// ✅ প্রশ্ন ৫ (reduce):
// 🔸 একটি অ্যারে রয়েছে:
// [1, 2, 3, 4, 5]

// 🔸 এই অ্যারের সব সংখ্যার যোগফল বের করো reduce() ব্যবহার করে।

// const numbers = [1, 2]

// const result = numbers.reduce((number, x) => {
//     return number + x
// })
// console.log(result)




// স্টুডেন্টের নাম console.log() করো

// বয়স console.log() করো

// ডিপার্টমেন্ট console.log() করো

// const student = {
//   name: "Rashedul",
//   age: 22,
//   department: "Accounting"
// };

// console.log(student.name)
// console.log(student.age)
// console.log(student.department)







// 🔸 এই অবজেক্টের সব key এবং value console.log() করো এই ফরম্যাটে:

// name: Rasel  
// age: 23  
// city: Dhaka

// const person = {
//   name: "Rasel",
//   age: 23,
//   city: "Dhaka"
// };

// console.log(`name: ${person.name}`)
// console.log(`age: ${person.age}`)
// console.log(`city: ${person.city}`)



// ✅ প্রশ্ন ৩:
// 🔸 একটি ফাংশন লেখো, যেটা একটি object ইনপুট হিসেবে নেবে,
// 🔸 এবং সেটার যেসব value সংখ্যা (number), সেগুলোর যোগফল রিটার্ন করবে।

// 👉 Example Input:
// const data = {
//     a: 10,
//     b: 20,
//     c: "hello",
//     d: 5
// }
// // 👉 Expected Output:
// // 35

// function result(data) {
//   let total = 0;

//   for (let key in data) {
//     const value = data[key];

//     if (typeof value === 'number') {
//       total += value;
//     }
//   }

//   return total;
// }

// result()

// console.log(result(data));



// তোমার কাজ:
// একটা ফাংশন লেখো যেটা data অ্যারে এবং একটি passion string ইনপুট নিবে,
// আর সেই passion অনুযায়ী matching অবজেক্টগুলো নিয়ে একটা নতুন অ্যারে রিটার্ন করবে।

// const data = [
//     { name: "Rasel", age: 21, passion: "student" },
//     { name: "Asif", age: 24, passion: "farmar" },
//     { name: "Robi", age: 12, passion: "student" },
//     { name: "Manik", age: 84, passion: "Army" },
// ]

// function filterByPassion(arr, passion) {
//     const result = arr.filter((item)=> item.passion === passion)
//     return result
// }

// const outPut = filterByPassion(data, "student")

// console.log(outPut)



// ✅ পরবর্তী প্রশ্ন:
// 🔸 তোমার কাছে একটা অ্যারে অব অবজেক্ট আছে, যেখানে প্রত্যেকটা অবজেক্টে নাম, বয়স, এবং passion আছে।

// 🔸 এখন তোমার কাজ:

// একটা ফাংশন লিখো, যেটা data এবং minAge (নুন্যতম বয়স) ইনপুট নিবে,
// এবং এমন সব অবজেক্টের একটি নতুন অ্যারে রিটার্ন করবে যাদের বয়স minAge এর চেয়ে বেশি বা সমান।

// const data = [
//     { name: "Rasel", age: 21, passion: "student" },
//     { name: "Asif", age: 24, passion: "farmar" },
//     { name: "Robi", age: 12, passion: "student" },
//     { name: "Manik", age: 84, passion: "Army" },
// ]


// function filterByMinAge(arr, age) {
//     // console.log(arr)
//     const result = arr.filter((item) => item.age >= age)

//     return result
// }

// const outPut = filterByMinAge(data, 21)
// console.log(outPut)




// এমন একটি ফাংশন বানাও যেটা শুধু সেইসব অবজেক্ট রিটার্ন করবে যাদের name এর দৈর্ঘ্য (length) 4 এর বেশি।

// const data = [
//     { name: "Rasel", age: 21, passion: "student" },
//     { name: "Asif", age: 24, passion: "farmar" },
//     { name: "Robi", age: 12, passion: "student" },
//     { name: "Manik", age: 84, passion: "Army" },
// ]


// function nameLength(arr) {
//      const result = arr.filter((item)=> item.name.length > 4)
//      return result
// }

// const outPut = nameLength(data)
// console.log(outPut)




// ✅ প্রশ্ন:
// তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা data অ্যারেটা থেকে শুধু নামগুলো বের করে দিবে (name এর মানগুলো)।

// const data = [
//     { name: "Rasel", age: 21, passion: "student" },
//     { name: "Asif", age: 24, passion: "farmar" },
//     { name: "Robi", age: 12, passion: "student" },
//     { name: "Manik", age: 84, passion: "Army" },
// ];

// function dataName(arr) {
//     const result = arr.map((item)=> item.name )
//     return result
// }

// const outPut = dataName(data)
// console.log(outPut)




//  Question:
// তোমাকে একটি অ্যারে দেওয়া হলো যেখানে বিভিন্ন ইউজারের তথ্য আছে।
// তুমি এমন একটি ফাংশন লিখবে যেটা ১৮ বছরের বেশি বয়সীদের (adult) সম্পূর্ণ অবজেক্ট সহ রিটার্ন করবে।

// const users = [
//     { name: "Rasel", age: 21 },
//     { name: "Asif", age: 17 },
//     { name: "Robi", age: 25 },
//     { name: "Manik", age: 15 }
// ];


// function getAdults(arr) {
//     const adults = arr.filter((item)=> item.age >= 18 )
//     return adults
// }

// const outPut = getAdults(users)
// console.log(outPut)



// const numbers = [5, 10, 15, 20];

// const result = numbers.reduce((arr, number)=> arr + number,0 )
// console.log(result)