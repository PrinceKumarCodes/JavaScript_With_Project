try {
  const res = prompt("Are you a robot: ");
  if (res === "Y") {
    throw new Error("You are a robot!");
    // throw {// Custom error object
    //   name: "RobotError",
    //   message: "You are a robot!",
    // };
  }
} catch (err) {
  console.log("Error name :", err.name);
  console.log("Error message :", err.message);
}
