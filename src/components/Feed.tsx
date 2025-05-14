import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 mb-4 rounded shadow">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
