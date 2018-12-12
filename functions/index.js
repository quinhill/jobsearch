const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
})

exports.companyCreated = functions.firestore
  .document('companies/{companyId}')
  .onCreate(doc => {
    const company = doc.data();
    const notification = {
      content: 'Added a new company',
      user: `${company.name} ${company.culture}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})