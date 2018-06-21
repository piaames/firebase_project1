//upload.js
var fileButton = document.getElementById("fileButton");
var x = document.createElement("img");
fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref(file.name);
    storageRef.put(file).then(function(snapshot) {
        console.log('Uploaded a file!');
    });
    storageRef.put(file).snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);

        x.setAttribute('src', downloadURL);


    });
});
document.body.appendChild(x);
/*var mRef = firebase.storage().ref();
mRef.child('Products/gpu.jpg').getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
});*/

