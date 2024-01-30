console.clear();
// console.log(window)

const makeRequest = (method , url) =>{
    // console.log('get data')
    const xhr = new XMLHttpRequest();
    // console.log(xhr)

    xhr.open(method, url);
    xhr.onload=() =>{
        let data = xhr.response;
        // console.log(data);
        console.log(JSON.parse(data));
    }
    xhr.onerror = () => {
        console.log('error is here');
    }

    xhr.send();
}
const makeRequest1 = (method , url , data) =>{
    // console.log('get data')
    const xhr = new XMLHttpRequest();
    // console.log(xhr)

    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload=() =>{
        let data = xhr.response;
        // console.log(data);
        console.log(JSON.parse(data));
    }
    xhr.onerror = () => {
        console.log('error is here');
    }

    xhr.send(JSON.stringify(data));
}
const getData = () =>{
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
}

const sendData = () =>{
    makeRequest1('POST' , 'https://jsonplaceholder.typicode.com/posts' , {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
}
const updateData = () =>{
    makeRequest1('PUT' , 'https://jsonplaceholder.typicode.com/posts/1' , {
    id: 1,
    title: 'fooaa',
    body: 'bar',
    userId: 1,
      })
}
const updateSingleData = () =>{
    makeRequest1('PATCH' , 'https://jsonplaceholder.typicode.com/posts/1' , {
    title: 'update fooaa',
      })
}
const Delete = () =>{
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
}
getData();
sendData();
updateData();
updateSingleData();
// Delete();