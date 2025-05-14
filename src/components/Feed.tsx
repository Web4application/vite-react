import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

interface Image {
  id: string;
  userId: string;
  imageUrl: string;
}

const Feed = () => {
  const [images, setImages] = useState<Image[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, "images"), orderBy("timestamp", "desc"), limit(10));
      const querySnapshot = await getDocs(q);
      const imagesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Image[];

      setImages(imagesList);
    };

    fetchImages();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Feed</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img src={image.imageUrl} alt="User Image" className="w-full h-64 object-cover rounded" />
            {user?.uid === image.userId && (
              <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                Your Image
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
