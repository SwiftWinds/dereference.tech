const functions = require("firebase-functions");

const admin = require("firebase-admin");
const MonkeyLearn = require("monkeylearn");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendTexts = functions.firestore
  .document("questions/{userId}")
  .onCreate(async function(snapshot, context) {
    const ml = new MonkeyLearn("2978528d988a1e138652f9ce66b99b380fed5a1b");
    const modelId = "ex_YCya9nrn";
    const { title, body, bounty } = snapshot.data();
    const data = [body];
    const res = await ml.extractors.extract(modelId, data);
    let topics = res.body[0].extractions;
    topics.sort(function(a, b) {
      return b.relevance - a.relevance;
    });
    topics = topics.slice(0, 10);
    const usersRef = admin.firestore().collection("users");
    const queryRef = usersRef.where("topics", "array-contains-any", topics)
      .where("bounty", "<=", bounty);
    const users = await queryRef.get();
    const usersPhoneNums = users.docs.map(doc => doc.data().phoneNum);
    const message = `A new question, "${title}", that you might be an expert on
    has been posted for $${bounty}. Check it out!`;
    const promises = usersPhoneNums.map(phoneNum => {
      return client.messages.create({
        body: message,
        from: "+19705389873",
        to: phoneNum,
      });
    });
    await Promise.all(promises);
  });
