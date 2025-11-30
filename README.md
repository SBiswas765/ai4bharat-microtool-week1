# Color Palette Picker — AI for Bharat Week 1 Micro-Tool

A simple, single-purpose website that extracts the top 5 colors from any uploaded image.  
Upload an image → get a clean palette → copy hex codes → export as a PNG.

Built as part of **AI for Bharat – Week 1: Micro-Tools**.

---

## 🚀 Features
- Upload or drag-and-drop an image  
- Extracts the 5 dominant colors  
- Copy hex codes with one click  
- Export palette as PNG  
- Runs completely in the browser (privacy friendly)  
- Fast, lightweight UI built with React + Vite + Tailwind  

---

## 🛠️ Tech Stack
- **React** (Vite)
- **Tailwind CSS**
- **color-thief-browser** for palette extraction
- **FileSaver** for PNG export
- **AWS Amplify** for hosting

---

## 📂 Project Structure
ai4bharat-microtool-week1/
│
├── public/
├── src/
│ ├── components/
│ ├── utils/
│ └── styles/
├── .kiro/
│ ├── kiro-notes.md
│ ├── kiro-snippets/
│ └── kiro-prompt-recording.txt
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── amplify.yml
└── README.md

yaml
Copy code

---

## ▶️ Run Locally

### 1. Install dependencies
npm install

shell
Copy code

### 2. Start development server
npm run dev

makefile
Copy code

Open:  
`http://localhost:5173`

### 3. Build for production
npm run build

yaml
Copy code

---

## 🌐 Deployment (AWS Amplify)

1. Push the code to a **public GitHub repository**  
2. Open AWS Amplify → *Host Web App*  
3. Connect GitHub → select your repo  
4. Choose branch **main**  
5. Deploy  
6. Copy the live URL for your dashboard submission  

Amplify auto-detects Vite and builds using `amplify.yml`.

---

## 📁 `.kiro` Directory (Required)

This project contains a `.kiro` folder including:
- Prompt history  
- Kiro-generated code snippets  
- Notes on how Kiro accelerated the development  

This is required for AI for Bharat Week 1 submissions.

---

## 📝 Blog Post (AWS Builder Center)

The blog explains:
- Problem & why this tool helps  
- Technical architecture  
- How Kiro accelerated development  
- Screenshots & code snippets  
- GitHub repository link  
- Live demo link  

---

## 📜 License
This project is open for learning and demonstration under AI for Bharat.

---

## 👨‍💻 Author
Somaditya Biswas
