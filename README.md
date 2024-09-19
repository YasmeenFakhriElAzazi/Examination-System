#Examination System
This project is a dynamic and interactive examination system that provides a seamless experience for students taking exams online. It ensures secure registration, offers real-time question interaction, and includes essential features to enhance the exam-taking process.

Features
🔒 User Registration with Local Storage
Secure and unique user registration: The system ensures that users can register only once using a unique email.
Local storage: User data is stored locally, preventing duplicate registrations with the same email address.
📸 Image Upload with FileReader
Profile picture upload: Users can upload their profile pictures during registration.
Image display: The profile picture is displayed on the exam page using the FileReader API for a personalized experience.
✅ Form Validation
Robust validation: All input fields are validated to ensure data integrity and a smooth user registration process.
Real-time feedback: Users receive feedback on the validity of their inputs, reducing potential errors.
📚 Dynamic Question Selection
Randomized question sets: Exam questions are stored in a JSON file and fetched randomly. Each student receives a unique set of 10 questions per exam session.
Fair testing environment: This dynamic selection ensures no two users get the same set of questions, promoting fairness in exams.
⏲ Exam Timer
Countdown timer: A timer is displayed during the exam, counting down from the total time allocated.
Auto-submit on time-out: When the timer reaches zero, the exam is automatically submitted.
Early submission: Users can submit their exam early if they finish before the time is up and receive their results immediately.
🔄 Question Review
Mark for review: Users can mark questions they are unsure about and revisit them before submitting the exam.
Improved decision-making: This feature helps users review and improve their answers before final submission.
How to Run the Project
Clone the repository:
git clone https://github.com/yourusername/examination-system.git
Open the project in your favorite IDE.
Launch the application by opening index.html in your browser.
Technologies Used
HTML/CSS/JavaScript: For the user interface and core functionality.
Local Storage: To store user data securely and manage registrations.
FileReader API: For handling profile picture uploads.
JSON: Used for storing and retrieving exam questions.
Contributing
Feel free to fork this project and submit pull requests. Contributions are always welcome!

License
This project is licensed under the MIT License.
