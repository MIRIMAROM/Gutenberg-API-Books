const request=require('request')

const requestApi = new Promise((resolve, reject) => {
        let options = {
            method: "GET",
            url: `http://gutendex.com/books.json`
        }
        request(options, function (err, res, body) {
            if (err) {
                reject(err)
            }
            else
             resolve(body)
        }); 
    }) 
let getAllBooks= (req, res) => {
        requestApi.then((message)=>{
            //console.log(message)
            res.json(message);
         }).catch((message)=>{
             console.log(message);
         })     
      };
module.exports = {getAllBooks};