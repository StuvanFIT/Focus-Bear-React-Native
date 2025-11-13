function getUserStatus(user) {
    if (user !== null && user !== undefined){
        if (user.age >18){
            if (user.isActive) {
                return "Active Adult"
            } else {
                return "Inactive Adult"
            }
        } else {
            if (user.isActive) {
                return "Active Minor";
            } else {
                return "Inactive Minor";
            }
        }
    } else {
        return "Unknown Status"
    }
}