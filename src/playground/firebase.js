// My source for everything firebase-related I learned in this course

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val()); // Will display only the child, not the array
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }); // This will create an array--redux requires an array to integrate firebase with our app

// const onValueChange = database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(child => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });
//   console.log(expenses);
// }); // 'On' method will set up a subscription to inform us when data changes

// database.ref('expenses').push({
//     description: 'groceries',
//     note: 'turkey hash',
//     amount: 4244,
//     createdAt: 300
// });

//database.ref('notes/-LH5GxUkjr4lEq1xQIvI').remove();

// database.ref('notes').push({
//     title: 'To do',
//     body: 'tester'
// });  // 'Push' will automatically generate an ID for us

// database.ref().set({
//     name: 'Andrew',
//     job: {
//         title: 'Software Developer',
//         company: 'Amazon'
//     }
// });

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//     }, (e) => {
//         console.log("error:", e);
//     });

// setTimeout(() => {
//     database.ref().update({
//         name: 'Lindsey',
//         'job/title': 'Student of Web Development',
//         'job/company': 'AnywhereAway'
//     });
// }, 4500);

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }, (e) => {
//         console.log('Error:', e);
//     }); // We don't use promises here, because we want this code to run over and over

// setTimeout(() => {
//     database.ref('age')
//     .set(37);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age')
//     .set(38);
// }, 10500);

// database.ref('location/state')
//     .once('value') // Use 'once' to fetch the data a single time
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

// // Reference to the root of our database
// database.ref().set({
//     name: 'Lindsey Bowen',
//     age: 38,
//     stressLevel: 6,
//     job: {
//         title: 'Developer Wannabe',
//         company: 'Learning2Code'
//     },
//     hobbies: ['running', 'coding', 'traveling', 'lifting'],
//     location: {
//         city: 'Gilbert',
//         state: 'Arizona',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref('attributes').set({
//         height: 66,
//         weight: 117
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     attributes: null
// });
//database.ref('age').set(null); // This is equivalent to remove, but we will use remove since it is more explicit

// database.ref()
//     .remove('age')
//     .then(() => {
//         console.log('Age has been removed!');
//     }).catch((e) => {
//         console.log('Whoops! Here is your error:', e);
//     });
