"use client";

import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data.data
};

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  console.log(users);

  return (
    <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium">User List</h2>
      {users?.map((user) => (
        <div key={user.id} className="lg:w-lg bg-gray-200 px-10 py-5 rounded-xl hover:shadow-2xl hover:scale-101 transition-all duration-400">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
