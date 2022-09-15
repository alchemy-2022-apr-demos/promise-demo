fetch('https://dog-api.kinduff.com/api/facts?raw=true')
  .then(res => console.log(res.body))