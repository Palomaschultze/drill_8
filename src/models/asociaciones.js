import User from "./user.model.js"
import Bootcamp from "./bootcamp.model.js";

//relación muchuchos a muchos (N:M) 

User.belongsToMany(Bootcamp, {
    as: "bootcamps",
    through: "userBootcamp"
});

Bootcamp.belongsToMany(User, {
    as: "users",
    through: "userBootcamp"
});