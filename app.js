// Problem : we eed a simple to look at github profile
// Solution: Use NodeJs to Connect to Github API to
//get profile info and  print out the  console

// TODO: Connect to Github API
let https =require('https')

const options = {
  hostname:'api.github.com',
  port:443,
  path: '/users/yofri',
  method: 'GET',
  headers: {
    'user-agent':'nodejs'
  }
}

let request = https.request(options,(result)=>{
  console.log('Got response: ', result.statusCode)
})

request.end()

request.on('eror',(e) => {
  console.eror(e)
})
// TODO: Read the data
// TODO: Parse the data
// TODO: Print the data out
