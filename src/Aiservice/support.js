import axios from "axios";

export const generateDescription = async (projectTitle) => {
  const apiKey = "your-openai-api-key-here"; // Replace with your API key
  const prompt = `Generate a professional project description for the project titled: ${projectTitle}`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003", // Using GPT-3.5 or GPT-4
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const description = response.data.choices[0].text.trim();
    return description;
  } catch (error) {
    console.error("Error generating description:", error);
    return null;
  }
};
