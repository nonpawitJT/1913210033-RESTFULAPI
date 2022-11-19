const user = {
    name: "Nonpawit",
    nickname: "Tan",
    hobby: "Playing Video Games",
    address: {
        province: "Krabi",
        postcode: 81000
    }
}

const getSentence = ({ nickname, hobby, address: { postcode } }) => {
    return `My nickname is ${nickname}, My hobby is ${hobby} 
and my postcode is ${postcode}`
};
console.log(getSentence(user));