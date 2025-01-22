function Recap() {
    // code JavaScript
    const obj = {
        firstName: 'Tony',
        lastName: 'Bowl'
    }

    obj.address = 'BKK'
    const obj2 = {
        street: '1234',
        zipcode: '5678'
    }

    const mergeObj = { ...obj, ...obj2 }
    console.log(mergeObj)


    const arr = ['June', 'July']
    arr[2] = 'BKK'
    const arr2 = ['1234', '5678']
    const mergeArr = [...arr, ...arr2]
    console.log(mergeArr)

    const products = [
        { id: 1, title: 'ASUS', price: 40000 },
        { id: 2, title: 'MSI', price: 59000 },
    ];

    console.log(products[1].title);
    const newProduct = { id: 3, title: "Lenovo", price: 20000 };

    const mergeProduct = [...products,newProduct]
    console.log(mergeProduct);


    return <div>Easy, Zustand</div>;


}

export default Recap;