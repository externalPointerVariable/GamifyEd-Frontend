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
      `${config.aiEndpoint}api/quiz/student`,
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

const generateTestQuiz = async (
  academicLevel = "University",
  topics = ["Artificial Intelligence", "Machine Learning"],
  numberOfQuestions = 10,
  difficulty = "easy"
) => {
  const myHeaders = new Headers();
  myHeaders.append("academicLevel", academicLevel);
  myHeaders.append("topics", JSON.stringify(topics));
  myHeaders.append("numberOfQuestions", numberOfQuestions.toString());
  myHeaders.append("difficulty", difficulty.toString());
  myHeaders.append("Content-Type", "application/json");

  const raw = "";

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${config.aiEndpoint}api/quiz/teacher`,
      requestOptions
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch quiz: ${errorText}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw error;
  }
};

export { generateStudentQuiz, generateTestQuiz };
