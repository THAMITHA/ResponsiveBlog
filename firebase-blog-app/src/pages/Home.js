import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";

const Home = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);
  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you Sure you Wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log("blogs", blogs);

  return (
    <div>
      <div className="container-fluid pb-4 pt-4 padding">
        <div className="container padding">
          <div className="row mx-0">
            <h2>Trending</h2>
            <div className="col-md-8">
              <BlogSection
                blogs={blogs}
                user={user}
                handleDelete={handleDelete}
              />
            </div>
            <div className="col-md-3">
              <h2>Tags</h2>
              <h2>Most Popular</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
