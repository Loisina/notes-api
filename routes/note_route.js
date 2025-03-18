import { Router } from "express";
import { getNote, getNotes, getTitle, postNotes } from "../controllers/note_controller.js";
import { loginUser, registerUser } from "../controllers/user-controller.js";


// Create product router

const noteRouter = Router();

// define routes



noteRouter.get ('/notes/title', getTitle);

noteRouter.get ('/notes', getNotes);

noteRouter.post ('/notes', postNotes);

noteRouter.get ("/notes/:id" , getNote);

noteRouter.post ('/users/signup', registerUser)

noteRouter.post ("/users/login", loginUser)

// export router

export default noteRouter;