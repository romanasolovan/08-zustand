import NoteForm from '@/components/NoteForm/NoteForm'
import css from './CreateNote.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Notehub Create Page",
  description: "Page that allows you to create new note",
  openGraph: {
    title: `Notehub Create Page`,
      description: "Page that allows you to create new note",
    //add my own link
    url: `https://08-zustand-three-nu.vercel.app/notes/action/create`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "og notehub",
      },
    ],
    type: "article",
  },
};

export default function CreatePage() {
  return (
    <main className = {css.main}> 
  <div className = {css.container}> 
    <h1 className = {css.title}>Create note</h1>
              <NoteForm />
          </div></main>
  )
}
