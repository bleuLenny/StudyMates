const database = [
    {
        id: 0,
        name: "Alex",
        email: "aamog@my.bcit.ca",
        password: "123!",
        role: "admin",
        profile_img: "",
        profile_img_des: ""
      },
    {
      id: 1,
      name: "cindy",
      email: "jimmy123@gmail.com",
      password: "123!",
      role: "admin",
      profile_img: "",
      profile_img_des: ""
    },
    {
      id: 2,
      name: "Johnny Doe",
      email: "johnny123@gmail.com",
      password: "johnny123!",
      role: "user",
      profile_img: "",
      profile_img_des:""
    },
    {
      id: 3,
      name: "Jonathan Chen",
      email: "jonathan123@gmail.com",
      password: "jonathan123!",
      role: "user",
      profile_img: "",
      profile_img_des: ""
    },
    {
      id: 4,
      name: "admin",
      email: "admin@gmail.com",
      password: "123",
      role: "admin",
      profile_img: "",
      profile_img_des: ""
    },
  ];
  
  const userModel = {
    findOne: (email) => {
      const user = database.find((user) => user.email === email);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with email: ${email}`);
    },
    findById: (id) => {
      const user = database.find((user) => user.id === id);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with id: ${id}`);
    }
  };
  
  module.exports = { database, userModel };