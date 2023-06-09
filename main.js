// const request = new XMLHttpRequest()
// request.open('GET', 'peoples.json')
// request.setRequestHeader("Content-type", "application/json")
// request.send()
// request.addEventListener('load', () => {
//   const data = JSON.parse(request.response)
//   data.map(person => {
//     const div = document.createElement('div')
//     div.setAttribute('class', 'user')
//     div.innerHTML = `
//       <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
//       <h2>Name:${person.name}</h2>
//       <span>Age:${person.age}</span>
//     `
//     document.querySelector('.wrapper').append(div)
//   })
// })


const getData = async () => {
  const response = await fetch('peoples.json', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify()
  })
  const data = await response.json()
  console.log(data)

  data.map(person => {
    const div = document.createElement('div')
    div.setAttribute('class', 'user')
    div.innerHTML = `
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
      <h2>Name:${person.name}</h2>
      <span>Age:${person.age}</span>
    `
    document.querySelector('.wrapper').append(div)
  })
}
getData()
  