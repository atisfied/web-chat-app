function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("Username",user_name);
    window.location = "kwitter_room.html";
}