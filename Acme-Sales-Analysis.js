const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
  
  const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
  ];
  
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 3,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];
  
  function productsPurchased(orders, products) {
    const arrayOfProducts = [];
  
    for(let i = 0; i < orders.length; i++) {
      let foundProduct = products.find((item) => {
        return orders[i].productId === item.id;
      })
      arrayOfProducts.push(foundProduct);
    }
    return arrayOfProducts
    .reduce((acc, item) => {
      if (acc.indexOf(item) < 0) {
        acc.push(item);
      }
      return acc;
    }, []);
  }
  
  function topSellingProductsByQuantity(orders, products) {
    const arrayOfProductInfo = [];
  
    for(let i = 0; i < orders.length; i++) {
      let foundProduct = products.find((item) => {
        return orders[i].productId === item.id;
      });
  
      let productStored = arrayOfProductInfo.find((item) => {
        return item.id === foundProduct.id;
      })
  
      if (productStored) {
        productStored.quantity += orders[i].quantity;
      }
      else {
        productStored = foundProduct;
        productStored.quantity = orders[i].quantity;
        arrayOfProductInfo.push(productStored);
      }
    }
    return arrayOfProductInfo.sort((a, b) => {
      return b.quantity - a.quantity;
    })[0];
  }
  
  function usersWithOrders(users, orders) {
    const arrayOfUsersWithOrders = [];
  
    for(let i = 0; i < orders.length; i++) {
      let foundUser = users.find((user) => {
        return user.id === orders[i].userId;
      })
  
      let userExists = arrayOfUsersWithOrders.find((user) => {
        return user.id === foundUser.id;
      })
  
      if(!userExists) {
        arrayOfUsersWithOrders.push(foundUser);
      }
    }
    return arrayOfUsersWithOrders;
  }
 