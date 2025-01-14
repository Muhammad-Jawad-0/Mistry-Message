import { z } from "zod";

export const usernameValidation = z
.string()
.min(5, "username must be atleast 5 characters")
.max(20, "username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character")