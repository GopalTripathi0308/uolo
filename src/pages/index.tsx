// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "@/shared/components/userCard";
import Pagination from "@/shared/components/pagination";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsersData(currentPage);
  }, [currentPage]);

  const fetchUsersData = async (pageNumber: number) => {
    const url = `https://reqres.in/api/users?page=${pageNumber}&per_page=6`;
    try {
      const response = await axios.get(url);
      const { data } = response;
      setUserData(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  const handleDeleteUser = (id: number) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {userData.map((user) => (
          <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
        ))}
      </div>
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
