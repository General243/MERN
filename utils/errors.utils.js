module.exports.signUpErrors = (err) => {
  let errors = { nom: "", prenom: "", email: "", password: "", tel: "" };

  if (err.message.includes("nom")) errors.nom = "Nom incorrect";

  if (err.message.includes("prenom")) errors.prenom = "Prenom incorrect";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  if (err.errors && err.errors.tel) {
    errors.tel = "Ce numéro de téléphone est déjà pris";
  } else if (
    err.code === 11000 &&
    Object.keys(err.keyValue)[0].includes("tel")
  ) {
    errors.tel = "Ce numéro de téléphone est déjà pris";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};
