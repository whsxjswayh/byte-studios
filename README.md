## 🎨 **Byte Studio** - Art Portfolio Database System
#### Byte Studio is a web-based portfolio designed to showcase our creative artworks from students and artists. It features a secured admin panel where the team can manage, upload, and organize the creative artworks/works. And it allows users to view and explore the entire portfolio.

## 📖 **Table of Contents**
- **[Project Overview](https://github.com/whsxjswayh/byte-studios.github.io/blob/Jam006-patch-1?tab=readme-ov-file#-project-overview)**
- **[Technology Stack](https://github.com/whsxjswayh/byte-studios.github.io/blob/Jam006-patch-1/README.md#-technology-stack)**
- **[Team & Contributions](https://github.com/whsxjswayh/byte-studios.github.io/blob/Jam006-patch-1/README.md#-team--contributions)**
- **[System Features](https://github.com/whsxjswayh/byte-studios.github.io/blob/Jam006-patch-1/README.md#-system-features)**
- **[Database Structures](https://github.com/whsxjswayh/byte-studios.github.io/blob/Jam006-patch-1/README.md#%EF%B8%8F-database-structure)**
- **[How to run the program](https://github.com/whsxjswayh/byte-studios.github.io/blob/Jam006-patch-1/README.md#-how-to-run-the-program)**

## 🔭 **Project Overview**

### 🎯 **Project Goals & Objective**:
#### The primary goal of Byte Studio is to bridge the gap between creative expression and technical implementation. We aim to demonstrate how modern web systems communicate effectively between a frontend interface, a backend logic layer, and a cloud-based database.

### 👥 **Target Audience**:
- **Studio Members**: To manage and display their personal portfolios.
- **Creatives**: Looking for inspiration or a platform layout to emulate.
- **Potential Clients**: Viewing the gallery to scout talent.

## 🛠 **Technology Stack**

### **Frontend**
- Designing/Prototyping: Framer
- Structure: HTML5
- Styling: CSS3
- Interactivity: JavaScript

### **Backend & Database**
- Authentication: Firebase Auth
- Database: Firebase
- Storage: Firebase Cloud Storage

## 🤝 **Team & Contributions**

### **Joshua Aaron L. Matriano** - Frontend Lead & Developer
- Designed the user interface and prototype using Framer 
- Developed the fully responsive static website using HTML, CSS, and JavaScript 
- Implemented an interactive, clickable grid gallery for the project showcase 
- Created reusable layout templates for detailed case studies(didn't used due to deadlines)

### **Jemzie Jimenez**- Backend Lead
- Firebase Project Setup and Configuration 
- Authentication System 
- Firestore Database, Schema, & Security 
- Cloud Storage Integration, Portfolio Management Dashboard 
- Admin Message Center, Contact Form from firestore firebase, Portfolio Management Dashboard

### **Nikhaela Rodillas** - Backend Developer
- Firestore Database Management
- Firebase Configuration Assistance

### **Precious Nicole Lacson** - Documentation
- Project Documentation Management
- Presentation Preparation

### **Kazzandra Mercurio** - Documentation
- Project Documentation Management
- Presentation Preparation

### **Kindes Chrince Lee**

## ✨ **System Features**

### 🌍 Public / Visitor Experience
- **Dynamic Gallery**: Browse a fully responsive grid of creative works.
- **Smart Filtering**: Sort and filter artworks by category
- **Artist Profiles**: View detailed profiles of specific members.
- **Contact Integration**: Direct messaging via a functional contact form.

### 🛡️ Admin / Backend Panel
- **Secure Authentication**: Protected login system for team members only.
- **Content Management (CRUD):**
    - Upload new artwork with metadata.
    - Edit existing details or delete outdated works.
    - Manage artwork categories.
-  **Profile Management**: Update artist bios and details.
-  **Message Center**: View inquiries sent via the public contact form.

## 🗄️ **Database Structure**
#### Our project uses Google Cloud Firestore (NoSQL). Below is the schema design outlining the collections and their purposes.

### 📂 **Collections(Tables)**
1. **Portfolio (Artworks)**
   - Purpose: This serves as the main gallery. It stores all metaadta relatedd to the uploaded artworks.
   - Key Fields:**artist, category, client, description, imageUrl, storagePath, title, uploadedAt, views, year**
2. **Team (The Minds)**
   - Purpose: Stores the profile information of the Byte Studio members. This allows to dynamically generate the artist profile without hardcoding HTML.
   - Key Fields: **bio, createdAt, imageUrl, link, name, role, skills, storagePath**
3. **Messages (Inquiries)**
   - Purpose: Captures data submitted via the public "Contact Us" form. These documents are read-only for the public but readable by Admins in the Dashboard.
   - Key Fiels: **email, message, name, read, replied, timestamp**

### **🔗 Key Relationships**
#### **Team ↔ Portfolio (One-to-Many)**
- **Logic**: The artist field in the Portfolio collection acts as a reference to the Team collection.
- **Function**: This allows the system to query all artworks where artist == Name of the Artist to buildd specific profile showcases.

## 🚀 How to Run the Program
> [!NOTE]
> **Active Internet Connection Required:** This project relies on Firebase (Cloud Firestore) for database connections and fetching images. The portfolio will not load content if you are offline.

### **Option A: Developer Setup (Recommended)**
1. **Download the [project files (ZIP)](https://github.com/whsxjswayh/byte-studios.github.io/tree/Jam006-patch-1)**
2. **Open in Editor:**
   - Launch Visual Studio Code.
   - Open the folder where you extracted the project files.
3. **Install Extensions:**
   - For the best experience, install the following VS Code extensions:
       - **Live Server (by Ritwick Dey)** - To run a local development server.
       - **HTML CSS Support (Optional)** - For better syntax highlighting.
4. **Launch:**
    - Right-click index.html and select "Open with Live Server".

### Option B: Quick View
1. **Download the [project files (ZIP)](https://github.com/whsxjswayh/byte-studios.github.io/tree/Jam006-patch-1)**
2. **Launch:**
   - Navigate to the downloaded folder.
   - Double-click index.html to open it directly in your default web browser.
