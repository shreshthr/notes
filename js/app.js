


const saveBtn = document.querySelector('.save');

const notesTitle = document.querySelector('.notes_title');
const notesBody = document.querySelector('.notes_body');



window.onload = () => {
    getNotes(); 
}


// Get 
function getNotes() {
    // Back
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
    console.log(notes);

    // Front
    notesTitle.textContent = notes[0].updatedTitle;
    notesBody.textContent = notes[0].updatedBody;
}


// Save
function saveNotes() {
    // Back
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
    
    const noteToSave = {
        updatedTitle: notesTitle.value.trim(),
        updatedBody: notesBody.value.trim()
    }
    notes.pop();
    notes.push(noteToSave);
   
    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
}


// Events
saveBtn.addEventListener('click', () => {
    saveNotes();
})