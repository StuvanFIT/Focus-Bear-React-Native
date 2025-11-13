function getUserStatus(user){
    if (!user) return "Unknown Status";

    const ageRange = user.age >=18 ? "Adult" : "Minor"
    const activity = user.isActive ? "Active" : "Inactive"

    return `${activity} ${ageRange}`;
}