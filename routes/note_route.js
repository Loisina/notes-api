import { Router } from "express";
import { getNote, getNotes, getTitle, postNotes } from "../controllers/note_controller.js";


// Create product router

const noteRouter = Router();

// define routes



noteRouter.get ('/notesTitle', getTitle);

noteRouter.get ('/allnotes', getNotes);

noteRouter.post ('/notes', postNotes);

noteRouter.get ("/getNote/:id" , getNote)

// export router

export default noteRouter;