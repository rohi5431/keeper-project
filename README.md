## 🌐 Link to Live Site
https://venerable-sable-10fb8a.netlify.app

## 📌 Features

- 🗒️ Create new notes with title & content
- 📌 Notes are displayed at random non-overlapping positions
- ❌ Easily delete notes with confirmation
- 🌈 Responsive layout (single column on smaller screens)
- 🧭 Fixed navigation bar and footer
- 🚫 Horizontal scroll prevention for cleaner UX

## 🛠️ Tech Stack

| Technology                | Purpose              |
|---------------------------|---------------------|
| React                     | Core framework      |
| Tailwind CSS / CSS Modules| Styling and layout  |
| JavaScript                | Application logic   |
| Netlify / Vercel          | Deployment platform |

## 🧠 How It Works

- When a new note is created, it’s assigned a random screen position by the `getRandomPosition()` function, which ensures that it doesn't overlap with existing notes using bounding box checks.
- The `useEffect()` hook is used to disable horizontal scrolling, improving the overall user experience, especially on smaller screens.
- All notes are managed through React’s `useState`.
- A user can delete a note — a message will pop up asking for confirmation before the note is removed.

## ⚠️ Problems Faced & Solutions

1. **Overlapping Notes**
    - Problem: Random note positions caused visual overlap.
    - Solution: Using `getRandomPosition()` to prevent notes from overlapping by checking each new note’s position against existing notes and retrying until it doesn’t collide or a maximum number of tries is reached.
2. **Overflow / Scroll Issues**
    - Problem: Horizontal scroll appeared on small screens.
    - Solution: `useEffect` used to force `overflowX: hidden` on body.
3. **Responsiveness**
    - Problem: Sticky notes overflowed on smaller screens.
    - Solution: Tailwind CSS and conditional layout to center all notes under 768px width.

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Form.jsx
│   └── Notes.jsx
├── App.jsx
├── App.css
└── main.jsx 

📌 How to Run Locally
. npm install
. npm run dev

💡 Future Improvements
  . 💾 Save notes to localStorage or a backend
  . ✏️ Add edit/update functionality
  . 🖱️ Drag-and-drop for note repositioning
  . 🌙 Dark mode toggle

👨‍💻 Author
  Rohit Kumar
