import JoiBase from "joi"

const profileValidation = JoiBase.object({
  username: JoiBase.string().messages({
    "string.empty": `Username cannot be an empty field`,
  }),
  needhelpwith: JoiBase.string().messages({
    "string.empty": `I need help with cannot be an empty field`,
  }),
  twitterhandle: JoiBase.string().messages({
    "string.empty": `Twitter Handle cannot be an empty field`,
  }),
  location: JoiBase.string().messages({
    "string.empty": `Location cannot be an empty field`,
  }),
  askmeabout: JoiBase.string().max(60).required().messages({
    "string.empty": `Ask me about cannot be an empty field`,
    "string.max": `Ask me about should be character limit with 60`,
  }),
  bio: JoiBase.string().max(160).required().messages({
    "string.empty": `Bio cannot be an empty field`,
    "string.max": `Bio should be character limit 160`,
  }),
})

export { profileValidation }
