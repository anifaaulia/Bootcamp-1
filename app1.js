const readline = require("readline");

const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = (ask) => {
  return new Promise((resolve) => {
    rl.question(ask, (inputvar) => {
      resolve(inputvar);
    });
  });
};

const main = async () => {
  const name = await questions("What is your name?");
  const email = await questions("What is your email?");
  const phone = await questions("What is your phone?");
  const contact = { name, email, phone };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Terima kasih sudah memasukkan data!");

  rl.close();
};

main();
//memberi pertanyaan
// rl.question("What is your name? ", (name) =>
//   rl.question("What is your email? ", (email) =>
//     rl.question("What is your phone? ", (phone) =>
//       rl.question("What is your address? ", (add) => {
//         //menjelaskan pertanyaan serta jawaban//
//         console.log(`Your name : ${name}`);
//         console.log(`Your email : ${email}`);
//         console.log(`Your email : ${phone}`);
//         console.log(`Your address : ${add}`);
//         console.log(`Thank you for Coming ${name}!`);

//         //menutup program
//         rl.close();
//       })
//     )
//   )
// );
