const user = {
  id: "ghaghgahgah123545",
  loggedIn: true,
  information: {
    firstName: "Charlie",
    lastName: "Richardson",
    age: 30,
  },
  contact: {
    email: "charlie@charlie.com",
    address: {
      houseNumber: "12",
      nameOfRoad: "electric avenue",
      postcode: "pl7 9ns",
    },
  },
  userData: {
    likes: ["disco", "cycling"],
    dislikes: ["marmite", "cider"],
  },
};

// console.log(user.id);
// console.log(user.information.firstName);
// console.log(user.contact.address.postcode);
// console.log(user.userData.likes[1]);

const charliesDislikes = user.userData.dislikes.map(dislike => {
  const capitalized = dislike.toUpperCase();
  return dislike;
});

// console.log(charliesDislikes);

const companies = [
  { name: "Company One", industry: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", industry: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", industry: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", industry: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", industry: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", industry: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", industry: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", industry: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", industry: "Retail", start: 1981, end: 1989 },
];

// map over the array ^^^ make a new array which is just the names of the the companies

const companiesNames = companies.map(company => {
  // console.log(company);
  return company.name;
});

// console.log(companiesNames);

// filter -> through array -> pass condition
// new array of companies that are just in Technology

const techCompanies = companies.filter(company => {
  return company.industry === "Technology";
});

console.log(techCompanies);
