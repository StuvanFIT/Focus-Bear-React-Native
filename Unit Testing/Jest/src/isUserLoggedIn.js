function isUserLoggedIn(userId) {
  if (!userId) return false;
  return typeof userId === "string" && userId.trim().length > 0;
}

module.exports = isUserLoggedIn;
