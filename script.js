var firebaseConfig = {
  apiKey: "AIzaSyC6sNFttm5XFfR2IoK-SdLSF2W2IbGo72I",
  authDomain: "olx-clone-ea.firebaseapp.com",
  databaseURL: "https://olx-clone-ea-default-rtdb.firebaseio.com",
  projectId: "olx-clone-ea",
  storageBucket: "olx-clone-ea.appspot.com",
  messagingSenderId: "987191221640",
  appId: "1:987191221640:web:876953759fc99b5b31ae3d",
};

var data = {
  "Ezan": {
    thumb:
      "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
    price: "50,000",
    title: "Microsoft Surface Pro",
    desc:
      "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ",
    location: "Karachi, Sindh",
    date: "11/03/2021",
    category: "Laptops",
  },
  "United CD70": {
    thumb:
      "https://apollo-singapore.akamaized.net/v1/files/f1kama9ycz003-PK/image;s=300x600;q=60",
    price: "50,000",
    title: "United CD70",
    desc:
      "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ",
    location: "Karachi, Sindh",
    date: "11/03/2021",
    category: "Motorcycles",
  },
  "NEW": {
    thumb:
      "https://apollo-singapore.akamaized.net/v1/files/f1kama9ycz003-PK/image;s=300x600;q=60",
    price: "50,000",
    title: "United CD70",
    desc:
      "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ",
    location: "Karachi, Sindh",
    date: "11/03/2021",
    category: "Motorcycles",
  },
};


firebase.initializeApp(firebaseConfig)

var database = firebase.database();


console.log(data);



database.ref().set({
  ads : data
})

var commingData;

database.ref().child('/ads').get().then(function(ad) {
  if (ad.exists()) {
    commingData = ad.val()
    console.log("COMMING DATA : ");
    console.log(commingData.ads);

    let new_data = {
      ads : commingData
    }
    
    console.log("NEW DATA : ");
    console.log(new_data.ads);

  }
  else {
    console.log("No data available");
  }
})

