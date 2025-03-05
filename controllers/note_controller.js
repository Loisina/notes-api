import { Note } from "../models/note_model.js";

// export const getNotes = (req, res) => {
//   res.status(200).json({'notes': 'all notes'})
// }

export const postNotes = async(req, res) => {
  const note = new Note(req.body)
  const newNote = await note.save()
  
  res.status(200).json({"notes": newNote});
}

export const getTitle = (req, res) => {
  res.send('Title given!');
}

export const getNotes = async(req, res) => {
  
  const allNotes = await Note.find({})
  
  res.status(200).json({"notes": allNotes});
}

export const getNote = async(req, res) => {
  
  const noteId = await Note.findById(req.params.id).exec();
  res.status(200).json({"notes": noteId});

}