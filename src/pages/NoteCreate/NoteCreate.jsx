// import NoteForm from "components/NoteForm/NoteForm";

import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/note/notes-slice";

export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [formErrors,setFormErrors] = useState({title:})
  const submit = async (formValues) => {
    const createNote = await NoteAPI.create({
      ...formValues,
      createdAt: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createNote));
    alert("The note has been");
    navigate("/");
  };
  return (
    <>
      <NoteForm title="New Note" onSubmit={submit} />
    </>
  );
}
