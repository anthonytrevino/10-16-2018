
const ORDERS_URL ="http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

let searchOrderDisplay = document.getElementById("searchOrderDisplay")

function displayAllOrders(orders) {
  console.log(orders)
    orders = Object.keys(orders).map(function(key){
      return (orders[key])

    })
    console.log(orders)
    let orderViews = orders.map(function(order){
      console.log(order)
    return `
    <li>
    <label>${order.emailAddress}</label>
    <label>${order._id}</label>
    <label>${order.coffee}</label>
    <label>${order.strength}</label>
    <label>${order.flavor}</label>
    <label>${order.size}</label>
    </li>

    `

  })
console.log(orderViews)
}



function getAllOrders() {
  $.get(ORDERS_URL,function(data){
    // Object.keys(data).map(function(key){
    //   console.log(data[key])
      displayAllOrders(data)
    })





}




getAllOrders()









function createNewOrder() {
  // ask for user input

}
