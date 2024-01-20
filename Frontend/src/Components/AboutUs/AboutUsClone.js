import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import firebase from "../../Firebase/firebase";

function AboutUs() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  const staffCollection = firebase.firestore().collection("staff");
  staffCollection.get().catch((err) => console.log(err));

  function getStaff() {
    setLoading(true);
    staffCollection.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      console.log(items);
      setStaff(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getStaff();
    console.log("useEffect getStaff");
    console.log(staff);
  }, []);

  return (
    <div className="AboutUs" id="aboutPage_sec">
        
    </div>
  );

}