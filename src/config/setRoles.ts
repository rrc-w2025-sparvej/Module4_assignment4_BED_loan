import admin from "./firebase";

const setRoles = async () => {
  const adminUser = await admin.auth().getUserByEmail("admin@pixell-river.com");
  const analystUser = await admin.auth().getUserByEmail("analyst@pixell-river.com");

  await admin.auth().setCustomUserClaims(adminUser.uid, { role: "admin" });
  await admin.auth().setCustomUserClaims(analystUser.uid, { role: "analyst" });

  console.log("Roles assigned successfully");
};

setRoles();