
export const fetchUsers = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/users");
    return res.json();
  };