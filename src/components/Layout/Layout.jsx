/* eslint-disable react-hooks/exhaustive-deps */
import { NoteAPI } from "api/note-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/note/notes-slice";
// import { setNoteList } from "store/notes-slice";

export function Layout() {
  const dispatch = useDispatch();

  async function fetchNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
