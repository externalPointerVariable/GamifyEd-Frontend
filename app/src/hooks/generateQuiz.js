import config from "../config/config.js";

const generateStudentQuiz = async (
  academicLevel = "University",
  topics = ["Artificial Intelligence", "Machine Learning"],
  numberOfQuestions = 10
) => {
  const myHeaders = new Headers();
  myHeaders.append("academicLevel", academicLevel);
  myHeaders.append("topics", JSON.stringify(topics));
  myHeaders.append("numberOfQuestions", numberOfQuestions.toString());
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "csrftoken=JLcr9XsggpD9stL9XQFQCPdrEWnL8Dps"); // Update this if needed

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: "", // Required by backend
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/quiz/student",
      requestOptions
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch quiz: ${errorText}`);
    }

    const data = await response.text(); // or .json() if response is JSON
    return data;
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw error;
  }
};

export { generateStudentQuiz };
