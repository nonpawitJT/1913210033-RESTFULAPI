const users = [
    { name: "Nonpawit",nickname: "Tan",hobby: "Playing Video Games",address: {province: "Krabi",postcode: 81000}},
    { name: "Nonny",nickname: "Too",hobby: "Sleep",address: {province: "Bangkok",postcode: 10250}},
    { name: "Nonmailap",nickname: "Toy",hobby: "Eatting food",address: {province: "Chiang Mai",postcode: 50000}},
    ];
for(const u of users){
    console.log(`
    “My nickname is ${u.nickname}, My hobby is ${u.hobby}
    and my postcode is ${u.address.postcode}”
    `)
}   